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
        return (
            <div>
                <label htmlFor={this.props.id}>{this.props.labelText}</label>
                {this.props.isEditing ? (
                    <input
                        id={this.props.id}
                        type={this.props.type}
                        required
                        value={this.state.value}
                        onChange={this.updateValue}
                    />
                ) : (
                    <p>{this.state.value}</p>
                )}
            </div>
        );
    }
}

export default Field;
