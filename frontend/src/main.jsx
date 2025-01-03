import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from './components/ui/sonner.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      
        <App />
        <Toaster />
      
    </Provider>
  </React.StrictMode>,
)

// import { StrictMode } from 'react'
// import { createRoot} from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { Toaster } from 'sonner'



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
 
//     <App />
   
//    <Toaster/>
//   </StrictMode>,
// )
