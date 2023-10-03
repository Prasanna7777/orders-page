import OrderDescriptions from "./orderDescriptions";
import ExperinceBox from "./experinceBox";
import PaymentBox from "./paymentBox";

const Orders = () => {
  return (
    <>
      <div className="mobile-orders">
        <ExperinceBox />
        <OrderDescriptions />
      </div>
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
  )
}

export default Orders