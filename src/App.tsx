import FavouritePlaces from "./components/FavouritePlaces";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";

function App(): JSX.Element {
  return (
    <>
      <FavouritePlaces />;
      <PageHeader />;
      <PageFooter />
    </>
  );
}

export default App;
