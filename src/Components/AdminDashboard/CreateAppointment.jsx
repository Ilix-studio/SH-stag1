import React, { useState, useEffect } from "react";
import axios from "axios";
import { useMutation } from "react-query";
import toast, { Toaster } from "react-hot-toast";
// import {
//   AppointmentFormStyled,
//   InputGroupStyled,
//   IconStyled,
//   InputLabelStyled,
//   SubmitButtonStyled,
//   SelectStyled,
//   OptionStyled,
//   CustomDatePicker,
//   ErrorMessageStyled,
//   BackButtonStyled,
// } from "./style";
import { useNavigate } from "react-router-dom";
import inputData from "./inputData.js";

import styled from "styled-components";
import DatePicker from "react-datepicker"; // Import the date picker library
import "react-datepicker/dist/react-datepicker.css";

export const AppointmentFormStyled = styled.form`
  border-radius: 20px;
  box-shadow:
    0 4px 4px rgba(0, 0, 0, 0.25),
    0 4px 4px rgba(0, 0, 0, 0.25),
    2px 4px 8px #fff;
  border: 1px solid #ce4141;
  background-color: #fff;
  display: flex;
  max-width: 400px; /* Increase the width */
  flex-direction: column;
  font-size: 16px; /* Increase the font size */
  color: #000;
  font-weight: 400;
  padding: 30px 60px; /* Increase the padding */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const InputGroupStyled = styled.div`
  display: flex;
  gap: 12px; /* Increase the gap */
  margin-top: 24px; /* Increase the margin */

  &:first-child {
    margin-top: 0;
  }
`;

export const IconStyled = styled.img`
  aspect-ratio: 0.94;
  object-fit: auto;
  object-position: center;
  width: 24px; /* Increase the width */
  margin: 1px 0 18px 0;
`;

export const InputLabelStyled = styled.input`
  font-family:
    Open Sans,
    sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0 20px 0; /* Add bottom margin to increase spacing */
  padding: 8px;
  font-size: 16px;
  border: none; /* Remove all borders */
  border-bottom: 2px solid #000000; /* Add bottom border */
  outline: none; /* Remove the default outline on focus */
  max-width: 210px;

  &:focus {
    border-bottom-color: #ce4141; /* Ensure the bottom border color remains on focus */
  }
`;

export const SubmitButtonStyled = styled.button`
  text-shadow: 0 3px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-shadow:
    0 4px 4px rgba(0, 0, 0, 0.25),
    0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #ce4141;
  align-self: center;
  margin-top: 30px; /* Increase the margin */
  color: #fff;
  justify-content: center;
  padding: 12px 18px; /* Increase the padding */
  font:
    600 16px Open Sans,
    sans-serif; /* Increase the font size */
  border: none;
  cursor: pointer;
`;

export const SelectStyled = styled.select`
  font-family:
    Open Sans,
    sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0 24px 0; /* Add bottom margin to increase spacing */
  padding: 8px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #000000; /* Add a bottom border only */
  outline: none; /* Remove the default outline on focus */
  max-width: 210px;

  &:focus {
    border-bottom-color: #ce4141; /* Change bottom border color on focus */
  }
`;

export const OptionStyled = styled.option`
  color: #000;
  padding: 8px;
`;

export const CustomDatePicker = styled(DatePicker)`
  font-family:
    Open Sans,
    sans-serif;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0 24px 0; /* Add bottom margin to increase spacing */
  padding: 8px;
  font-size: 16px;
  border: none;
  border-bottom: 2px solid #000000;
  outline: none;
  max-width: 210px;

  &:focus {
    border-bottom-color: #ce4141;
  }
`;

export const ErrorMessageStyled = styled.div`
  color: red;
  font-size: 12px;
  margin-left: 60px;
  margin-top: 5px;
  margin-bottom: 10px; // Add some space below the error message
`;

export const BackButtonStyled = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 0.5rem 1rem;
  background-color: transparent;
  color: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s,
    box-shadow 0.3s;

  &:hover {
    background-color: #2c3e50;
    color: white;
    box-shadow: 1px 3px 5px #34495e;
    border: 1px solid #2c3e50;
  }

  @media (max-width: 480px) {
    top: 10px;
    left: 10px;
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
  }
`;

