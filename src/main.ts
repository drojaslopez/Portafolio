import './CSS/style.css'
import { setupCounter } from '../src/counter'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   
    <h1>Este es mi web de portafolio....</h1>
    <h1>En contrucción</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
