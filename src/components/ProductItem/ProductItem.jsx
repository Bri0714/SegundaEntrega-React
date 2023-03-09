import React from 'react'
import { useParams } from 'react-router-dom'


export const ProductItem = ({productos}) => {
    const{id} = useParams();
    const producto = productos.find((producto) => producto.id == id)
    console.log(producto)
    return (

            <div className=' container2  '>

            <div className="card " width={18}>
                    <img src={producto.image} width={100} height={200} className="card-img-top" alt="..."/>
                    <div class="card-body  ">
                        <h5 className="card-title text-center">{producto.title}</h5>
                        <h4 className='text-center'>{producto.category}</h4>
                        <p className="card-text text-center">{producto.description}</p>
                        <p className="card-text text-center"> $ {producto.price}</p>
                        <p className='text-center'>rating: {producto.rating.rate}</p>
                    </div>
            </div>

            </div>
    )
}

export default ProductItem

