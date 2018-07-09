//basic character card
const CharacterCard = (props) => {
    return (
        <div className="charCard">
            <span>Edit</span>
            <h3>{props.name}</h3>
            <img className="charImg" src={props.charImg} />
        </div>
    );
};

// const CharacterStats;

//Initiative List mapping all characters passed in
const InitiativeList = (props) => {
    return (
        <div className="initList">
            {props.chars.map(char => <CharacterCard key={char.name} {...char} />)}
        </div>
    );
};

//Form component for adding new characters
class Form extends React.Component {
    state = { charNameInput: '', charImgInput: '' }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({ name: this.state.charNameInput, charImg: this.state.charImgInput });
        this.setState({ charNameInput: '', charImgInput: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Character Name: <br />
                    <input type="text" value={this.state.charNameInput}
                        onChange={(e) => this.setState({ charNameInput: e.target.value })}
                        placeholder="Thorin Oakshield" required />
                </label>
                <br />
                <label>
                    Character Image Token: <br />
                    <input type="text" name="imgUrl"
                        value={this.state.charImgInput}
                        onChange={(e) => this.setState({ charImgInput: e.target.value })} />
                </label>
                <br />
                <button type="submit"> Add Character </button>
            </form>
        )
    }
}

//App module for handling the app data state and components
class App extends React.Component {
    state = {
        characterList: [
            { name: "Thorin Strongbeard", charImg: "https://i.pinimg.com/736x/7c/c7/aa/7cc7aa6b6fd0d30b2ab78eabcd44c94e--dwarf-apocalypse.jpg" },
            { name: "Minotaur", charImg: "https://s-media-cache-ak0.pinimg.com/originals/20/ee/fc/20eefc59de0bd9d75a2b4889c18504bc.png" },
            { name: "Elrik Battleborne", charImg: "https://i.pinimg.com/originals/6c/0a/f9/6c0af91e8c7b7c8607091a755dcc483c.png" },
        ]
    }

    addNewChar = (charInput) => {
        this.setState(prevState => ({
            characterList: prevState.characterList.concat(charInput)
        }))
    };

    render() {
        return (
            <div>
                <InitiativeList chars={this.state.characterList} />
                <Form onSubmit={this.addNewChar} />
            </div>
        )
    }
}