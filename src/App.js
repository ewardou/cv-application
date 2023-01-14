import React from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

class EditButton extends React.Component {
    render() {
        let button = <button>Edit</button>;
        if (!this.props.isEditing) {
            button = null;
        }
        return <div>{button}</div>;
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
        };
    }

    render() {
        return (
            <div className="App">
                <General />
                <Education />
                <Experience />
                <div>
                    <EditButton isEditing={this.state.isEditing} />
                </div>
            </div>
        );
    }
}

export default App;
