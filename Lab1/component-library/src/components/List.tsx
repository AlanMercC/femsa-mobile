import React from "react";

type ListError =
  | { type: 'INVALID_ITEMS'; message: string }
  | { type: 'INVALID_FILTER'; message: string };

  // Tipo de propiedades de la lista
  // items: lista de elementos
  // filter: función de filtro opcional
type ListProps<T> = {
  items: readonly T[];
  filter?: (item: T) => boolean;
};
function List<T>({ items, filter }: Readonly<ListProps<T>>) {
  
  if (!Array.isArray(items)) {
    const error: ListError = { type: 'INVALID_ITEMS', message: 'items must be an array' };
    return <div className="error">{error.message}</div>;  // Mostramos el error
  }
  // Comprobación de errores: nos aseguramos de que el filtro (que se manda) es una función
  if (filter && typeof filter !== 'function') {
    const error: ListError = { type: 'INVALID_FILTER', message: 'filter must be a function' };
    return <div className="error">{error.message}</div>;  // Mostramos el error
  }
  const filteredItems = filter ? items.filter(filter) : items;
  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>{JSON.stringify(item)}</li>
      ))}
    </ul>
  );
}
export default List;









