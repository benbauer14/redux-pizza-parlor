import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function Checkout() {

    const dispatch = useDispatch();

    let total = 0;

    let [ orderTotal, setOrderTotal ] = useState({ newTotal: total });

    const checkoutPizza = useSelector( ( store ) =>{
        return store.pizzaCart;
    });

    const submitOrder = () => {
        console.log( 'in submitOrder' );
    }
    
    return( 
            <>
                <h2>Checkout</h2>
                <ul>
                    { checkoutPizza.map(( pizza, index )=>{
                        total += Number( pizza.price );
                        return <li index={pizza.id}>{pizza.name}: {pizza.price}</li>;
                    })}
                    <li>Total: ${total.toFixed(2)}</li>
                    <button onClick={(event) => submitOrder() }>Submit Order</button>
                </ul>
            </>
    ) 
}

export default Checkout;