import { Link } from 'react-router'
import './MyGarage.css'

export const MyGarage = () => {
    return(
        <div id="my-garage" className="my-garage hidden">
            <Link to="/my-garage">
                <p>My Garage</p>
                <img src="/src/assets/my-garage-icon.svg" alt="" />
            </Link>
        </div>
    )
}