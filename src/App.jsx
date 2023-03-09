import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home/Home'
import './App.css'
import ProductList from './components/ProductList/ProductList'
import ProductItem from './components/ProductItem/ProductItem'

function App() {
  const [productos, setProductos] = useState([])

  const getProductos = async() =>{
    const res = await axios.get('https://fakestoreapi.com/products')
      setProductos(res.data)
  }

  useEffect(() => {
    getProductos()
  },[])
  console.log(productos)

  return (
    <body>
      <Navbar/>
      <div>
        <h1 className='text-center title'> FABY SPORTS </h1>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/productos" element={<ProductList productos={productos}/>}/>
          <Route path="/productos/:id" element={<ProductItem productos={productos}/>}/>
        </Routes>
      </div>
    </body>
  )
  /*param /productos/:id se conoce como algo dinamico*/
}

export default App
