import { useState } from "react";

function useInput(defaultValue, validationFunction) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFunction(enteredValue);

  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    hasError: didEdit && !valueIsValid,
    handleInputChange,
    handleInputBlur,
  };
}

export default useInput;
