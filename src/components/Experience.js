import React from 'react';
import Field from './Field';

class Experience extends React.Component {
    render() {
        return (
            <section>
                <h1>Professional experience</h1>
                <Field
                    id="company"
                    labelText="Company name"
                    type="text"
                    isEditing={this.props.isEditing}
                />
                <Field
                    id="position"
                    labelText="Position title"
                    type="text"
                    isEditing={this.props.isEditing}
                />
                <div>
                    <label htmlFor="tasks">Tasks</label>
                    <textarea id="tasks" />
                </div>
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
            </section>
        );
    }
}

export default Experience;
