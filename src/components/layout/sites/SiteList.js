import SiteItem from "./SiteItem";
import classes from "./SiteList.module.css";

function SiteList(props) {
  return (
    <ul className={classes.list}>
      {props.sites.map(site => (
        <SiteItem
          key={site.id}
          id={site.id}
          image={site.image}
          title={site.title}
          address={site.address}
          description={site.description}
        />
      ))}
    </ul>
  );
}

export default SiteList;
