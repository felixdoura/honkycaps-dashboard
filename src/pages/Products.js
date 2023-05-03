import React, { useState, useEffect } from 'react'
import ProductChart from '../components/ProductChart'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch('http://localhost:3001/api/products')
      .then(res => res.json())
      .then(info => {console.log(info)
        setProducts(info.products)
      })
    })
    return (
        <>
            <section className='home-wrapper-2 py-5'>
                <div className='container-xxl '>
                    <div className='row'>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    {/* <th scope="col">Categoria</th> */}
                                    <th scope="col">Descripcion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product, index) => {
                                        
                                        return <ProductChart {...product} key={index} />
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products