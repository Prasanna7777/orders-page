import {BsCreditCard2FrontFill} from "react-icons/bs";

const paymentBox = () => {
  return (
    <div className="payment-box">
        <h2>$28.82</h2>
        <div className="payment" style={{marginTop: "13px"}}>
            <p>Subtotal (X Items)</p>
            <p>$28.82</p>
        </div>
        <div className="payment">
            <p>Discounts</p>
            <p>-$20.00</p>
        </div>
        <div className="payment sub-payment">
            <p>Target Circle</p>
            <p>-$10.00</p>
        </div>
        <div className="payment sub-payment">
            <p>RedCard Discount</p>
            <p>-$10.00</p>
        </div>
        <div className="payment">
            <p>Shipping</p>
            <p>Free</p>
        </div>
        <div className="payment">
            <p>Tax</p>
            <p>$20.00</p>
        </div>
        <div className="divider"></div>
        <div className="payment">
            <h3>Total</h3>
            <h3>$28.82</h3>
        </div>
        <div className="payment">
            <div style={{display: "flex"}}>
                <BsCreditCard2FrontFill style={{fontSize:"25px", color: "#CC0000"}}/>
                &nbsp;&nbsp;<p>RedCard Debit *1234</p>
            </div>
            <p>$28.82</p>
        </div>
        <button className="receipts-button">Receipts & Invoices</button>
    </div>
  )
}

export default paymentBox