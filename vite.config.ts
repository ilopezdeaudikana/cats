import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

import { loadEnv } from 'vite'

export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd()))

  // https://vitejs.dev/config/
  return defineConfig({
    plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
    test: {
      environment: 'jsdom',
      setupFiles: ['./tests-setup.ts'],
      globals: true,
      
    }
  });
}

