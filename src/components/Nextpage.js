import React from "react"; 
import { Link } from 'react-router-dom'
import axios from 'axios';
import Card from './Card';

 export default class Nextpage extends React.Component {
    constructor(props){
        super(props)
        this.state={userFriendListData:[]};
        console.log("seciomf ",this.props.location.state.detail.id)
        axios.get(`http://localhost:8080/api/v1/user/getUserFriendById/${this.props.location.state.detail.id}`)
        .then(userFriendListResp=>{
            console.log("the friend list response from s",userFriendListResp.data)
        this.setState((state, props) => ({userFriendListData: userFriendListResp.data}));
        });}
    render() {
        return (
            console.log("in return ", this.props.location.state.detail.id),
            <div className="container emp-profile">
                {/* <h1>User Details</h1> */}
                <form method="post">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img src={this.props.location.state.detail.userProfileImageUrl} alt="user image" style={{ width: "100%" }} />
                                <h1>{this.props.location.state.detail.name}</h1>
                                <p className="title">{this.props.location.state.detail.email}</p>
                                <p>{this.props.location.state.detail.address}</p>
                                <div style={{ margin: " 24px 0" }}>
                                    <i className="fa fa-dribbble"></i>
                                    <i className="fa fa-twitter"></i>
                                    <i className="fa fa-linkedin"></i>
                                    <i className="fa fa-facebook"></i>
                                </div>
                                <p><Link to="/next-page2"><button>Contact</button></Link></p>
                            </div>
                        </div>
                
         <div class="vl"></div>
                        <div className="col-md-6">
                            <div className="profile-head">
                                <h1>Friends Suggestion</h1>
                                <div className="col-md-6">
                                  {console.log("the verify data is",this.state.userFriendListData)
                                }
                                {this.state.userFriendListData.map((friend, index) => <Card key={index} {...friend}/>)}  
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr></hr>
                    <div>

                        {/* <h3>Recomondation</h3> */}

                        <h3>Recomondation</h3>
                        <div className="container col-md-4">
                            <div className="card">
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog' alt="" style={{ width: "100%" }} />
                                <h1>John Doe</h1>
                                <p className="title">CEO  Founder, Example</p>
                                <p>Harvard University</p>
                                <div style={{ margin: " 24px 0" }}>
                                    <i className="fa fa-dribbble"></i>
                                    <i className="fa fa-twitter"></i>
                                    <i className="fa fa-linkedin"></i>
                                    <i className="fa fa-facebook"></i>
                                </div>
                                <p><Link to="/next-page2"><button>Contact</button></Link></p>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        );
    }

// export default class Nextpage extends React.Component{
// // constructor(props){
// // super(props)
// // this.state={loginUserDataFriends:[]};
// // console.log("seciomf ",this.props.location.state.detail.id)
// // axios.get(`http://localhost:8080/api/v1/user/getUserFriendById/${this.props.location.state.detail.id}`)
// // .then(userFriendList=>{
// // this.setState((state, props) => ({userFriendListData: userFriendList.data}));
// // });}
// render(){
//     console.log("state data",this.state.userFriendListData)
// const createUserCard=(
//     <div class="col-md-4">
// {[0,1].map(friend => <Card userFriendList={this.state.loginUserDataFriends[friend]}/>)}    
// </div>
//     )
// return(

// <div>{createUserCard}</div>);


// }







}

