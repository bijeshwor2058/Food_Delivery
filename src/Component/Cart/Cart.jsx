import styles from "./cart.module.css";
import cart_img from "../../assets/cart_img.png";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className={styles.review_container}>
      <div className={styles.items}>
        <h2>Your Cart Is Empty</h2>
        <img src={cart_img} alt="cartImage" />
      </div>
      <Link to={'/'}>
        <button className={styles.GotohomeBtn}>Go To Home</button>
      </Link>
    </div>
  );
};

export default Cart;
