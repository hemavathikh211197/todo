import { Link } from "react-router-dom";
const Home = () => {
    return ( 
    <div className="home">
            <h1 id="h1">TO DO LIST...</h1>
            <Link to ="/AddData">
            <button id="btn1">Data</button>
        </Link>
        </div>
     );
}
 
export default Home;