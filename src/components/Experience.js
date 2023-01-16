import React from 'react';
import Field from './Field';

class NewExperience extends React.Component {
    render() {
        return (
            <div>
                <Field
                    id="company"
                    labelText="Company name"
                    type="text"
                    isEditing={this.props.isEditing}
                    onChange={this.force}
                />
                <Field
                    id="position"
                    labelText="Position title"
                    type="text"
                    isEditing={this.props.isEditing}
                />
                <Field
                    id="tasks"
                    type="textarea"
                    labelText="Tasks"
                    isEditing={this.props.isEditing}
                />
                <div>
                    <Field
                        id="from"
                        type="date"
                        labelText="From: "
                        isEditing={this.props.isEditing}
                    />
                    <Field
                        id="to"
                        type="date"
                        labelText="To: "
                        isEditing={this.props.isEditing}
                    />
                </div>
            </div>
        );
    }
}

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    addNewObject = () => {
        this.setState((state) => ({
            count: state.count + 1,
        }));
    };

    render() {
        let array = [];
        for (let i = 0; i < this.state.count; i++) {
            array.push(<NewExperience isEditing={this.props.isEditing} />);
        }
        return (
            <section>
                <h1>Professional experience</h1>
                <button type="button" onClick={this.addNewObject}>
                    +
                </button>
                {array}
            </section>
        );
    }
}

export default Experience;
