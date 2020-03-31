import React from "react";
import DisplayPersons from "./DisplayPersons";
import { v1 as uuid } from "uuid";
import AddPerson from './AddPerson';
import UpdateMoney from './UpdateMoney'

class Persons extends React.Component {
    state = {
        persons: [
            { title: "Mr", firstName: "Ben", lastName: "Newton", age: 50, id: uuid() },
            { title: "Mr", firstName: "John", lastName: "Dowie", age: 30, id: uuid() },
            { title: "Mrs", firstName: "Scarlet", lastName: "Town", age: 20, id: uuid() }
        ],
        money: 100,
        amountPerYear: ''
    };
    //divide money per individuals age
    splitMoney = () => {
        let totalAge = 0;
        this.state.persons.forEach((person) => {
            totalAge += Number(person.age)
        })
        const amountPerYear = parseFloat(this.state.money) / totalAge;
        this.setState({
            amountPerYear
        })
    }
    addPerson = (person) => {
        this.setState({
            persons: [...this.state.persons, person]
        }, () => {
            this.splitMoney();
        })
    }
    updateMoney = (money) => {
        this.setState({
            money
        }, () => {
            this.splitMoney();
        })
    }
    componentDidMount() {
        this.splitMoney();
    }
    render() {
        return (
            <div className="container">
                <DisplayPersons {...this.state} />
                <AddPerson addPerson={this.addPerson} />
                <UpdateMoney money={this.state.money} updateMoney={this.updateMoney} />
            </div>
        );
    }
}

export default Persons;
