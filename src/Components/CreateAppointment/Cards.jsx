import React, { useState } from 'react'
import axios from 'axios'
import './Cardsstyle.css' // Import your CSS file

import { useMutation } from 'react-query'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

const AppointEndpoint = 'http://localhost:5000/api/form/create'

const form = async ({ patientName, phoneNumber }) => {
  const response = await axios.post(
    AppointEndpoint,
    JSON.stringify({ patientName, phoneNumber }),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  )
  return response.data
}

const InputContainer = () => {
  const [patientName, setPatientName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [errorMsg, setError] = useState('')

  const { mutate, isLoading, error } = useMutation(form, {
    onSuccess: (data) => {
      setPatientName('')
      setPhoneNumber('')
      toast.success('Appointment created successfully')
    },
    onError: (error) => {
      if (!error.response) {
        setError('No Server Response')
      } else if (error.response?.status === 400) {
        toast.error('Something is wrong')
      }
    },
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    mutate({ patientName, phoneNumber })
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="main-container">
          <div className="practice">
            <div className="input-container">
              <input
                type="text"
                id="input"
                required
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
              />
              <label
                htmlFor="input"
                className={`label ${patientName && 'filled'}`}
              >
                Patient Name
              </label>
              <div className="underline"></div>
            </div>
            <div className="input-container">
              <input
                type="tel"
                id="input"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <label
                htmlFor="input"
                className={`label ${phoneNumber && 'filled'}`}
              >
                Your Phone Number
              </label>
              <div className="underline"></div>
            </div>
            {/* <div className="input-container">
              <input
                type="text"
                id="input"
                required
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <label
                htmlFor="input"
                className={`label ${inputValue && "filled"}`}
              >
                Select Your Flexible Hour
              </label>
              <div className="underline"></div>
            </div> */}
            {/* <div className="input-container">
              <input
                type="text"
                id="input"
                required
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <label
                htmlFor="input"
                className={`label ${inputValue && "filled"}`}
              >
                Select Date
              </label>
              <div className="underline"></div>
            </div> */}
            {/* <div className="input-container">
              <input
                type="text"
                id="input"
                required
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <label
                htmlFor="input"
                className={`label ${inputValue && "filled"}`}
              >
                Select Doctor
              </label>
              <div className="underline"></div>
            </div> */}

            <button class="rectangle-div" type="submit" disabled={isLoading}>
              MAKE AN APPOINTMENT
            </button>
          </div>
        </div>
      </form>
      {error && <p>{errorMsg}</p>}
      {mutate.isLoading && <p>Loading</p>}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  )
}

export default InputContainer
