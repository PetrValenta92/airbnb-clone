import star from "../images/star.png";

export default function Card(props) {
    return (
        <div className="card">
            <img 
                className="card__main-img" 
                src={ props.coverImg } 
                alt="A photo of the service" 
            />
            <div className="card__info">
                <div className="info__rating">
                    <img 
                        src= { star } 
                        alt="Star icon" 
                    />
                    <p className="rating__num">{props.rating}</p>
                    <p className="rating__visitors cl-gray">({props.reviewCount}) •</p>
                    <p className="rating__country cl-gray">{props.location}</p>
                </div>
                <h2 className="info__title">{props.title}</h2>
                <p className="info__price"><strong>From {props.price}$</strong> / person</p>
            </div>
        </div>
    )
}