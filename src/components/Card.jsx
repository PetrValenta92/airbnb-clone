import star from "../images/star.png";

export default function Card(props) {
    return (
        <div className="card">
            <img 
                className="card__main-img" 
                src={ props.img } 
                alt="Female swimmer Katie Zaferes' photo" 
            />
            <div className="card__info">
                <div className="info__rating">
                    <img 
                        src= { star } 
                        alt="Star icon" 
                    />
                    <p className="rating__num">{props.rating}</p>
                    <p className="rating__visitors">({props.reviewCount}) •</p>
                    <p className="rating__country">{props.country}</p>
                </div>
                <h2>{props.title}</h2>
                <p className="info__price"><strong>From {props.price}$</strong> / person</p>
            </div>
        </div>
    )
}