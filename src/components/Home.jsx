import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div>
      <h1>Welcome to VIN Finder</h1>
      <Link className="btn" to="/search">Search a VIN</Link>
    </div>
  );
}

export default Home;
