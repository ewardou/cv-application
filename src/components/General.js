import React from 'react';
import Field from './Field';

class General extends React.Component {
    render() {
        return (
            <div>
                <Field id="name" labelText="Name" type="text" />
                <Field id="email" labelText="Email address" type="email" />
                <Field id="number" labelText="Phone number" type="text" />
            </div>
        );
    }
}

export default General;
