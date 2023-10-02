import Logo from "./Logo.png"
import { GrSearch } from "react-icons/gr";
import { PiUserCircleLight } from "react-icons/pi";
import { BsCart3 } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { useContext } from "react";
import MediaContext from '../context/MediaContext';

const Header1 = () => {
  const {isMobile} = useContext(MediaContext);
    return (
      <>
        {isMobile ? (
        <>
        <div className="mobile-client-header">
          <div className="client-header">
            <HiMenu style={{fontSize: "35px"}}/>
            <img src={Logo} alt="Target Logo" style = {{width:"50px", cursor:"pointer", paddingLeft: "35px"}}/>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
                <PiUserCircleLight style={{fontSize: "35px"}}/>
                <BsCart3 style={{fontSize: "30px", cursor: "pointer", marginLeft: "10px"}}/> 
            </div>
          </div>
          <div className="search-bar">
              <input 
                type = "text"
                placeholder = "Search"
                className="search-input"
              />
              <GrSearch style={{fontSize: "20px"}}/>
          </div>
        </div>
        </>
        ):(
        <>
        <div className="client-header">
          <img src={Logo} alt="Target Logo" style = {{width:"50px", cursor:"pointer"}}/>
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
          <div className="client-name-button">
            <PiUserCircleLight style={{fontSize: "35px"}}/>
            <p>Hi,&nbsp;Hubert</p>
          </div>
          <div>
            <BsCart3 style={{fontSize: "30px", cursor: "pointer", marginLeft: "10px"}}/> 
          </div>
        </div>
        </>
        )}
      </>
    )
  }
  
  export default Header1