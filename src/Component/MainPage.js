import React from 'react';
import LonginScreen from './LonginScreen'
import Register from './Register';

class MainPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            loginPage:[],
            uploadScreen:[]
        }
    }
    
    componentWillMount(){
        var loginPage=[];
        loginPage.push(<LonginScreen parentContext={this}/>
                      );
        this.setState({
            loginPage:loginPage
        })
    }
    render() {
        return(
        <div>
        
            {this.state.loginPage}
            {this.state.uploadScreen}
        </div>
        );
    }
    
}

export default MainPage;