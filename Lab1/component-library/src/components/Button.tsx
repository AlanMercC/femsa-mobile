import React from "react";

// Definimos los posibles errores que puede tener el botón
type ButtonError =
  | { type: 'MISSING_ONCLICK'; message: string }
  | { type: 'INVALID_TYPE'; message: string };

  // Tipo de propiedades del botón
  // label: texto del botón
  // value: valor del botón
  // onClick: función que se ejecuta al hacer click
  // disabled: si el botón está deshabilitado
type ButtonProps<T> = {
  label: string;
  value: T;
  onClick?: (value: T) => void;
  disabled?: boolean;
};
function Button<T>({ label, value, onClick, disabled }: Readonly<ButtonProps<T>>) {
  // Comprobación de errores: nos aseguramos de que la función `onClick` es una función
  if (onClick && typeof onClick !== 'function') {
    const error: ButtonError = { type: 'INVALID_TYPE', message: 'onClick must be a function' };
    return <div className="error">{error.message}</div>;
  }
  return (
    <button
      onClick={() => onClick?.(value)}
      disabled={disabled}>
      {label}
    </button>
  );
}
export default Button;