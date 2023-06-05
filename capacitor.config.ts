import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'todolist.sogeti',
  appName: 'todolist-sogeti',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
