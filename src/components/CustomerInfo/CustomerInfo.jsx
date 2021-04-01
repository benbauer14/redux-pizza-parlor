import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import { useState } from 'react';

function CustomerInfo(){
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
        pizzaCart.map( item=> ( sum += item.price))
        return sum
    }

    const addCustInfo = () => {
        let time= new Date().toLocaleTimeString([],{hour:'2-digit', minute:'2-digit'});
        let date =new Date().toLocaleDateString();
        let timeStamp = time + ' ' + date;

        const addCustomer={
            name: name,
            address: address,
            city: city,
            zip: zip,
            type: delivery,
            time: timeStamp     
        }
        console.log(addCustomer)
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