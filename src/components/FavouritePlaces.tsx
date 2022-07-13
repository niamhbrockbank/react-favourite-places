import FavouritePlace from "./FavouritePlace";

function FavouritePlaces(): JSX.Element {
  return (
    <>
      <FavouritePlace
        title={"place one"}
        placeName={"Bridtol"}
        country={"England"}
        image={
          "https://images.unsplash.com/photo-1566995203684-60106b942d51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        }
        mapLocation={"https://goo.gl/maps/V7ARPzxJfL6QxAAm7"}
        explanation={"It nice"}
      />
      <FavouritePlace
        title={"place two"}
        placeName={"Conham River Park"}
        country={"England"}
        image={
          "https://images.unsplash.com/photo-1617344300322-516f431ff532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        }
        mapLocation={"https://goo.gl/maps/V7ARPzxJfL6QxAAm7"}
        explanation={"It's also nice"}
      />
    </>
  );
}

export default FavouritePlaces;
