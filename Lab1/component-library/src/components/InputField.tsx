import React from "react";

type InputFieldError =
  | { type: 'INVALID_TYPE'; message: string }
  | { type: 'INVALID_VALUE'; message: string };
// Tipo de propiedades del campo de entrada
// limitamos la entrada a solo dos tipos: 'text' y 'number'
// y el tipo de valor a 'string' y 'number' respectivamente
type InputFieldProps = {
  type: 'text' | 'number';
  value: string | number;
  onChange: (value: string | number) => void;
};
function InputField({ type, value, onChange }: Readonly<InputFieldProps>) {
  // Comprobación de errores: nos aseguramos de que el tipo de `value` es correcto según el tipo del campo
  if (type === 'number' && typeof value !== 'number') {
    const error: InputFieldError = { type: 'INVALID_VALUE', message: 'Value must be a number when type is "number"' };
    return <div className="error">{error.message}</div>;  // Mostramos el error
  }
  if (type === 'text' && typeof value !== 'string') {
    const error: InputFieldError = { type: 'INVALID_VALUE', message: 'Value must be a string when type is "text"' };
    return <div className="error">{error.message}</div>;  // Mostramos el error
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = type === 'number' ? parseFloat(event.target.value) : event.target.value;
    onChange(inputValue);
  };
  return (
    <input
      type={type}
      value={value}
      onChange={handleChange}
    />
  );
}
export default InputField;