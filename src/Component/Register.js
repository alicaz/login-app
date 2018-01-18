import React from 'react';
import axios from 'axios';
import Longin from './Longin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Button } from 'react-bootstrap'; 

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state={
            usename:'',
            password:'',
            email:'',
            school:''
        }
    }
    
    componentWillMount(){
        
    }
    //when the button is pressed, post values wich are ...
    //if response is 200, push login screen
    //sending details to backend
    handleClick(event){
        var apiBasedUrl = "http://localhost:4000/api/";
        
        console.log(  "values", this.state.first_name, this.state.last_name, this.state.password, 
        this.state.email, 
        this.state.school
                );
        
        var self=this;
        
        var payload={
            "first_name": this.state.first_name,
            "last_name": this.state.last_name,
            "password": this.state.password,
            "email": this.state.email,
            "school": this.state.school
        }
   
    
    axios.post(apiBasedUrl+'/register', payload)
    .then(function (response) {
        console.log(response);
    if(response.data.code == 200){
      var loginscreen=[];
        loginscreen.push(<Longin parentContext={this}/>
                        );
      var loginmessage = "Not Registered yet. Go to registration"; 
        
        self.props.parentContext.setState({loginscreen:loginscreen, loginmessage:loginmessage, 
         buttonLabel:"Register",
        isLogin:true
                    });
     }
    
        
    })
    
    .catch(function (error) {
        console.log(error);
    });
    }

    render(){
        return(
            <div>
            <MuiThemeProvider>
                <div>
            <AppBar title="Register" />
            <br />
            
            <TextField type="text" hintText="Enter your First name"
            floatingLabelText="First name"
            onchange = {(event,newValue) =>
    this.setState({first_name:newValue})} />
            
             <br />
            <TextField type="text"
            hintText="Enter your Last name"
            floatingLabelText="Last name"
            onchange= {(event,newValue) =>
         this.setState({last_name:newValue})}/>
            
             <br />
            <TextField type="text"
            hintText="Enter your Password"
            floatingLabelText="Password"
    onchange={(event,newValue) =>
             this.setState({password:newValue})}/>
            
             <br />
            <TextField type="text" 
            hintText="Enter your Email"
            floatingLabelText="Email"
onchange={(event,newValue) =>
         this.setState({email:newValue})}/>
            
             <br />
            <TextField type="text" 
            hintText="Enter your School name"
            floatingLabelText="School name"
        onchange={(event,newValue) =>
                 this.setState({school:newValue})}/>
 <br />
                     <Button class="btn btn-dark" label="submit" primary={true}  onclick={(event) => this.handleClick(event)}>
                        Register </Button>
                </div>
            </MuiThemeProvider>
            </div>
        );
    }
}


export default Register
