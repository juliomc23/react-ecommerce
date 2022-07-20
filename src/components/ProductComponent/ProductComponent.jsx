import React from 'react'
import { useParams } from 'react-router-dom';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { AiOutlineHeart } from "react-icons/ai";

import { IconContext } from "react-icons";

import './ProductComponent.css'

const MySwal = withReactContent(Swal)

function ProductComponent({ products, addItem, addToWishlist }) {
    const { id } = useParams();

    return (
        products.map(product => (
            product.id === parseInt(id)
                ?
                <div className='oneproduct__div' key={product.id}>
                    <div className='div_imgshoes'>
                        <img src={product.img.front} alt={product.title} className="img--shoes" />
                        <img src={product.img.down} alt={product.title} className="img--shoes" />
                        <img src={product.img.aside} alt={product.title} className="img--shoes" />
                        <img src={product.img.up} alt={product.title} className="img--shoes" />
                    </div>
                    <div className='div__infoProduct'>
                        <span className='span__title'>{product.title}</span>
                        <span className='span__price'>{product.price}€</span>
                        <button className='addItem__button' onClick={
                            (e) => {
                                e.preventDefault();
                                MySwal.fire({
                                    width: '20em',
                                    icon: 'success',
                                    title: 'Added to cart ',
                                    html: '<p>' + product.title + '</p><img class="alert__img" src=' + product.img.front + '>',
                                    showConfirmButton: false,
                                    showCloseButton: true
                                })
                                addItem(product)
                            }
                        }>Add to cart</button>
                        <IconContext.Provider value={{ className: "whiseList__heart" }}>
                            <div className='div__whiseList' onClick={() => addToWishlist(product)}>
                                <span>Favorite</span>
                                <AiOutlineHeart/>
                            </div>
                        </IconContext.Provider>
                    </div>

                </div>
                : null
        ))
    )
}

export default ProductComponent