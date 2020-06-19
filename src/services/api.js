import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;

/* iOS com Emulador: localhost
iOS com físico: IP máquina
Android com Emulador: localhost (adb reverse)
Android com Emulador: 10.0.2.2 (Andoid studio)
Android com Emulador:10.0.3.2 (Genymotion)
Android com físico: IP da máquina */