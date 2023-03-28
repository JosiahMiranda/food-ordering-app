import React from "react";
import Input from "../../UI/Input";

import styles from "./MealItemForm.module.css";

const MealItemForm = props => {
    return <form className={styles.form}>

    {/* See Input comment to see how these props are being passed down to the inner input component */}
    <Input label="Amount" input={{
        id: 'amount_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
    }}/>
    <button>+ Add</button>

    </form>
};

export default MealItemForm