import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/own-pipeline-react-app/', 
  plugins: [react()],
});
