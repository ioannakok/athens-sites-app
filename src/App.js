import { Route, Switch } from "react-router-dom";
import AllSites from "./pages/AllSites";
import NewSite from "./pages/NewSite";
import FavouritesPage from "./pages/Favourites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <AllSites />
        </Route>
        <Route path="/new-meetup">
          <NewSite />
        </Route>
        <Route path="/favourites">
          <FavouritesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
