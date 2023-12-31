import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Otp from './pages/Otp';
import Error from './pages/Error';
import Headers from './components/Headers';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Details from './pages/Details'
import Edit from './pages/Edit'

function App() {
  return (
    <>
      <Headers />
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/user/otp' element={<Otp />} />
        <Route path='*' element={<Error />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
      </Routes>
    </>
  );
}

export default App;