import SiteList from "../components/layout/sites/SiteList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "Acropolis of Athens",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRMeuQYtLEdOR3KrJtD2Let6dSMNMgn4FpoDmgHEu1BmVI5Il9MHoQqnlmMeJ801CCR0NyXA1dTcWEaUK1qnLXuLw",
    address: 'Athens 105 58, Greece',
    description: "5th-century B.C. hilltop temple monument",
  },
  {
    id: "m2",
    title: "Acropolis Museum",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQJsnGcc3EORg8VctkXb6kD-DODt7WX89uD_YWMldEr3wdAkaUG-CwIxpNlhAWv-n63HmNUTvX_JPfutHNiz6t2VA",
    address: 'Dionysiou Areopagitou 15, Athina 117 42, Greece',
    description: "Ancient treasures in contemporary venue",
  },
  {
    id: "m3",
    title: "Temple of Olympian Zeus",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROPDo1NjIIPKTyu8vP4v0G7zixBWfNYRR-jw741KwIKtwjuMn3Sf8BoKFKsLH9J92DxvX-Q2nfgR_71HzqC0z7IQ",
    address: 'Athens 105 57, Greece',
    description: "Ruined temple completed under Hadrian",
  },
  {
    id: "m4",
    title: "Ancient Agora of Athens",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqQhR0DrhXpik2AR5QOPHiUMmlkspLV6pPacHaUSeAXJ2WnIYmSlIJ8oWpguCNSWtPuDtLSMjwl0VwGZa0ent3Q",
    address: 'Adrianou 24, Athina 105 55, Greece',
    description: "Iconic Greek ruins with a museum",
  },
];

function AllSitesPage() {
  return (
    <section>
      <h1>All Sites</h1>
      <SiteList sites={DUMMY_DATA}/>
    </section>
  );
}

export default AllSitesPage;
