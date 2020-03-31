import React from "react";

const DisplayPersons = ({ persons, amountPerYear }) => {
    const showPersons = persons.length ? (
        persons.map(person => {
            let money = parseFloat(person.age * amountPerYear).toFixed(2);
            if (isNaN(money)) {
                money = 0;
            }
            return (
                <div key={person.id}>
                    <span> {person.title} </span>
                    <span> {person.firstName} </span>
                    <span> {person.lastName} </span>
                    <span> {`is ${person.age} years old. Should receive £${money}`} </span>
                </div>
            );
        })
    ) : (
        <div>{`No Persons found... try adding some.`}</div>
    );
    return showPersons;
};

export default DisplayPersons;
