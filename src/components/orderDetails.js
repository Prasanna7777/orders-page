import HelpBoxes from "./HelpBoxes";
import { FaChevronDown } from "react-icons/fa";
import { LiaCcVisa } from "react-icons/lia";

const OrderDetails = () => {
  return (
    <div className="order-details">
        <div className="order-number">
            <p>
                <span style={{color: "grey", textDecoration: "underline"}}>Orders</span> <span style={{fontSize:"13px"}}> / </span> <span style={{color: "grey", textDecoration: "underline"}}>9213458000787</span>
            </p>
        </div>
        <div>
            <h1>Order Details</h1>
            <p style={{fontSize: "12px"}}>
                #9213458000787 <br />
                Placed at 1:09 on Mar 6, 2021
            </p>
        </div>
        <div className = "mobile-rate-payment">
            <button className="rate-button" style={{width:"100%"}}>Rate & tip your shopper</button>
            <div className="mobile-payment">
                <div style={{display: "flex"}}>
                    <h3>$24.24</h3>
                    <LiaCcVisa style={{fontSize:"30px", marginTop: "-1px", marginLeft: "6px"}}/>
                    <FaChevronDown style={{fontSize:"15px", marginTop: "6px", marginLeft: "6px"}}/>
                </div>
                <p style={{fontSize:"17px", textDecoration:"underline", fontWeight: "lighter"}}>Receipts & invoices</p>
            </div>
        </div>
        <HelpBoxes />
    </div>
  )
}

export default OrderDetails