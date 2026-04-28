import '../Vehicles.css'

export const Car = ({id, ...car}) => {
    return (
        <>
            <article key={id.toString()} className="vehicle-card" tabIndex={0} role="article">
                <h2 className="vehicle-card-heading">{`${car.make} ${car.model} (${car.year})`}</h2>
                    <div className="vechicle-card-main-info-container">
                        <div className="vechicle-card-main-info">
                            <p><span className="vehicle-card-attribute">Make:</span> {car.make}</p>
                            <p><span className="vehicle-card-attribute">Model:</span> {car.model}</p>
                            <p><span className="vehicle-card-attribute">Colour:</span> {car.colour.toLowerCase()}</p>
                            <p><span className="vehicle-card-attribute">Engine:</span> {car.engine}</p>
                            <p><span className="vehicle-card-attribute">Engine Type:</span> {car.engineType.toLowerCase()}</p>
                            <p className="vehicle-mileage"><span className="vehicle-card-attribute">Mileage:</span> {car.mileage.toLocaleString("en-GB")}</p>
                            <p><span className="vehicle-card-attribute">Transmission:</span> {car.transmission.toLowerCase()}</p>
                            <p><span className="vehicle-card-attribute">Year:</span> {car.year}</p>
                            <p><span className="vehicle-card-attribute">Service History:</span> {car.serviceHistory.toLowerCase()}</p>
                            <p className="vehicle-price"><span className="vehicle-card-attribute">Price:</span> £{car.price.toLocaleString("en-GB")}</p>
                            <p><span className="vehicle-card-attribute">Reference No:</span> {car.refNo}</p>
                        </div>
                        <details className="vehicle-card-modcons">
                            <summary className="vehicle-card-heading">Mod Cons:</summary>
                            <p><span className="vehicle-card-attribute">GPS:</span> {car.modCons.GPS ? "yes" : "no" }</p>
                            <p><span className="vehicle-card-attribute">PAS:</span> {car.modCons.PAS ? "yes" : "no" }</p>
                            <p><span className="vehicle-card-attribute">Air Con:</span> {car.modCons.airCon ? "yes" : "no" }</p>
                            <p><span className="vehicle-card-attribute">CD/MP3:</span> {car.modCons.cdMp3 ? "yes" : "no" }</p>
                            <p><span className="vehicle-card-attribute">Cruise Control:</span> {car.modCons.cruise ? "yes" : "no" }</p>
                            <p><span className="vehicle-card-attribute">Electric Mirrors:</span> {car.modCons.electricMirrors ? "yes" : "no" }</p>
                            <p><span className="vehicle-card-attribute">Electric Windows:</span> {car.modCons.electricWindows ? "yes" : "no" }</p>
                            <p><span className="vehicle-card-attribute">Heated Mirrors:</span> {car.modCons.heatedMirrors ? "yes" : "no" }</p>
                            <p><span className="vehicle-card-attribute">Parking Sensors:</span> {car.modCons.parkingSensors ? "yes" : "no" }</p>
                            <p><span className="vehicle-card-attribute">Heated Windscreen:</span> {car.modCons.heatedWindscreen ? "yes" : "no" }</p>
                            <p><span className="vehicle-card-attribute">Heated Seats:</span> {car.modCons.heatedSeats ? "yes" : "no" }</p>
                            <p><span className="vehicle-card-attribute">Reverse Cam Assist:</span> {car.modCons.reverseCameraAssist ? "yes" : "no" }</p>
                        </details>
                    </div>
                    <div className="vehicle-card-gallery-wrapper">
                        <div className="vehicle-card-gallery">
                            {car.images.image1 ? <img src={car.images.image1} alt="" className="vehicle-card-image thumbnail"></img> : null}
                            {car.images.image2 ? <img src={car.images.image2} alt="" className="vehicle-card-image thumbnail"></img> : null}
                            {car.images.image3 ? <img src={car.images.image3} alt="" className="vehicle-card-image thumbnail"></img> : null}
                            {car.images.image4 ? <img src={car.images.image4} alt="" className="vehicle-card-image thumbnail"></img> : null}
                            {car.images.image5 ? <img src={car.images.image5} alt="" className="vehicle-card-image thumbnail"></img> : null}
                            {car.images.image6 ? <img src={car.images.image6} alt="" className="vehicle-card-image thumbnail"></img> : null}
                            {car.images.image7 ? <img src={car.images.image7} alt="" className="vehicle-card-image thumbnail"></img> : null}
                            {car.images.image8 ? <img src={car.images.image8} alt="" className="vehicle-card-image thumbnail"></img> : null}
                            {car.images.image9 ? <img src={car.images.image9} alt="" className="vehicle-card-image thumbnail"></img> : null}
                            {car.images.image10 ? <img src={car.images.image10} alt="" className="vehicle-card-image thumbnail"></img> : null}
                        </div>
                    </div>
            </article>
        </>
    )
}