import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import './CustomerInfo.css'

function CustomerInfo(){
    const dispatch = useDispatch()

    let [name, setName] = useState('');
    let [address, setAddress] = useState('')
    let [city, setCity] = useState('')
    let [zip, setZip] = useState('')
    let [delivery, setDelivery] = useState('') 


    const pizzaCart= useSelector((store)=>{
        return store.pizzaCart;
    })

    const checkoutTotal = () => {
        let sum = 0
        pizzaCart.map( item=> ( sum += Number(item.price)))
        return sum
    }

    const addCustInfo = () => {

        const addCustomer={
            customer_name: name,
            street_address: address,
            city: city,
            zip: zip,
            type: delivery,
            total: checkoutTotal(),
            pizzas: pizzaCart,

        }
        console.log(addCustomer)
        dispatch({ type: 'add-cust-info', payload: addCustomer})
    }


    return(
        <>
        <h2>Customer Info</h2>
        <label>Name: </label><input onChange={(event) => setName(event.target.value)}></input><br></br>
        <label>Address: </label><input onChange={(event) => setAddress(event.target.value)}></input><br></br>
        <label>City: </label><input onChange={(event) => setCity(event.target.value)}></input><br></br>
        <label>Zip: </label><input onChange={(event) => setZip(event.target.value)}></input><br></br>
        <form>
            <input type="radio" name="choice" value="delivery" onClick={(event) => setDelivery("delivery")}/>Delivery
            <input type="radio" name="choice" value="pickup" onClick={(event) => setDelivery("pickup")}/>Pickup
        </form>            
        <Link to='/Checkout'>
            <button onClick={addCustInfo}>Checkout</button>
        </Link>
        </>
    )
}

export default CustomerInfo;