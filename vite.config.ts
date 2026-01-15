import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env but DO NOT inline private secrets into client bundles.
  // Use import.meta.env.VITE_* for public values (only if safe to expose).
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    }
    // NOTE: removed define: { 'process.env.GEMINI_API_KEY': ... } to avoid
    // leaking private keys into the client bundle.
  };
});
