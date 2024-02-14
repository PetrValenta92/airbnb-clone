import katiePhoto from "../images/katie-zaferes.png";
import star from "../images/star.png";

export default function Card() {
    return (
        <div className="card">
            <img 
                className="card__main-img" 
                src={ katiePhoto } 
                alt="Female swimmer Katie Zaferes photo" 
            />
            <div className="card__info">
                <div className="info__rating">
                    <img 
                        src= { star } 
                        alt="Star icon" 
                    />
                    <p className="rating__num">5.0</p>
                    <p className="rating__visitors">(6) •</p>
                    <p className="rating__country">USA</p>
                </div>
                <h2>Life lesson with Katie Zaferes</h2>
                <p className="info__price"><strong>From 136$</strong> / person</p>
            </div>
        </div>
    )
}