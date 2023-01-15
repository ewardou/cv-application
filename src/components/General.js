import React from 'react';
import Field from './Field';
import '../styles/general.css';

class General extends React.Component {
    render() {
        return (
            <section>
                <h1>General information</h1>
                <Field
                    id="name"
                    labelText="Name"
                    type="text"
                    isEditing={this.props.isEditing}
                />
                <Field
                    id="email"
                    labelText="Email address"
                    type="email"
                    isEditing={this.props.isEditing}
                />
                <Field
                    id="number"
                    labelText="Phone number"
                    type="text"
                    isEditing={this.props.isEditing}
                />
            </section>
        );
    }
}

export default General;
