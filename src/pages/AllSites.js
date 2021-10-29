const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is the first meetup",
    image: "",
    address: "Meetupstreet 5, 12345 Meetup City",
    description: "This is the first meetup",
  },
  {
    id: "m2",
    title: "This is the second meetup",
    image: "",
    address: "Meetupstreet 5, 12345 Meetup City",
    description: "This is the first meetup",
  },
];

function AllSitesPage() {
  return (
    <section>
      <h1>All Sites</h1>
      <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>;
        })}
      </ul>
    </section>
  );
}

export default AllSitesPage;
