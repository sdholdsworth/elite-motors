import './MyGarage.css'

export const MyGarage = () => {
    return(
        <div id="my-garage" className="my-garage hidden">
            <a href="/my-garage">
                <p>My Garage</p>
                <img src="/src/assets/my-garage-icon.svg" alt="" />
            </a>
        </div>
    )
}