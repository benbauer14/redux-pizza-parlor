import axios from 'axios';
import { useState, useEffect } from 'react';

function Admin(){
    let [orders, setOrders] = useState([]) 

    const getOrders = () =>{
        axios.get('/api/order').then((response) =>{
            setOrders(response.data);
        }).catch((err) =>{
            alert('Error');
            console.log(err);
        })
    }
    useEffect(() => { getOrders()},[])
    
    return( 
        <>
            <h2>Admin Page</h2>
            <table>
                <thead>
                    <tr>
                        <th>Order Number</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Zip</th>
                        <th>Type</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map( order =>{
                        return (
                        <>
                        <tr>
                            <td key={order.id}>{order.id}</td>
                            <td>{order.customer_name}</td>
                            <td>{order.street_address}</td>
                            <td>{order.city}</td>
                            <td>{order.zip}</td>
                            <td>{order.type}</td>
                            <td>{order.total}</td> 
                        </tr>
                        </>
                        )
                    })}
                    {/* { orders.map(( order, index )=>{
                        return <>
                        <td key={index}>{order.id}</td>
                        <td>{order.customer_name}</td>
                        <td>{order.address}</td>
                        <td>{order.city}</td>
                        <td>{order.zip}</td>
                        <td>{order.type}</td>
                        <td>{order.total}</td> </>;
                    })} */}
                        {/* { checkoutPizza.map(( pizza, index )=>{
                        total += Number( pizza.price );
                        return <li index={pizza.id}>{pizza.name}: {pizza.price}</li>;
                    })} */}
                </tbody>
            </table>
        </>
    )
}

export default Admin;