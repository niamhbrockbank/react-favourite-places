import FavouritePlace from "./FavouritePlace";
interface FavouritePlaceProps {
  title: string;
  placeName: string;
  country: string;
  image: string;
  mapLocation: string;
  explanation: string;
}

function FavouritePlaces(): JSX.Element {
  const placesArr : FavouritePlaceProps[] = [
    {
    title : "place one",
    placeName : "Bridtol",
    country : "England",
    image: 
      "https://images.unsplash.com/photo-1566995203684-60106b942d51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    ,
    mapLocation : "https://goo.gl/maps/V7ARPzxJfL6QxAAm7",
    explanation : "It nice"
    },

    {
    title : "place two",
    placeName : "Conham River Park",
    country : "England",
    image :
          "https://images.unsplash.com/photo-1617344300322-516f431ff532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" ,
    mapLocation : "https://goo.gl/maps/V7ARPzxJfL6QxAAm7",
    explanation : "It's also nice"
    },

    {
    title : "place three",
    placeName : "West Pennard",
    country : "England",
    image :
          "https://images.unsplash.com/photo-1568216522269-4eefad048428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" ,
    mapLocation : "https://goo.gl/maps/TPdrLybFguwum4PC6",
    explanation : "It feels like a holiday whenever I am here."
    } ,

    {
    title:"place four",
    placeName:"Alexandra Park, Bath",
    country:"England",
    image:
      "https://images.unsplash.com/photo-1596050429687-8197a9bceeb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    mapLocation:"https://goo.gl/maps/aQ2VgDjpRSQ8tKtf8",
    explanation:"I spent a lot of time here in final year."
    }
  ]

  function convertToJSX(place : FavouritePlaceProps) {
    return FavouritePlace(place);
  }
  
  function convertPlacesArr(placesArr : FavouritePlaceProps[]) {
    const convertedArr = placesArr.map(convertToJSX);
    return convertedArr; // or return the map call directly
  }

  return (
    <>
    {convertPlacesArr(placesArr)}
    </>
  );
}

export default FavouritePlaces;
