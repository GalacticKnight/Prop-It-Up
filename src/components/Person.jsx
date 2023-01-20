import React, {useState} from 'react'

    /*
    //Putting it together
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
    }
    */
    /*
    //Prop It Up
    const Person=(props) => {
        const {first, last, age, haircolor} = props
        return (
            <div>
                <h2>Hello {first}, {last}</h2>
                <h2>You have {haircolor} and is {age} years old.</h2>
            </div>
        );
    }
    */

    //First JSX
    const Person=() => {
        return (
            <div>
                <h2>Hello Dojo</h2>
                <h2>Things that I will need</h2>
                <ul>
                    <li>Learn React</li>
                    <li>Succeed</li>
                </ul> 
            </div>
        );
    }


export default Person;