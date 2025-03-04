import './Order.css';
import img from '../../assets/photos/00.jpg'

function Order(){
    
    return(
        <div className="order">
           <h3>Pre-Orders are open until April 1, 2025!</h3>
           <p>Place your pre-order now for $65.00 {"("}+$15 domestic shipping{")"} before April 1. </p>
           <p>Place your order after April 1 for $75.00 {"("}+$15 domestic shipping{")"}. </p>
        <img src={img} className="bookimg" alt="book"/>
<form action="https://www.paypal.com/ncp/payment/XT2L78SUUBB76" method="post" target="_blank" className="paypalform">
  <input class="pp-XT2L78SUUBB76" type="submit" value="Buy Now" />
  <img src="https://www.paypalobjects.com/images/Debit_Credit_APM.svg" alt="cards" />
  <section> Powered by <img src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-wordmark-color.svg" alt="paypal" className="paypalImg"/></section>
</form>
        </div>
    )
}
export default Order