import React from "react";

import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    return <div className={styles.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        {/* The spread operator is being used here to move all props from this component and put them into this input component */}
        {/* See MealItemForm to see the prop key value pairs that are being entered in to this lower input component */}
        <input ref={ref} {...props.input}/>
    </div>
});

export default Input;