const InputGroup = ({
  icon,
  label,
  type,
  id,
  options,
  isDate,
  value,
  onChange,
  reset,
}) => {
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);

  useEffect(() => {
    if (reset) {
      setIsTouched(false);
      setIsPhoneValid(true);
    }
  }, [reset]);

  useEffect(() => {
    if (type === "tel" && isTouched) {
      setIsPhoneValid(value.length === 10 && /^[9876]/.test(value));
    }
  }, [value, type, isTouched]);

  const handleDateChange = (date) => {
    onChange(id, date);
  };

  const handlePhoneChange = (event) => {
    let newValue = event.target.value.replace(/\D/g, "");
    if (newValue.length > 10) {
      newValue = newValue.slice(0, 10);
    }
    setIsPhoneValid(newValue.length === 10 && /^[9876]/.test(newValue));
    onChange(id, newValue);
    setIsTouched(true);
  };

  const handleInputChange = (event) => {
    onChange(id, event.target.value);
    if (type === "tel") setIsTouched(true);
  };

  return (
    <div>
      <InputGroupStyled>
        <IconStyled src={icon} alt="" />
        {type === "select" ? (
          <SelectStyled
            id={id}
            aria-label={label}
            required
            onChange={handleInputChange}
            value={value}
          >
            <option value="" disabled>
              {label}
            </option>
            {options.map((option, index) => (
              <OptionStyled key={index} value={option.value}>
                {option.label}
              </OptionStyled>
            ))}
          </SelectStyled>
        ) : isDate ? (
          <CustomDatePicker
            selected={value}
            onChange={handleDateChange}
            dateFormat="dd-MM-yyyy"
            minDate={new Date(new Date().getTime() + 24 * 60 * 60 * 1000)}
            required
          />
        ) : type === "tel" ? (
          <InputLabelStyled
            type={type}
            id={id}
            placeholder={label}
            aria-label={label}
            value={value}
            onChange={handlePhoneChange}
            pattern="\d*"
            required
          />
        ) : (
          <InputLabelStyled
            type={type}
            id={id}
            placeholder={label}
            aria-label={label}
            value={value}
            onChange={handleInputChange}
            required
          />
        )}
      </InputGroupStyled>
      {type === "tel" && !isPhoneValid && isTouched && (
        <ErrorMessageStyled>
          Please enter a 10 digit number starting with 9, 8, 7, or 6
        </ErrorMessageStyled>
      )}
    </div>
  );
};

const CreateAppointment = () => {
  const navigate = useNavigate();
  const initialFormValues = {
    fullName: "",
    phoneNumber: "",
    appointmentDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
    appointmentTime: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [reset, setReset] = useState(false);

  const handleInputChange = (id, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const mutation = useMutation(
    (newAppointment) =>
      axios.post(
        "https://sultan-hospital-backend-api.onrender.com/api/form/create",
        newAppointment
      ),
    {
      onSuccess: () => {
        toast.success("Appointment created successfully!", {
          duration: 1000,
          style: {
            fontSize: "18px",
            minWidth: "350px",
          },
        });
        setFormValues(initialFormValues);
        setReset(true);
        setTimeout(() => setReset(false), 0);
        setTimeout(() => navigate("/adminDashboard"), 3000);
      },
      onError: (error) => {
        toast.error(
          `Failed to create appointment: ${error.response?.data?.message || error.message}`,
          {
            duration: 3000,
            style: {
              fontSize: "18px",
              minWidth: "350px",
            },
          }
        );
      },
    }
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const { phoneNumber } = formValues;
    if (phoneNumber.length !== 10 || !/^[9876]/.test(phoneNumber)) {
      toast.error(
        "Please enter a valid 10 digit phone number starting with 9, 8, 7, or 6",
        {
          duration: 3000,
          style: {
            fontSize: "18px",
            minWidth: "350px",
          },
        }
      );
      return;
    }
    const appointmentData = {
      patientName: formValues.fullName,
      phoneNumber: formValues.phoneNumber,
      date: formValues.appointmentDate.toISOString(),
      timeSchedule: formValues.appointmentTime,
    };
    mutation.mutate(appointmentData);
  };

  return (
    <>
      <Toaster />
      <BackButtonStyled onClick={() => navigate("/adminDashboard")}>
        Back to Dashboard
      </BackButtonStyled>
      <AppointmentFormStyled onSubmit={handleSubmit}>
        {inputData.map((input, index) => (
          <InputGroup
            key={index}
            {...input}
            value={formValues[input.id]}
            onChange={handleInputChange}
            reset={reset}
          />
        ))}
        <SubmitButtonStyled type="submit">
          Create an Appointment
        </SubmitButtonStyled>
      </AppointmentFormStyled>
    </>
  );
};

export default CreateAppointment;
