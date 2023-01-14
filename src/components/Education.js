import React from 'react';
import Field from './Field';

class Education extends React.Component {
    render() {
        return (
            <div>
                <Field id="college" type="text" labelText="College name" />
                <Field id="degree" type="text" labelText="Degree" />
                <Field id="from" type="date" labelText="From: " />
                <Field id="to" type="date" labelText="To: " />
            </div>
        );
    }
}

export default Education;
