import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {

        // findIndex method finds the index of an item in the array.
        // So in this case, the method will return true if there is an item in the array that has the same id as this item that's being
        // added's id. If it exists it will return the index of the item.
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

        const existingCartItem = state.items[existingCartItemIndex];

        
        let updatedItems;

        // This will be null if the findIndex method did not find an index - meaning that the item is not already in the list.
        if (existingCartItem) {
            // create the updated item using the existing item and just increase the amount by how much the user is adding.
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            // updatedItems is the same as the current items but then just update the index with the new item.
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            // if this is the first time the item is being added, then simply use concat function.
            // its like .push except it returns a new array instead of editing the old one, which is good
            // because we don't want to update the state list directly.
            updatedItems = state.items.concat(action.item); // method that adds a new item to an array but returns a new array.
        }
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
};

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemFromCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;