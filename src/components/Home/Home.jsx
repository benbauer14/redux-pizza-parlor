import {Link} from 'react-router-dom';

function Home(){
    return(
        <>
        <img src='images/pizza_photo.png' />
        <p>Pizza is great.</p>
        <Link to='/SelectPizza'>
        <button>Order Pizza!</button>
        </Link>
        </>
    )
}

export default Home;