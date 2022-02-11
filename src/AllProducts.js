import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import axios from "axios";

function AllProducts(props) {
    let [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products/").then((res) => {
            let list = res.data;
            console.log(list);
            console.log(list.length);
            setProducts(list);
        }).catch(function (error) {
            alert(error);
        });
    }, []);
    if (Object.keys(products).length === 0) {
        return (<div></div>)
    }
    return (
        <div>
            <h1 className="h1">All Produts Details</h1>
            <div className="tableDiv">
            <table>
                <tr>
                    <th className="colOne">Product Id</th>
                    <th className="colTwo">Price</th>
                    <th className="colThree">Description</th>
                </tr>
            {products.map((val, index) => {
                return (
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.price}</td>
                                <td>{val.description}</td>
                            </tr> 
                );
            })}
            </table>
            </div>
            
        </div>
    );
}
export default AllProducts;