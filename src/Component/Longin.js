import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TexField from 'material-ui/TextField';
import axios from 'axios';
import { Button } from 'react-bootstrap'; 

class Longin extends React.Component{
   
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
            
        }
    }
    
    //values  change when onClick function is clicked.
    //sending details to backend when submit button is pressed
    handleClick(event){
        var apiBaseUrl = "http://localhost:3000/api/";
        var self = this;
        var payload={
            "email":this.state.username,
            "password":this.state.password
        }
        axios.post(apiBaseUrl+'login', payload)
        
        .then(function (response) {
            console.log(response);
            if(response.data.code == 200) {
                console.log("Login successfull");
                var uploadScreen=[];
                uploadScreen.push(<uploadScreen appContext={self.props.appContext}/>
                                 )
                self.props.appContext.setState({loginPage:[],uploadScreen: uploadScreen})

            }
            else if(response.data.code == 204){
                console.log("Username password do not match")
            }
            else{
                console.log("Username does not exixts");
                alert("Username does not exist");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }
      
    
    
    render() {
        return(
    <div className="container-fluid">
          <MuiThemeProvider>   
        <div>
           
        <AppBar 
            title="Login"
            />
             <br />
            
            

            <TexField 
            hintText="Enter your username"
            floatingLabelText="username"
            onchange = {(event,newValue) => this.setState({username:newValue})}
            />
         <br />
                 <br />
            <TexField 
            type="password"
            hintText="Enter your password"
            floatingLabelText="Password"
            onchange = {(event,newValue) => this.setState({password:newValue})}
            />
         <br />
            <Button  class="btn btn-dark" primary={true} onClick={(event) => this.handleClick(event)} >
               Enter </Button>
        </div>
            </MuiThemeProvider>
        </div>
        );
 }
}



export default Longin