# DogStagram 🐾 — Clon de Instagram con React

Clon de la interfaz web de Instagram que muestra publicaciones de perros consumidas desde TheDogAPI. Desarrollado como Trabajo Práctico.

**Diseño de referencia (Figma):** https://www.figma.com/design/FjbIXorIq2lSvU1CbVQuBv/Instagram---Web-UI--Recreated---Community-

---

## 🚀 Cómo ejecutar el proyecto

```bash
git clone https://github.com/chloemonastirsky/TP-INSTAGRAM.git
cd TP-INSTAGRAM
npm install
npm run dev
```

---

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── Header/        → Barra superior con logo, buscador e íconos
│   ├── Feed/          → Lista de publicaciones del feed
│   ├── Post/          → Tarjeta individual de cada publicación
│   ├── Modal/         → Vista detallada de una publicación (ventana emergente)
│   ├── Profile/       → Página de perfil del usuario
│   ├── SideBar/       → Barra derecha con sugerencias de usuarios
│   ├── Story/         → Componente de historia individual (reutilizable)
│   └── types/
│       └── tipos.ts   → Todos los tipos TypeScript del proyecto
├── App.tsx            → Componente raíz: maneja rutas y el estado del modal
├── App.css            → Estilos del layout general
└── main.tsx           → Punto de entrada de React
api.ts                 → Configuración de Axios y función fetchPosts
```

---

## 🧩 Componentes y su responsabilidad

| Componente | ¿Qué hace? |
|---|---|
| **Header** | Muestra el logo, la barra de búsqueda y los íconos de navegación. |
| **Feed** | Recorre el array de posts y renderiza un `<Post>` por cada uno. |
| **Post** | Muestra una publicación completa: avatar, foto, likes, caption. Tiene estado propio para like y guardar. |
| **Modal** | Ventana emergente que aparece al hacer click en una foto. Muestra la imagen ampliada, comentarios simulados y un input para comentar. |
| **Profile** | Página del perfil: foto, estadísticas, bio y grilla de publicaciones. |
| **SideBar** | Barra derecha con el usuario activo y sugerencias para seguir. |
| **Story** | Componente reutilizable para mostrar una historia con su anillo de degradado. |

---

## 🔗 Comunicación entre componentes con props

```
App
 ├── Header          (sin props, usa useNavigate internamente)
 ├── Feed            ← posts, onVerDetalle
 │    └── Post       ← post, onVerDetalle
 ├── Profile         ← posts, onVerDetalle
 ├── SideBar         (sin props, datos simulados internamente)
 └── Modal           ← post, onCerrar
```

Cuando el usuario hace click en una imagen del `Post`, se llama `onVerDetalle(post)`. Esa función viene de `App` y lo que hace es guardar ese post en el estado `postSeleccionado`. Cuando ese estado tiene un valor, se renderiza el `Modal`.

---

## 🪝 Hooks utilizados

| Hook | Dónde | Para qué |
|---|---|---|
| `useState` | `App.tsx` | Guarda el array de posts, el estado de carga, y el post seleccionado para el modal |
| `useState` | `Post.tsx` | Controla el estado de like (likeado/no likeado) y la cantidad de likes |
| `useState` | `Post.tsx` | Controla si el post fue guardado o no |
| `useState` | `Modal.tsx` | Controla el like dentro del modal y el texto del input de comentario |
| `useEffect` | `App.tsx` | Llama a `fetchPosts()` una sola vez al montar el componente |
| `useRef` | `App.tsx` | Evita la doble llamada a la API en React Strict Mode |

---

## 🌐 Consumo de la API

Se usa **TheDogAPI** para obtener imágenes. La configuración está en `api.ts`:

```ts
const api = axios.create({
  baseURL: 'https://api.thedogapi.com/v1',
  headers: { 'x-api-key': API_KEY },
})

export const fetchPosts = async (limit = 10): Promise<DogPost[]> => {
  const { data } = await api.get('/images/search', { params: { limit } })
  return data
}
```

---

## 🖼️ Visualización individual de publicaciones

Cuando hacés click en cualquier imagen (ya sea en el Feed o en el perfil), se llama `onVerDetalle(post)`. Esto actualiza el estado `postSeleccionado` en `App.tsx`. Mientras ese estado tenga un valor, se renderiza el `<Modal>` con la información del post seleccionado.

Para cerrar el modal: click en el fondo oscuro, o en el botón ✕.

---

## 👤 Perfil de usuario emulado

El perfil está simulado con datos fijos en el componente `Profile.tsx` y `SideBar.tsx`. No hay login ni registro. El objeto `USUARIO` contiene:
- Username
- Nombre completo
- Biografía
- Cantidad de seguidores y seguidos
- URL del avatar

Las publicaciones del perfil son las mismas que se cargan desde la API, mostradas en una grilla de 3 columnas.

---

## 🎨 Diseño Figma utilizado

https://www.figma.com/design/FjbIXorIq2lSvU1CbVQuBv/Instagram---Web-UI--Recreated---Community-