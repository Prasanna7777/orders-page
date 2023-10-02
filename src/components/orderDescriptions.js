import {MdShoppingBag} from "react-icons/md";
import {LuMilk} from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { useContext } from "react";
import MediaContext from '../context/MediaContext';

const OrderDescriptions = () => {
    const {isMobile} = useContext(MediaContext);
  return (
    <>
        {isMobile ? (
            <>
                <div className="order-heading">
                    <div>
                        <h3>Delivary Instructions</h3>
                        <p style={{fontSize: "13px"}}> Knock three items in the ceiling if you want me </p>
                    </div>
                </div>
                <div className="order-item">
                    <div className="order-description">
                        <LuMilk style={{fontSize: "70px", color: "black"}}/>
                        <div style={{paddingLeft:"0px"}}>
                            <h3>Good and Gather 1 gal - slim milk</h3>
                            <p style={{fontSize: "12px"}}>Subtitle</p>
                            <p style={{fontSize: "13px"}}>Description</p>
                        </div>
                    </div>
                    <FaAngleRight style={{fontSize: "30px", color: "black"}}/>
                </div>
            </>
        ):(
            <div className="refund-container">
                <div className="order-heading">
                    <MdShoppingBag style={{fontSize: "40px", color: "#CC0000"}}/>
                    <div style={{paddingLeft:"15px"}}>
                        <h4>Processing</h4>
                        <p style={{fontSize: "13px"}}>Change this subtitle</p>
                    </div>
                </div>
                <div className="order-item">
                    <div className="order-description">
                        <LuMilk style={{fontSize: "70px", color: "black"}}/>
                        <div style={{paddingLeft:"0px"}}>
                            <h3>Good and Gather 1 gal - slim milk</h3>
                            <p style={{fontSize: "12px"}}>Subtitle</p>
                            <p style={{fontSize: "13px"}}>Description</p>
                        </div>
                    </div>
                    <FaAngleRight style={{fontSize: "30px", color: "black"}}/>
                </div>
                <div className="order-item">
                    <div className="order-description">
                        <LuMilk style={{fontSize: "70px", color: "black"}}/>
                        <div style={{paddingLeft:"0px"}}>
                            <h3>Good and Gather 1 gal - slim milk</h3>
                            <p style={{fontSize: "12px"}}>Subtitle</p>
                            <p style={{fontSize: "13px"}}>Description</p>
                        </div>
                    </div>
                    <FaAngleRight style={{fontSize: "30px", color: "black"}}/>
                </div>
                <div className="order-item">
                    <div className="order-description">
                        <LuMilk style={{fontSize: "70px", color: "black"}}/>
                        <div style={{paddingLeft:"0px"}}>
                            <h3>Good and Gather 1 gal - slim milk</h3>
                            <p style={{fontSize: "12px"}}>Subtitle</p>
                            <p style={{fontSize: "13px"}}>Description</p>
                        </div>
                    </div>
                    <FaAngleRight style={{fontSize: "30px", color: "black"}}/>
                </div>
                <div className="spacer"></div>
                <div className="order-heading">
                    <MdShoppingBag style={{fontSize: "40px", color: "#CC0000"}}/>
                    <div style={{paddingLeft:"15px"}}>
                        <h4>Refund Processing</h4>
                        <p style={{fontSize: "13px"}}>Target GiftCard is in process</p>
                    </div>
                </div>
                <div className="order-item">
                    <div className="order-description">
                        <LuMilk style={{fontSize: "70px", color: "black"}}/>
                        <div style={{paddingLeft:"0px"}}>
                            <h3>Good and Gather 1 gal - slim milk</h3>
                            <p style={{fontSize: "12px"}}>Subtitle</p>
                            <p style={{fontSize: "13px"}}>Description</p>
                        </div>
                    </div>
                    <FaAngleRight style={{fontSize: "30px", color: "black"}}/>
                </div>
                <div className="spacer"></div>
                <div className="order-heading">
                    <MdShoppingBag style={{fontSize: "40px", color: "#CC0000"}}/>
                    <div style={{paddingLeft:"15px"}}>
                        <h4>Refund Approved</h4>
                        <p style={{fontSize: "13px"}}>Target GiftCard sent to your mail</p>
                    </div>
                </div>
                <div className="order-item">
                    <div className="order-description">
                        <LuMilk style={{fontSize: "70px", color: "black"}}/>
                        <div style={{paddingLeft:"0px"}}>
                            <h3>Good and Gather 1 gal - slim milk</h3>
                            <p style={{fontSize: "12px"}}>Subtitle</p>
                            <p style={{fontSize: "13px"}}>Description</p>
                        </div>
                    </div>
                    <FaAngleRight style={{fontSize: "30px", color: "black"}}/>
                </div>
            </div>
        )}
    </>
  )
}

export default OrderDescriptions