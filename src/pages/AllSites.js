import { useState, useEffect } from "react";

import SiteList from "../components/layout/sites/SiteList";

function AllSitesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedSites, setLoadedSites] = useState([]);

  useEffect(() => {
    fetch(
      "https://athens-sites-app-default-rtdb.firebaseio.com/sites.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const sites = [];

        for (const key in data) {
          const site = {
            id: key,
            ...data[key]
          };
          sites.push(site);
        }

        setIsLoading(false);
        setLoadedSites(sites);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Sites</h1>
      <SiteList sites={loadedSites} />
    </section>
  );
}

export default AllSitesPage;
