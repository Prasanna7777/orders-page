import {FiCheck} from "react-icons/fi"
const experinceBox = () => {
  return (
    <div className="experience">
        <div className = "delivary-status">
            <FiCheck style={{color: "green", marginLeft:"40px", marginRight:"30px", marginTop: "12px",fontSize: "35px"}}/>
            <div>
              <h2>Delivered</h2>
              <p style={{fontSize:"17px"}}>Oct 11, 11:31 AM</p>
            </div>
        </div>
        <div className="experience-box">
            <h4 style={{paddingBottom:"10px"}}>How was your experience?</h4>
            <button className="rate-button" style={{width: "100%"}}>Rate & tip shopper</button>
        </div>
        <div className="address-box">
            <h4>Delivered to</h4>
            <p style={{fontSize: "13px"}}>185 Orchard Circle Long Lake MN 55356</p>
        </div>
    </div>
  )
}

export default experinceBox