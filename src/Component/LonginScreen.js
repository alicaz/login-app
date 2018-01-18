import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Longin from './Longin';
import Register from './Register';
import axios from 'axios';
import { Button } from 'react-bootstrap'; 

class Loginscreen extends Component {
  constructor(props){
    super(props);
      
    this.state={
      username:'',
      password:'',
      loginscreen:[],
      loginmessage:'',
      buttonLabel:'Register',
      isLogin:true
    }
  }
    
  componentWillMount(){
    var loginscreen=[];
    loginscreen.push(<Longin parentContext={this} appContext={this.props.parentContext}/>
                    );
    var loginmessage = "Not registered yet, Register Now";
    this.setState({
                  loginscreen:loginscreen,
                      loginmessage:loginmessage
                    });
  }
    
    
    handleClick(event){
  
    var loginmessage;
    if(this.state.isLogin){
      var loginscreen=[];
      loginscreen.push(<Register parentContext={this}/>);
      loginmessage = "Go to Login if Registered";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Login",
                     isLogin:false
                   })
    }
    else{
      var loginscreen=[];
      loginscreen.push(<Longin parentContext={this}/>);
      loginmessage = "Not Registered yet.Go to registration";
      this.setState({
                     loginscreen:loginscreen,
                     loginmessage:loginmessage,
                     buttonLabel:"Register",
                     isLogin:true
                   })
    }
  }
  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div>
       
          <MuiThemeProvider>
            <div>
               <Button  class="btn btn-dark" label="submit" label={this.state.buttonLabel} primary={true}  onClick={(event) => this.handleClick(event)}>
        Register/Login
        </Button>
           </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}



export default Loginscreen;