import React from 'react';

//basic character card
const CharacterCard = (props) => {

    let classList = "col ml-auto order-a" + props.order;

    return (
        <div className={classList}>
            <div className="charCard card">
                <img className="charImg card-img-top" src={props.charImg} alt="Character Card" />
                <div className="card-body">                
                    <h5 className="card-title">{props.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>AC:</strong> {props.armor}</li>
                    <li className="list-group-item"><strong>HP:</strong> {props.health}</li>
                    <li className="list-group-item"><strong>ATTACK:</strong> {props.attack}</li>
                </ul>
                <button className="card-link btn btn-secondary"><i className="fa fa-pencil-alt" aria-hidden="true"></i> Edit</button>
            </div>
        </div>
    );
};

export default CharacterCard;