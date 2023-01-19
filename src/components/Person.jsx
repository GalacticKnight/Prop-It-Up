import React, {useState} from 'react'

const Person=(props) => {
    const { firstName, lastName, age, hairColor } = props;
    const [stateAge, setStateAge] = useState(age);
    return (
        <div>
        <h2>
            {lastName}, {firstName}
        </h2>
        <p>Age: {stateAge}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={() => setStateAge(stateAge + 1)}>
            Birthday Button for {firstName} {lastName}
        </button>
        </div>
    );

    /*
    //Prop It Up
    const {first, last, age, haircolor} = props
    return (
        <div>
            <h2>Hello {first}, {last}</h2>
            <h2>You have {haircolor} and is {age} years old.</h2>
        </div>
    );
    */
}

export default Person;