import React from 'react'

const Person=(props) => {
    const {first, last, age, haircolor} = props
    return (
        <div>
            <h2>Hello {first}, {last}</h2>
            <h2>You have {haircolor} and is {age} years old.</h2>
        </div>
    );
}

export default Person;