import React from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";

//Initiative List mapping all characters passed in
class InitiativeList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    const { characters, updateInitiativeList } = this.props;

    return (
      <div className="initList col row align-items-center">
        <div
          className="col-1"
          onClick={() => updateInitiativeList("back")}
        >
          <i
            className="fa fa-arrow-circle-left fa-2x col btn"
            aria-hidden="true"
          />
        </div>
        <div className="col-10 row">
          {!Array.isArray(characters) || !characters.length ? (
            <div className="jumbotron">
              <h1 className="display-4">Please add a character</h1>
              <hr className="my-4" />
              <p className="lead">
                Once you add a character the tracker will be active
              </p>
            </div>
          ) : (
            characters.map((char, i) => (
              <CharacterCard key={i} {...char} index={i} />
            ))
          )}
        </div>
        <div
          className="col-1"
          onClick={() => updateInitiativeList("forward")}
        >
          <i
            className="fa fa-arrow-circle-right fa-2x col btn"
            aria-hidden="true"
          />
        </div>
      </div>
    );
  }
}

InitiativeList.propTypes = {
  characters: PropTypes.array.isRequired,
  updateInitiativeList: PropTypes.func.isRequired
};

export default InitiativeList;
