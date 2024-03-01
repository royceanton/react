
import image from "./assets/image1.webp";

function Card(){

    return(
        <div className="card">
            <img className="card-image" src={image} alt="profile picture" width={200} height={200} />
            <h2 className="card-title">RJ</h2>
            <p className="card-text">Experimenting DeFi user on a perpetual exploration of Business Analytics & Financial-ML through continuous hands-on learning and active trading. Currently learning and understanding trading systems and frontend development.</p>
        </div>
    );
}

export default Card;