import { createApp } from 'vue';
import VueLogger from 'vuejs3-logger';
import environments from './globals/environments';
import store from './store';
import App from './App.vue';
import './styles/main.scss';

const isProd = process.env.NODE_ENV === 'production';

const app = createApp(App);
// global prototypes
app.config.globalProperties.$env = environments;
app.use(store);
app.use(VueLogger, {
  isEnabled: !isProd,
  logLevels: ['debug', 'info', 'warn', 'error', 'fatal'],
  stringifyArguments: false,
  showLogLevel: false,
  showMethodName: false,
  showConsoleColors: true,
});
app.mount('#app');
