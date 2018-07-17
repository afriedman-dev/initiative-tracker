import React from 'react';
import LiveEditInput from '../common/LiveEditInput';

//basic character card
const CharacterCardInput = (props) => {
    let cardClass = "charCard card";

    if (props.index === 0) {
        cardClass += " current-card";
    }

    return (
        <div className="col ml-auto">
            <div className={cardClass}>
                <img className="charImg card-img-top" src={props.charImg} alt="Character Card" />
                <div className="card-body">
                    <h5 className="card-title"><input value={props.name} /></h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <LiveEditInput
                            name="order"
                            label="Initiative:"
                            value={props.initiative}
                            onChange={props.onFieldChange}
                            error={props.errors.initiative} />
                    </li>
                    <li className="list-group-item">
                        <LiveEditInput
                            name="armor"
                            label="AC:"
                            value={props.armor}
                            onChange={props.onFieldChange}
                            error={props.errors.armor} />

                    </li>
                    <li className="list-group-item">
                        <LiveEditInput
                            name="health"
                            label="HP:"
                            value={props.health}
                            onChange={props.onFieldChange}
                            error={props.errors.health} />
                    </li>
                    <li className="list-group-item">
                        <LiveEditInput
                            name="attack"
                            label="ATTACK:"
                            value={props.attack}
                            onChange={props.onFieldChange}
                            error={props.errors.attack} />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CharacterCardInput;