import React from 'react';

class Field extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    updateValue = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        let newInput = (
            <input
                id={this.props.id}
                type={this.props.type}
                value={this.state.value}
                onChange={this.updateValue}
            />
        );
        if (this.props.type === 'textarea') {
            newInput = (
                <textarea
                    id={this.props.id}
                    value={this.state.value}
                    onChange={this.updateValue}
                />
            );
        }
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.labelText}</label>
                {this.props.isEditing ? newInput : <p>{this.state.value}</p>}
            </div>
        );
    }
}

export default Field;
