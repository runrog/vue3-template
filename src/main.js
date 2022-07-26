import { createApp } from 'vue';
import VueLogger from 'vuejs3-logger';
import environments from './globals/environments';
import store from './store';
import router from './routes';
import App from './App.vue';
import './styles/main.scss';

const app = createApp(App);

app.config.globalProperties.$env = environments;
app.use(store);
app.use(router);
app.use(VueLogger, {
  isEnabled: !environments.prod,
  logLevels: ['debug', 'info', 'warn', 'error', 'fatal'],
  stringifyArguments: false,
  showLogLevel: false,
  showMethodName: false,
  showConsoleColors: true,
});
app.mount('#inside-revive');
