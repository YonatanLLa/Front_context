import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FiltersProvider } from './context/filters.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <FiltersProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FiltersProvider>,
)
