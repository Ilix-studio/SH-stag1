import { useState, useEffect } from "react";
import {
  InputGroupStyled,
  IconStyled,
  InputLabelStyled,
  SelectStyled,
  OptionStyled,
  CustomDatePicker,
  ErrorMessageStyled,
} from "./style";

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
    <>
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
    </>
  );
};

export default InputGroup;
