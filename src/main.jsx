import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './assets/About/About.jsx'
import Home from './assets/Home/Home.jsx'
import './index.css'
import Learn from './assets/Learn/Learn.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Compodent from './assets/MyCompodent/Compodent.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/Compodent', element: <Compodent />},
  {path: '/About', element: <About/>},
  {path: '/Home', element: <Home/>},
  {path: '/Learn', element: <Learn/>}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
