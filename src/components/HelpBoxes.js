import { TiSpanner } from "react-icons/ti";
import { PiArrowsCounterClockwiseFill } from "react-icons/pi";
import { PiArrowCounterClockwiseFill } from "react-icons/pi";
import {  IoMdHelpBuoy } from "react-icons/io";
import { BiSolidMessageDetail } from "react-icons/bi";

const HelpBoxes = () => {
  return (
    <div className="help-options-container">
        <div className ="help-option">
            <TiSpanner style={{color: "#CC0000", fontSize: "40px"}}/>
            <div className = "help-description">
                <h4>Fix an issue</h4>
                <p style={{fontSize: "12px"}}>Get help with missing or damaged items and more</p>
            </div>
        </div>
        <div className ="help-option">
            <PiArrowsCounterClockwiseFill style={{color: "#CC0000" , fontSize: "40px"}}/>
            <div className = "help-description">
                <h4>Start a return</h4>
                <p style={{fontSize: "12px"}}>Return to a store or print a free return label</p>
            </div>
        </div>
        <div className ="help-option">
            <PiArrowCounterClockwiseFill style={{color: "#CC0000", fontSize: "40px"}}/>
            <div className = "help-description">
                <h4>Reorder</h4>
                <p style={{fontSize: "12px"}}>Choose items from this order to buy again</p>
            </div>
        </div>
        <div className ="help-option">
            <IoMdHelpBuoy style={{color: "#CC0000", fontSize: "40px"}}/>
            <div className = "help-description">
                <h4>Order help</h4>
                <p style={{fontSize: "12px"}}>Get relevant help content or contact us</p>
            </div>
        </div>
        <div className ="help-option">
            <BiSolidMessageDetail style={{color: "#CC0000", fontSize: "40px"}}/>
            <div className = "help-description">
                <h4>Order feedback</h4>
                <p style={{fontSize: "12px"}}>Leave feedback about your experience</p>
            </div>
        </div>    
    </div>
  )
}

export default HelpBoxes