import React from "react";
import NewCharacterForm from "./NewCharacterForm";

const NewCharacterFormPage = props => {
  return (
    <div className="col offset-3" style={{ marginTop: "2.5rem" }}>
      <NewCharacterForm onSubmit={props.addNewChar} />
    </div>
  );
};

export default NewCharacterFormPage;
