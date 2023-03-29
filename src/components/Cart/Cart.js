import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";

import styles from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = props => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {

    };

    const cartItemAddHandler = item => {

    };

    const cartItems = <ul className={styles['cart-items']}>{cartCtx.items.map(item =>
        <CartItem key={item.id} name={item.name} amount={item.amount}
            price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)}>{item.name}</CartItem>)}</ul>;
        // bind method preconfigures the method to tell it what it should be expecting to be entered. So it
        // ensures that add handler has an item and remove handler has an id.
    return <Modal onClose={props.onClose}>
        {cartItems}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={styles.button}>Order</button>}
        </div>
    </Modal>

};

export default Cart;