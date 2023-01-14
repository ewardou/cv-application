import React from 'react';

class Field extends React.Component {
    render() {
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.labelText}</label>
                <input id={this.props.id} type={this.props.type} required />
            </div>
        );
    }
}

export default Field;
