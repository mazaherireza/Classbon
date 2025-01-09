import "./InputWithLabel.css";
import { useRef, useEffect } from "react";

const InputWithLabel = ({
  label,
  id,
  value,
  placeholder,
  onInputChange,
  type = "text",
  isFocused,
}) => {
  const handleChange = ({ target }) => {
    onInputChange(target.value);
  };
  
  // Imperative Paradigm <------ X
  const inputRef = useRef();
  useEffect(() => {
    if (isFocused && inputRef.current) inputRef.current.focus();
  }, [isFocused]);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        ref={inputRef}
      ></input>
    </>
  );
};

export default InputWithLabel;
