import React, {useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = props => {

    const cartCtx = useContext(CartContext);

    // reduce reduces an array to a single value / number in this case.
    // last argument is starting number, then the function inside takes the current value, and the item itself.
    // so here we are continuously adding the accumulated (current) number and adding the items amount,
    // and that started at 0 due to the starting number argument of 0.
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    return <button className={styles.button} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>
            {numberOfCartItems}
        </span>
    </button>
};

export default HeaderCartButton;