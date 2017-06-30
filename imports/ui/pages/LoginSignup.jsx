import React, {Component} from 'react';
import SignIn from '/imports/ui/pages/SignIn.jsx';
import SignUp from '/imports/ui/pages/SignUp.jsx';

export default class Name extends Component {
  constructor(props){
    super(props);
    this.state ={
      signup: false
    };
  }

  render() {
    let updateSignUp = () => {
      this.setState({'signup' : !this.state.signup});
    }
    return (
      <div>
        {this.state.signup ? <SignUp /> : <SignIn />}
        <div>
          <span onClick={updateSignUp} style={{cursor: 'pointer'}} >
            {this.state.signup ? "Already a user" : "New User? Register Here"}</span>
        </div>
      </div>

    )
  }
}
