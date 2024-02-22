import star from "../images/star.png";

export default function Card(props) {
    let badgeText 
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT!"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {
                badgeText && 
                <div className="card__badge">{badgeText}</div>
            }
            <img 
                className="card__main-img" 
                src={ `/airbnb-clone/src/images/${ props.card.coverImg }` }
                alt="A photo of the service" 
            />
            <div className="card__info">
                <div className="info__rating">
                    <img 
                        src= { star } 
                        alt="Star icon" 
                    />
                    <p className="rating__num">{props.card.stats.rating}</p>
                    <p className="rating__visitors cl-gray">({props.card.stats.reviewCount}) •</p>
                    <p className="rating__country cl-gray">{props.card.location}</p>
                </div>
                <h2 className="info__title">{props.card.title}</h2>
                <p className="info__price"><strong>From {props.card.price}$</strong> / person</p>
            </div>
        </div>
    )
}