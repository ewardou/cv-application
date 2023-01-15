import React from 'react';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

class EditButton extends React.Component {
    render() {
        let button = <Button onClick={this.props.onClick} text={'Edit'} />;
        if (this.props.isEditing) {
            button = null;
        }
        return button;
    }
}

class Button extends React.Component {
    render() {
        return <button onClick={this.props.onClick}>{this.props.text}</button>;
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: true,
        };
    }

    editFields = (e) => {
        e.preventDefault();
        this.setState((state) => ({
            isEditing: !state.isEditing,
        }));
    };

    render() {
        const editing = this.state.isEditing;
        let submitButton;
        if (editing) {
            submitButton = <Button onClick={this.editFields} text={'Submit'} />;
        } else {
            submitButton = <Button text={'Confirm'} />;
        }
        return (
            <div className="App">
                <form>
                    <General isEditing={editing} />
                    <Education isEditing={editing} />
                    <Experience isEditing={editing} />
                    <div>
                        <EditButton
                            isEditing={editing}
                            onClick={this.editFields}
                        />
                        {submitButton}
                    </div>
                </form>
            </div>
        );
    }
}

export default App;
