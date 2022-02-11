import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";

function Categories() {
    let [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/categories").then((res) => {
            let list = res.data;
            console.log("hello")
            console.log(list);
            setProducts(list);
        }).catch(function (error) {
            alert(error);
        });
    }, []);
    if (Object.keys(products).length === 0) {
        return (<div></div>)
    }
    return (
        <div className="categories">
            <div className="menu">
                <ul>
                    {products.map((val, index) => {
                        return (
                            <li>
                                <a href="#">{val = val.charAt(0).toUpperCase() + val.slice(1)}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>


        </div>
    );
}
export default Categories;