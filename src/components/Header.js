import { FaCircle } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {

  return (
    <div className = "header">
        <div className="store">
            <div style={{display: "flex", fontSize: "10px"}}>
                <p>My Store</p>
                &nbsp;&nbsp;<FaCircle style={{fontSize: "5px", color: 'white', marginTop: "5px"}}/>&nbsp;&nbsp;
                <p>Closes at 10pm</p>
            </div>
            <div style = {{display: "flex"}}>
                <h5>Knollwood</h5>
               &nbsp; <FaChevronDown style={{fontSize: "12px", color: 'white', marginTop: "4px"}}/>
            </div>
        </div>
        <div className = 'menu-options'>
            <button className="menu-button">Registry</button>
            <button className="menu-button">Weekly Ad</button>
            <button className="menu-button">RedCard</button>
            <button className="menu-button">Target Circle</button>
            <button className="menu-button">Gift Cards</button>
            <button className="menu-button">Find Stores</button>
        </div>
    </div>
  )
}

export default Header