import { Route, Switch } from "react-router-dom";
import AllSites from "./pages/AllSites";
import NewSite from "./pages/NewSite";
import FavouritesPage from "./pages/Favourites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
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
      </Layout>
    </div>
  );
}

export default App;
