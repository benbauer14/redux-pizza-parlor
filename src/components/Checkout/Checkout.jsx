import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';

function Checkout() {

    const dispatch = useDispatch();
    
    const pizzaOrder = useSelector((store)=>{
        console.log(store.pizzaOrder)
        return store.pizzaOrder;
    })


    let total = 0;

    let [ orderTotal, setOrderTotal ] = useState({ newTotal: total });


    const sendOrder = () =>{
        // axios.post('/api/order', pizzaOrder).then( (response) =>{
        //     console.log("back from post")
        //     // TODO clear info
        // }).catch( (err) =>{
        //     alert('Nope', err);
        //     console.log(err);
        // })
        axios({
            method: 'POST',
            url: '/api/order',
            data: pizzaOrder
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });
    }
    

    const checkoutPizza = useSelector( ( store ) =>{
        return store.pizzaCart;
    })
    
    return( 
            <>
                <h2>Checkout</h2>
                <ul>
                    { checkoutPizza.map(( pizza, index )=>{
                        total += Number( pizza.price );
                        return <li index={pizza.id}>{pizza.name}: {pizza.price}</li>;
                    })}
                    <li>Total: ${total.toFixed(2)}</li>
                    <button onClick={(event) => sendOrder() }>Submit Order</button>
                </ul>
            </>
    ) 
}

export default Checkout;