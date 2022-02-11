import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";

function Products(props) {
    let [products, setProducts] = useState({});
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${props.pid}`).then((res) => {
            let ob = res.data;
            console.log(ob);
            setProducts(ob);
        }).catch(function (error) {
            alert(error);
        });
    }, [props.pid]);

    if (Object.keys(products).length === 0) {
        return (<div></div>)
    }
    return (
        <div className="products">
            <p></p>
            <div className="item display">
                <div className="imgCard display">
                    
                    <img src={products.image} /><br/>
                    {/* <button className="addCart">Add To Cart</button> */}
                </div>
                <div className="display card ">
                    <p className="title">{products.title = products.title.charAt(0).toUpperCase() + products.title.slice(1)}</p>
                    <p className="category">{products.category = products.category.charAt(0).toUpperCase() + products.category.slice(1)}</p>
                    <p className="price">$ {products.price}</p>
                    <p><span className="rating">{products.rating.rate} ★ </span> <span className="review"> {products.rating.count} Ratings</span></p>
                    <p></p>
                    <p>{products.description}</p>
                </div>
            </div>


        </div>
    );
}
Products.propTypes = {
    pid: PropTypes.number,
};
export default Products;