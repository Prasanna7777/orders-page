import Logo from "./Logo.png"
import { GrSearch } from "react-icons/gr";
import { PiUserCircleLight } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";

const Header1 = () => {
    return (
        <div className="client-header">
          <img src={Logo} alt="Target Logo" className = "logo" style = {{width:"50px", cursor:"pointer"}}/>
          <HiMenu className="menu-icon" />
          <div className="button-container">
            <button className="client-menu-button"> <h5>Categories</h5></button>
            <button className="client-menu-button"> <h5>Deals</h5></button>
            <button className="client-menu-button"> <h5>Whats's New</h5></button>
            <button className="client-menu-button"> <h5>Pickup & Delivary</h5></button>
          </div>
          <div className="search-bar">
            <input 
              type = "text"
              placeholder = "Search"
              className="search-input"
            />
            <GrSearch style={{fontSize: "20px"}}/>
          </div>
          <div className = "cart-user-mobile">
              <div className="client-name-button">
                <PiUserCircleLight style={{fontSize: "35px"}}/>
                <p className="client-name">Hi,&nbsp;Hubert</p>
              </div>
              <div className="cart">
                <BsCart3 style={{fontSize: "30px", cursor: "pointer", marginLeft: "10px"}}/> 
              </div>
          </div>
          <div className = "cart-user">
              <div className="client-name-button">
                <PiUserCircleLight style={{fontSize: "35px"}}/>
                <p className="client-name">Hi,&nbsp;Hubert</p>
              </div>
              <div className="cart">
                <BsCart3 style={{fontSize: "30px", cursor: "pointer"}}/> 
              </div>
          </div>
          
         
        </div>
    )
  }
  
  export default Header1