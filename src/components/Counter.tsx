import { useState } from "react";
import classes from "./Counter.module.sass";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p style={{ fontSize: "36px" }}>{count}</p>
            <button
                className={classes.button}
                onClick={() => setCount((prev) => prev + 1)}
            >
                increase count
            </button>
            <button
                className={classes.buttonPink}
                onClick={() => setCount((prev) => prev - 1)}
            >
                decrease count
            </button>
        </div>
    );
}
