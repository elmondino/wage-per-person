import React from "react";
import { v1 as uuid } from "uuid";

class AddPerson extends React.Component {
    state = {
        title: "Mr",
        firstName: "",
        lastName: "",
        age: "",
        id: ""
    };
    handleSubmit = e => {
        e.preventDefault();

        // check if age has been a number
        const age = this.state.age;
        const regex = /^\d{1,3}$/;
        if (age.length !== 0 && regex.test(age)) {
            this.setState(
                {
                    id: uuid()
                },
                () => {
                    this.props.addPerson(this.state);
                    this.setState({
                        title: "Mr",
                        firstName: "",
                        lastName: "",
                        age: "",
                        id: ""
                    });
                }
            );
        } else {
            alert("input valid age");
        }
    };
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <select id="title" name="title" onChange={e => this.handleChange(e)} value={this.state.title}>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Miss">Miss</option>
                            <option value="Ms">Ms</option>
                            <option value="Dr">Dr</option>
                        </select>
                    </div>
                    <div>
                        <span htmlFor="firstName">First Name: </span>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            onChange={e => this.handleChange(e)}
                            required
                            value={this.state.firstName}
                        />
                    </div>
                    <div>
                        <span htmlFor="lastName">Last Name: </span>
                        <input type="text" id="lastName" name="lastName" onChange={e => this.handleChange(e)} value={this.state.lastName} />
                    </div>
                    <div>
                        <span htmlFor="age">Age: </span>
                        <input type="text" id="age" name="age" onChange={e => this.handleChange(e)} value={this.state.age} />
                    </div>
                    <input type="submit" value="Add User" />
                </form>
            </div>
        );
    }
}

export default AddPerson;
