import React from 'react'
import "./Product.css"
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf';
function Product({title, image, price, rating}) {
    const ratingfloor = Math.floor(rating)
    const ispartial = Math.ceil(rating-ratingfloor)
    const leftRating = 5-(ratingfloor+ispartial)
    const list1=[]
    for(var i=0;i<ratingfloor;i++){
        list1.push(<StarIcon className="star"/>)
    }
    for(var i=0;i<ispartial;i++){
        list1.push(<StarHalfIcon className="star"/>)
    }
    for(var i=0;i<leftRating;i++){
        list1.push(<StarBorderIcon className="star"/>)
    }


    return (
        <div className="product">
            <div className="product__info">{title}</div>
            <div className="product__price">
                <p>
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {list1}
                </div>
                <img src = {image}></img>
                <br/>
                <button class="add">Add to basket</button>
            </div>
        </div>
    )
}

export default Product
