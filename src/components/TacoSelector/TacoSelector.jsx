import React from 'react';
import './TacoSelector.css';
const TacoSelector = (props) => (
    <div className="TacoSelector">
        {props.numTacos.map((taco, idx) =>
            <button
                className={props.selectedIdx === idx ? 'selected' : ""}
                onClick={() => props.handleTacoSelection(idx)}
            >
                {props.selectedIdx === idx ? `Taco ${idx+1} Selected` : `Select Taco ${idx+1}`}
            </button>
        )}
    </div>
)
export default TacoSelector