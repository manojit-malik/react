import { Link } from "react-router-dom";
import '../MyStyle.css';

const Navigation = () => {

    return (
        <div className="heading">

       
            <ul className="nav">

                <li className="nav"> <Link to="/">Home</Link> </li>

                <li className="nav"> <Link to="/teams">Teams</Link> </li> 

                <li className="nav"> <Link to="/players">Players</Link> </li> 

            </ul>
        
            

        </div>
    )

}

export default Navigation;