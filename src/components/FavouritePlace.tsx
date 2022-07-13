interface FavouritePlaceProps {
    title : string;
    placeName : string;
    country : string;
    image : string;
    mapLocation : string;
    explanation : string
}

function FavouritePlace(props: FavouritePlaceProps) : JSX.Element {
    return (
        <>
            <h1>{props.title}</h1>
            <p>{props.placeName}, {props.country}</p>
            <img src={props.image} alt={props.placeName} width="100%"></img>
            <a href={props.mapLocation}>Map location</a>
            <p>{props.explanation}</p>
        </>
    )
}

export default FavouritePlace