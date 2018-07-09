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
                    <li className="list-group-item">AC: 16</li>
                    <li className="list-group-item">HP: 25</li>
                    <li className="list-group-item">Attack: +7</li>
                </ul>
                <a href="#" className="card-link btn btn-secondary"><i className="fa fa-pencil-alt" aria-hidden="true"></i> Edit</a>
            </div>
        </div>
    );
};

export default CharacterCard;