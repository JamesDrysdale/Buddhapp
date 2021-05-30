import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import Bulma CSS
import "../node_modules/bulma/css/bulma.css";

// Imports for Font Awesome
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch() // This will kick of the initial replacement of i to svg tags and configure a MutationObserver

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(fas, faTwitter, faGithub);

createApp(App)
.use(router)
.component('fa', FontAwesomeIcon)
.mount('#app')
