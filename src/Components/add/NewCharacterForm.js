import React from 'react';
import TextInput from '../common/TextInput';

//Form component for adding new characters
const NewCharacterForm = ({char, onSubmit, onFieldChange, errors}) => {
        return (
            <div className="col-6">
                <form onSubmit={onSubmit} className="card">
                    <h5 className="card-header text-white bg-secondary">New Character</h5>
                    <div className="card-body">
                        <TextInput
                            name="name"
                            label="Character Name:"
                            value={char.name}
                            onChange={onFieldChange}
                            placeholder="Thorin Oakshield"
                            error={errors.name} />
                        <TextInput
                            name="order"
                            label="Initiative:"
                            value={char.order}
                            onChange={onFieldChange}
                            placeholder="Rolled Initiative"
                            error={errors.order} />
                        <TextInput
                            name="armor"
                            label="Armor:"
                            value={char.armor}
                            onChange={onFieldChange}
                            placeholder="Armor Class"
                            error={errors.armor} />
                        <TextInput
                            name="health"
                            label="Health:"
                            value={char.health}
                            onChange={onFieldChange}
                            placeholder="Current Health"
                            error={errors.health} />
                        <TextInput
                            name="attack"
                            label="Attack:"
                            value={char.attack}
                            onChange={onFieldChange}
                            placeholder="Attack Notes: +6 1d10+4"
                            error={errors.attack} />
                        <TextInput
                            name="charImg"
                            label="Character Image Token:"
                            value={char.charImg}
                            onChange={onFieldChange}
                            placeholder="Enter image URL or leave blank for default token"
                            error={errors.charImg} />

                        <button type="submit" className="btn btn-primary"> Add Character </button>
                    </div>
                </form>
            </div>
        )
}


export default NewCharacterForm;