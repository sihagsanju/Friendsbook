import React, { Component} from 'react';
import "./../style/index.scss"
import axios from 'axios';
// import Map from './Map';
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
//  import 'bootstrap/dist/css/bootstrap.min.css';
// import Nextpage from './Nextpage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={value:'',userData:[],isUserExists:false,detail:""};
        // this.rowCallback = this.rowCallback.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCreate=this.handleCreate.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleCreate(event){
    event.preventDefault();
    let user = {
      'email': this.state.value
    };
    axios.post(`http://localhost:8080/api/v1/user/postAddUser`,user)
    .then(response => {
      this.setState((state, props) => ({userData:response.data}));
      console.log(" hi ",this.state.userData)
      alert(" Registered Succesfully ")
    })
  }
handleSubmit(event) {
  event.preventDefault();
  console.log(this.state.value);
  let user = {
    'email': this.state.value
  };

  axios.post(`http://localhost:8080/api/v1/user/postIsUserExists`,user)
  .then(response => {
    this.setState((state, props) => ({userData: response.data}));
    if(this.state.userData.email===user.email){
      this.setState({isUserExists:true})
      this.props.history.push({  pathname: '/next-page',
      state: { detail: this.state.userData}})
    }
    else{
    this.setState({isUserExists:false});
    console.log("else")
    alert("please Register your email")
    }

  })}


  render() {
    return (
      <Container className="App">
        <h2 style={{color:'black'}} id="welcome">Welcome To FriendsBook !</h2>
        <div id="main">
        <Form className="form" onSubmit={this.handleSubmit}>
          <Col>
            <FormGroup id="formGroup">

           <Label id="iconLabel"> <i className="fa fa-envelope" aria-hidden="true"></i></Label>
              <Label id="emailLabel">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
        <Button className="btn btn-primary"  id="btn">Login</Button>
        <Button  className="btn btn-primary" id="btn2"  onClick={this.handleCreate}>SignUp</Button>
        </Form>
       
        </div>
        {/* <Nextpage org={this.state.user}/> */}
      </Container>
      
    );
 
  }
}

export default App;
