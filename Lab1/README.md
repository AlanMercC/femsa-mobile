# Componentes
## 1. Componente Button
El componente Button es un botón genérico que se adapta a diferentes tipos de datos mediante genéricos.
### Propiedades:
label (string): Texto que se debe muestra en el botón.
value (T): Valor que se pasa al evento onClick. T es un tipo genérico que permite cualquier tipo de valor.
onClick ((value: T) => void): Función opcional que se ejecuta al hacer clic en el botón. Recibe el valor value como argumento.
disabled (boolean): Indica si el botón debe estar deshabilitado o no.
### Métodos clave:
onClick: Este método es opcional y se ejecuta cuando el botón es presionado, pasando el value como argumento. La propiedad onClick es funcional, y si no se pasa o no es del tipo esperado, se maneja un error.
### Técnicas de TypeScript aplicadas:
Genéricos: Utilizamos T para hacer que el componente sea flexible con cualquier tipo de valor en el botón.
Manejo de errores: Se implementa un tipo de error personalizado para manejar cuando onClick no sea una función válida.

-----------------
## 2. Componente List
El componente List es una lista que puede mostrar cualquier tipo de colección y se puede aplicar un filtro para mostrar solo ciertos elementos.
### Propiedades:
items (readonly T[]): Arreglo readonly de elementos de tipo T. readonly nos ayuda a que la lista no se pueda modificar.
filter ((item: T) => boolean | undefined): Función opcional para filtrar los elementos. Si se proporciona, solo se mostrarán los elementos que cumplan la condición del filtro.
### Métodos clave:
filter: Si se pasa la función de filtro, se aplica a los elementos de la lista para obtener solo los que cumplan con la condición.
### Técnicas de TypeScript aplicadas:
Genéricos: Usamos T[] para que el componente pueda aceptar una lista de cualquier tipo.
readonly: La propiedad items es readonly, lo que significa que no se pueden realizar modificaciones sobre el arreglo.
Manejo de errores: Se verifica que items sea un arreglo y que filter, si se proporciona, sea una función. Si alguno de estos no es válido, se maneja el error y se muestra un mensaje adecuado.

---------------------
## 3. Componente InputField
El componente InputField es un campo de entrada genérico que puede ser de tipo text o number.
### Propiedades:
type ('text' | 'number'): Define el tipo, que puede ser text o number.
value (string | number): El valor actual del campo de entrada.
onChange ((value: string | number) => void): Función que se ejecuta cuando el valor del campo de entrada cambia. Recibe el nuevo valor como argumento.
### Métodos clave:
onChange: Este método se ejecuta cada vez que el valor del campo cambia, y pasa el valor actualizado como argumento.
handleChange:  handleChange convierte el valor del campo de acuerdo con el tipo (text o number) antes de enviarlo a la función onChange.
### Técnicas de TypeScript aplicadas:
Tipos literales: Utilizamos tipos como 'text' | 'number' para restringir el tipo de entrada.
Manejo de errores: Verificamos que el valor sea del tipo adecuado (string para campos de texto y número para campos numéricos). Si el tipo es incorrecto, se muestra un mensaje de error según sea el caso.