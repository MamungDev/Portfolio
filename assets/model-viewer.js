const viewer = document.querySelector('#hero-model');
const container = viewer.closest('.hero-model');
const status = container.querySelector('.model-status');

function showError() {
  container.classList.remove('is-loaded');
  status.textContent = 'The 3D model could not load. Please refresh to try again.';
}

viewer.addEventListener('load', () => {
  container.classList.add('is-loaded');
  status.textContent = '';
});
viewer.addEventListener('error', showError);

// Keep the viewer and its version local so this page needs no CDN at runtime.
import('./vendor/model-viewer/model-viewer.min.js').catch(showError);
