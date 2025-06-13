import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.getElementById('btn').addEventListener('click', async () => {
  const { square } = await import('./utils/math.js');
  alert(`Square of 4 is ${square(4)}`);
});

