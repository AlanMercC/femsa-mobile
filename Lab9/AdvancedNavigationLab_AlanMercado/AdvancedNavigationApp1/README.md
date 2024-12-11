# AdvancedNavigationApp

## Summary

**AdvancedNavigationApp** es una aplicación móvil que utiliza React Native y TypeScript para demostrar patrones avanzados de navegación y gestión de estado. El objetivo principal de esta aplicación es proporcionar una experiencia fluida y eficiente de navegación, tanto en un flujo de autenticación como dentro de la aplicación misma. La app incluye varias pantallas y navegadores, como un **Drawer Navigator**, **Bottom Tab Navigator** y **Stack Navigator**, que están optimizados para el rendimiento y la gestión de estado a través de Redux.

### Features

- **Autenticación**: Los usuarios pueden iniciar sesión y registrarse en la aplicación.
- **Pantallas Principales**: Home, Feed, Perfil, y Ajustes.
- **Navegación Completa**: Incluye navegadores **Drawer**, **Bottom Tabs** y **Stack**, con pantallas anidadas.
- **Manejo de Estado Global**: Utiliza Redux para gestionar la autenticación y las preferencias de usuario.
- **Optimización de Rendimiento**: Lazy loading de pantallas, memoización de componentes y manejo eficiente de imágenes.
- **Deep Linking**: Configurado para manejar enlaces profundos y navegación basada en URL.

## Navigation Structure

La estructura de navegación se organiza de la siguiente manera:

### 1. **Root Navigator**
   - Si el usuario está autenticado, se muestra el **App Navigator**.
   - Si el usuario no está autenticado, se muestra el **Auth Navigator** (Login/Registro).

### 2. **Auth Navigator** (Stack Navigator)
   - **Login**: Pantalla de inicio de sesión.
   - **Register**: Pantalla de registro.

### 3. **App Navigator** (Drawer Navigator)
   - **Home**: Muestra el **Bottom Tab Navigator**.
   - **Profile**: Pantalla de perfil.
   - **Settings**: Pantalla de ajustes.
   - **EditProfile**: Permite al usuario editar su perfil.

### 4. **Bottom Tab Navigator** (Dentro de la opción "Home")
   - **Feed**: Pantalla con feed de publicaciones.
   - **Search**: Pantalla para buscar productos o destinos.
   - **Notifications**: Pantalla con notificaciones.
   - **Details**: Pantalla de detalles de un producto o destino.

### 5. **Deep Linking**:
   - Configurado para que las URLs como `myapp://home`, `myapp://profile/:id`, y `myapp://details/:itemId` puedan abrir directamente las pantallas correspondientes.

## Customizations Made to Navigation Components

### 1. **Custom Headers**:
   - Se crearon cabeceras personalizadas para las pantallas usando la opción `header` de React Navigation. Estas cabeceras incluyen el logo de la aplicación y botones de acción, como el de logout.

### 2. **Custom Tab Bar Icons**:
   - Se utilizaron íconos personalizados en la barra de pestañas usando la librería `react-native-vector-icons`. Además, se personalizó el color de los íconos activos e inactivos en la barra de navegación inferior.

### 3. **Custom Animations**:
   - Se implementaron transiciones personalizadas entre pantallas usando las opciones de animación disponibles en React Navigation, logrando efectos de desvanecimiento y deslizamiento al navegar entre pantallas.

## Performance Optimizations Applied

### 1. **Lazy Loading**:
   - Se implementó el `React.lazy` y `Suspense` para cargar las pantallas solo cuando son necesarias, reduciendo el tamaño inicial del bundle y mejorando los tiempos de carga.

### 2. **Memoization**:
   - Se utilizó `React.memo`, `useMemo` y `useCallback` en los componentes y funciones que no necesitan re-renderizarse en cada actualización de estado, optimizando el rendimiento.

### 3. **Code Splitting**:
   - Las pantallas fueron divididas en módulos de manera lógica para que solo se carguen cuando son accesadas. Esto se hace mediante `React.lazy` en combinación con la carga diferida de módulos.

### 4. **Optimización de Imágenes**:
   - Se optimizaron las imágenes utilizando el formato WebP y se implementaron estrategias de almacenamiento en caché para mejorar el tiempo de carga y reducir el uso de la red.

## State Management Approach and Implementation

La gestión del estado global se maneja mediante **Redux**, utilizando el paquete `@reduxjs/toolkit` para facilitar la creación de reducers y acciones.

### 1. **Redux Store**:
   - Se creó un **slice** para manejar el estado de la autenticación, el cual incluye acciones como `login`, `logout` y `setUser`.
   - El estado se persiste utilizando `AsyncStorage` para que la sesión se mantenga activa entre reinicios de la app.

### 2. **Uso de `useSelector` y `useDispatch`**:
   - Se utilizan los hooks `useSelector` para acceder al estado global y `useDispatch` para despachar acciones, como actualizar el estado de autenticación o preferencias de usuario.

### 3. **Sincronización con Navegación**:
   - La autenticación y el estado de sesión están sincronizados con la navegación, redirigiendo al usuario al flujo de autenticación si no está autenticado.

## Challenges Encountered and How They Were Addressed

1. **Problema con Lazy Loading y Navigation Props**:
   - Cuando se implementó `React.lazy` y `Suspense`, se presentaron problemas al intentar pasar el `navigator` como prop a las pantallas cargadas perezosamente. Esto se resolvió mediante el uso de un **wrapper** para envolver las pantallas con la lógica de navegación.

2. **Integración de Deep Linking**:
   - Configurar **Deep Linking** en React Navigation fue un desafío al principio, ya que se necesitaba mapear correctamente las rutas personalizadas. Esto se resolvió con una correcta configuración en el archivo `AppNavigation.tsx`, utilizando la propiedad `linking`.

3. **Optimización del Rendimiento**:
   - La implementación de **memoización** y **lazy loading** no fue trivial, ya que requería garantizar que el estado y las props se gestionaran correctamente. Esto se resolvió mediante la separación del código y la implementación de `React.memo` en componentes claves.

## Instructions on How to Run Your App

1. **Clonar el repositorio**:
2. **Instalar las dependencias**:

```
cd AdvancedNavigationLab_AlanMercado
cd AdvancedNavigationApp
npm install
```
3. **Instalar dependencias nativas para iOS (si estás usando macOS):**

```
npx pod-install ios
```
4. **Ejecutar la aplicación en un emulador o dispositivo:**
Para iOS:
```
npx react-native run-ios
```
5. **Para Android:**
```
npx react-native run-android
```

## Evidencia

![./RM-img.gif](RM-img.gif)