import React from 'react';
import Field from './Field';

class Education extends React.Component {
    render() {
        return (
            <section>
                <h1>Education</h1>
                <Field
                    id="college"
                    type="text"
                    labelText="College name"
                    isEditing={this.props.isEditing}
                />
                <Field
                    id="degree"
                    type="text"
                    labelText="Degree"
                    isEditing={this.props.isEditing}
                />
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

export default Education;
