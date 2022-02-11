import PropTypes from "prop-types";
import { useState,useEffect } from "react";
import axios from "axios";

function Prds(props) {
    let [products,setProducts] = useState(0);
    let productId = props.pid;
    let ob1 = props.pid;

    function add(a,b){
        let promiseOb = new Promise(function(resolve,reject){
            setTimeout(function(){
                let result = a+b;
                resolve(result);
            },4000);
        })
        return promiseOb;
    }
    let returnedPromise = add(4,5);
    //then gets from resolve()
    //rgba(42, 87, 117, 0.918)
    returnedPromise.then(function(result){
        alert(result);
    })



    try{
        useEffect(() =>{

            let promiseOb = new Promise(function(resolve,reject){
                setTimeout(function(){
                    let result = a+b;
                    resolve(result);
                },4000);
            })
            return promiseOb;

            axios.get(`https://fakestoreapi.com/products/${props.pid}`).then((res) =>{
                let ob = res.data;
                console.log(ob);
                setProducts(ob);
            });
        },[ob1]);
    
        // const showProducts = () =>{
        //     axios.get(`https://fakestoreapi.com/products/${props.pid}`).then((res) =>{
        //         let ob = res.data;
        //         console.log(ob);
        //         console.log(ob.category)
        //         console.log(ob.description);
        //         setProducts(ob);
        //         return true;
        //     });
        // }
        //let returnVal = showProducts();
        return (
            <div className="border">
                <h1>hello {props.pid}</h1>
                <div>{products.id}</div>
                <div>
                    {products.category}
                    </div>
                    <div>
                    {products.description}
                    </div>
                    <div>{products.price}</div>
                    
                    <div>{products.rating.rate}</div>
                    <div>{products.rating.count}</div>
                    
                    <div>{products.title}</div>
                </div>
        );
    }
    catch{
        alert("catch")
        return (
            <div></div>
        )
    }
    return <div></div>
}
Prds.propTypes = {
    pid: PropTypes.number,
};
export default Prds;