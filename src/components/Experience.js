import React from 'react';
import Field from './Field';

class Experience extends React.Component {
    render() {
        return (
            <div>
                <Field id="company" labelText="Company name" type="text" />
                <Field id="position" labelText="Position title" type="text" />
                <div>
                    <label htmlFor="tasks">Tasks</label>
                    <textarea id="tasks" />
                </div>
                <Field id="from" type="date" labelText="From: " />
                <Field id="to" type="date" labelText="To: " />
            </div>
        );
    }
}

export default Experience;
