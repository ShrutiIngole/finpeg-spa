import React, {useState} from 'react';
import graph from '../../graph-bar.png';
import bank from '../../bank.png';

const Fund = ({ name, type, three, one }) => {
    const [buttonState, setButton] = useState("Show");
    const [toggleclass, setToggle] = useState("collapsed");
    const [chevron, setChev] = useState("fas fa-chevron-down");
    const handleToggle = () => {
        if (buttonState === "Show") {
            setButton("Hide");
            setToggle("expanded");
            setChev("fas fa-chevron-up");
        }
        else {
            setButton("Show");
            setToggle("collapsed");
            setChev("fas fa-chevron-down");
        }
    }

    return(
        <div className="fund-card">
            <div className="details">
                <span className="fund-img">
                    <img src={bank} alt={name} className="fund-logo" />
                </span>
                <span className="fund-title">
                    <div className="fund-name">{name}</div>
                    <div className="fund-desc">{type.toLowerCase()}</div>
                </span>
                <span className="arrow">
                    <i className="fas fa-chevron-right" id="grey" />
                </span>
            </div>
            <div className="returns" id={toggleclass}>
                <img src={graph} alt="returns" />
                <span className="return-block">
                    <div className="type">Average 3Y <br /> Rolling Return</div>
                    <div className="value">{Math.round(three * 10 )/ 10} %</div>
                </span>
                <span className="return-block">
                    <div className="type">3Y Standard <br /> Deviation</div>
                    <div className="value">{Math.round(3.123 * 10 )/ 10} %</div>
                </span>
                <span className="return-block">
                    <div className="type">1Y <br /> Return</div>
                    <div className="value">{Math.round(one * 10 )/ 10} %</div>
                </span>
            </div>
            <div className="button-section">
                <span className="button" id="chalk" onClick={()=>{handleToggle()}} data-toggle="collapse" data-target="#collapse-div" aria-expanded="false" aria-controls="collapse-div">
                    <span className="button-text">
                        {buttonState} Performance Details
                    </span>
                    <span className="button-icon">
                    <i className={chevron} id="grey" ></i>
                    </span>
                </span>
                <span className="button blue">
                    <span className="button-icon">
                        <i className="fas fa-cart-plus" id="white" />
                    </span>
                    <span className="button-text" id="white" > Invest Now </span> 
                </span>
            </div>
        </div>
    );
}

export default Fund;