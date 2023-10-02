import OrderDescriptions from "./orderDescriptions";
import ExperinceBox from "./experinceBox";
import PaymentBox from "./paymentBox";
import { useContext } from "react";
import MediaContext from '../context/MediaContext';

const Orders = () => {
  const {isMobile} = useContext(MediaContext);
  return (
    <>
    {isMobile ? (
      <>
        <ExperinceBox />
        <OrderDescriptions />
      </>
    ):(
      <>
        <div className="order-info">
            <div className="order-container">
                <OrderDescriptions />
                <div>
                    <ExperinceBox />
                </div>
            </div>
            <div>
                <PaymentBox />
            </div>
        </div>
    </>
    )}
  </>
  )
}

export default Orders