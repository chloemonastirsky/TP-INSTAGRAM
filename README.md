# Catstagram 🐾 (Clon de Instagram con React)

¡Bienvenido/a a **Catstagram**! Este proyecto es un clon de la interfaz web de Instagram adaptado para visualizar publicaciones dinámicas de gatitos consumidas desde una API externa. Desarrollado como Trabajo Práctico para la especialización en Informática.

---

## 🚀 Cómo Ejecutar el Proyecto

Seguí estos pasos para clonar y ejecutar la aplicación localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/chloemonastirsky/TP-INSTAGRAM.git](https://github.com/chloemonastirsky/TP-INSTAGRAM.git)
   cd TP-INSTAGRAM
   npm install]
   npm run dev


📁 Estructura del Proyecto
La organización de carpetas se estructuró de forma modular para separar las responsabilidades de la aplicación de la siguiente manera:

Plaintext
src/
├── assets/          # Imágenes estáticas, logos e íconos.
├── components/      # Componentes reutilizables de la interfaz.
│   ├── Header/      # Barra superior de navegación.
│   ├── Feed/        # Contenedor principal de publicaciones.
│   ├── Post/        # Tarjeta individual de publicación (Feed).
│   ├── Profile/     # Vista/Sección del perfil de usuario emulado.
│   └── Modal/       # Vista detallada/emergente de una publicación.
├── data/            # Archivos locales de datos simulados (comentarios, info de usuario).
├── services/        # Configuración de Axios y peticiones a la API.
├── App.jsx          # Componente principal y gestor de estados globales.
├── index.css        # Estilos globales y variables de diseño.


Figma base: https://www.figma.com/design/0mZB9BKCwfKvjJVtmhZRru/Instagram---Web-UI--Recreated---Community-?node-id=1-8326&t=w6Kms8Jl6tMnChKW-0


└── main.jsx         # Punto de entrada de React.



