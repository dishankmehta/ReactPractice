/**
 * Created by trainees on 3/20/2017.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import './FormPractice.css'

let responseData = [];
let defaultData = [];
class FormPractice extends React.Component{
    constructor(){
        super();
        this.setValues = this.setValues.bind(this);
        this.submitData = this.submitData.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    setValues(){
        this.setState({
            firstName: ReactDOM.findDOMNode(this.refs.firstName).value,
            lastName: ReactDOM.findDOMNode(this.refs.lastName).value,
            userName: ReactDOM.findDOMNode(this.refs.userName).value,
            email: ReactDOM.findDOMNode(this.refs.email).value,
            password: ReactDOM.findDOMNode(this.refs.password).value,
            confirmPassword: ReactDOM.findDOMNode(this.refs.confirmPassword).value
        });

    }

    render(){
        return(
            <div className="column">
                <div className="card">
                    <div className="col-md-6">
                        <div className="form-container">
                            <form onSubmit={this.submitData}>
                                <div className="form-group">
                                    <label> Firstname: </label>
                                    <input type="text" name="firstName" value={this.state.firstName} ref="firstName" className="form-control"
                                           onChange={this.setValues}/>
                                </div>
                                <div className="form-group">
                                    <label> Lastname: </label>
                                    <input type="text" name="lastName" value={this.state.lastName} ref="lastName" className="form-control"
                                           onChange={this.setValues}/>
                                </div>
                                <div className="form-group">
                                    <label> Username: </label>
                                    <input type="text" name="userName" value={this.state.userName} ref="userName" className="form-control"
                                           onChange={this.setValues}/>
                                </div>
                                <div className="form-group">
                                    <label> E-mail: </label>
                                    <input type="email" name="email" value={this.state.email} ref="email" className="form-control"
                                           onChange={this.setValues}/>
                                </div>
                                <div className="form-group">
                                    <label> Password: </label>
                                    <input type="password" name="password" value={this.state.password} ref="password" className="form-control"
                                           onChange={this.setValues}/>
                                </div>
                                <div className="form-group">
                                    <label> Confirm Password: </label>
                                    <input type="password" name="confirmPassword" ref="confirmPassword" value={this.state.confirmPassword}
                                           className="form-control" onChange={this.setValues}/>
                                </div>
                                <button className="btn btn-primary text-center" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <ShowTable/>
            </div>
        )
    }

    submitData(e){
        /*e.preventDefault();*/
        console.log("Sending Data....!!");
        let data;
        let url = 'http://localhost:8080/SpringJDBC/user';
        if (this.state.password === this.state.confirmPassword) {
            data = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                userName: this.state.userName,
                email: this.state.email,
                password: this.state.password
            };
            console.log(JSON.stringify(data));
            axios.post(url,data)
                .then((response) => {
                    console.log("This is the response----->"+JSON.stringify(response));
                    responseData = response;
                    this.setState({
                       tempData: response.data
                    });
                    console.log(responseData.data[0].firstName);
                }).catch(function (error) {
                console.log(error);
            });
            console.log('Data posted..!!');
            location.reload();
        } else {
            alert("Passwords do no match...!!!");
        }
    }
}

class ShowTable extends React.Component{

    constructor(){
        super();
        const tempData = [];
        this.state = {tempData}
    }

    componentWillMount(){
        let url = "http://localhost:8080/SpringJDBC/user/list";
        axios.get(url)
            .then((response) => {
                defaultData = response.data;
                console.log("Component now will fetch this data:----->");
                console.log(defaultData);
                this.setState({
                    tempData: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render(){
        return(
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">List of Users</div>
                    <div className="table-container">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th width="20%">
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.tempData.map((user,i) =>
                                    <tr key={i}>
                                        <td key={user.firstName}>{user.firstName}</td>
                                        <td key={user.lastName}>{user.lastName}</td>
                                        <td key={user.userName}>{user.userName}</td>
                                        <td key={user.email}>{user.email}</td>
                                        <td key="buttons">Buttons</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

}

export default FormPractice