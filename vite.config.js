import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true, // Ensures it listens on 0.0.0.0
    port: parseInt(process.env.PORT) || 10000, // Use Render's PORT or fallback to 3000
  },
});