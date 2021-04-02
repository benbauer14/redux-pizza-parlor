import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';


function SelectPizza(){

    let dispatch = useDispatch();

    let [pizzas, setPizza] = useState([]);

    const getPizzas = () =>{
        axios.get('/api/pizza').then((response) =>{
            setPizza( response.data );
        }).catch((err) =>{
            alert('Error');
            console.log(err);
        })
    }

    
    const addToCart = (pizza) =>{
        pizza.quantity= 1;
        dispatch({ type: 'add-to-cart', payload: pizza})
    }

    useEffect(() => { getPizzas()},[])
    
    return (
        <>
            <h2>Select Pizza Component</h2>

            <h2>List of Pizza</h2>
                <ul>
                    {pizzas.map((pizza) => (
                        <li key={pizza.id}>{pizza.name} - {pizza.price} - <button onClick={() => addToCart(pizza)}>Add to Cart</button></li>
                    ))}
                </ul>
                <Link to="/CustomerInfo">
                <button>Proceed with Order</button>
                </Link>
        </>
    )
}

export default SelectPizza;