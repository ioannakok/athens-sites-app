import { useHistory } from "react-router";

import NewSiteForm from "../components/layout/sites/NewSiteForm";

function NewSite() { 
    const history = useHistory();

    function addSiteHandler(siteData) {
        fetch(
            'https://athens-sites-app-default-rtdb.firebaseio.com/sites.json',
            {
                method: 'POST',
                body: JSON.stringify(siteData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });
    }

    return <section>
        <h1>Add new site</h1>
        <NewSiteForm onAddSite={addSiteHandler}/>
    </section>
}

export default NewSite;
