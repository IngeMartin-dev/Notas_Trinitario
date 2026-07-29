import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .then(() => {
    // Hide the loading screen once the app is ready
    const loadingElement = document.getElementById('loading');
    if (loadingElement) {
      loadingElement.classList.add('hidden');
      setTimeout(() => {
        loadingElement.style.display = 'none';
      }, 300);
    }
  })
  .catch((err) => console.error(err));
