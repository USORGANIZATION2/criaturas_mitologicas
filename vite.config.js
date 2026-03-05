import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'  // ← agrega esto

export default defineConfig({
  plugins: [
    tailwindcss(),  // ← agrega esto PRIMERO
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})