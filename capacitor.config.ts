import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'Plant Disease Detection',
  webDir: 'www',
  plugins: {
    Camera: {
      enableCamera: true,
    },
  },
};

export default config;
