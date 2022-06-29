import './App.css';
import { useState } from 'react'
import Auth from '../Auth/Auth'
import NavBar from '../../components/NavBar/NavBar'
import NewOrder from '../NewOrder/NewOrder'
import OrderHistory from '../OrderHistory/OrderHistory'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'





export default function App() {
  
  const [ user, setUser ] = useState(getUser())
  
  return (
    <main className="App">
      { user ?
    <>
    <NavBar user={user} setUser={setUser} />
      <Routes>
      <Route path="/orders/new" element={<NewOrder />} />
      <Route path="/orders" element={<OrderHistory />} />
      </Routes>
    </>
      : 
      <Auth setUser={setUser}/>}
    </main>
  );
}


