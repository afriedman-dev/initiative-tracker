import React from 'react';
import CharacterCard from './CharacterCard';

//Initiative List mapping all characters passed in
const InitiativeList = (props) => {
    return (
        <div className="initList col row align-items-center">
            <div className="col-1" onClick={() => props.updateCharList('back')}>
                <i className="fa fa-arrow-circle-left fa-2x col btn" aria-hidden="true"></i>
            </div>
            <div className="col-10 row">
                {props.chars ?
                    props.chars.map((char, i) => <CharacterCard key={i} {...char} index={i} />) :
                    <div className="jumbotron">
                        <h1 className="display-4">Please add a character</h1>
                        <hr className="my-4" />
                        <p className="lead">Once you add a character the tracker will be active</p>
                    </div>
                }

            </div>
            <div className="col-1" onClick={() => props.updateCharList('forward')}>
                <i className="fa fa-arrow-circle-right fa-2x col btn" aria-hidden="true"></i>
            </div>
        </div>
    );
};

export default InitiativeList;