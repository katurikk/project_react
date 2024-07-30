import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>sorry</h2>
            <p>The page your are looking ids not available</p>
            <div className="bar"><Link to="/" >BACK TO HOME PAGE</Link></div>
        </div>
     );
}
 
export default NotFound;