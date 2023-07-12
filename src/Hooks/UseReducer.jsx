import React, { useReducer } from 'react'
import './style.css'

const UseReducer = () => {

    const reducer = (state, action) => {
        if (action.type === "INCR") {
            state = state + 1;
        }

        if (action.type === "DECR") {
            state > 0 ? state = state - 1 : state = 0;
        }
        return state;

    };

    const initialData = 10;

    const [state, dispatch] = useReducer(reducer, initialData);

    // const [myNum, setMyNum] = React.useState(initialData)
    // console.log(myNum)
    return (
        <div className='center_div'>
            <p>{state}</p>
            <div className="button2" onClick={() => dispatch({ type: "INCR" })}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                INCR
            </div>
            <div className="button2" onClick={() => dispatch({ type: "DECR" })}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                DECR
            </div>
        </div>
    )
}

export default UseReducer;