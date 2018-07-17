import React from 'react';
import {Link} from 'react-router-dom';

//basic character card
const CharacterCard = (props) => {

    let classList = "col char-card-container ml-auto mb-2";
    let cardClass = "charCard card pullUp";

    if (props.index === 0) {
        cardClass += " current-card floating";
    }

    return (
        <div className={classList}>
            <div className={cardClass}>
                <img className="charImg card-img-top" src={props.charImg} alt="Character Card" />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>AC:</strong> {props.armor}</li>
                    <li className="list-group-item"><strong>HP:</strong> {props.health}</li>
                    <li className="list-group-item"><strong>ATTACK:</strong> {props.attack}</li>
                </ul>
                <Link to={'/character/' + props.id}>
                    <button className="card-link btn btn-secondary" style={{width: `100%`}}>
                        <i className="fa fa-pencil-alt" aria-hidden="true"></i> Edit
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CharacterCard;