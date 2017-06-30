import { Meteor } from 'meteor/meteor';
import React, {Component} from 'react';
import { Link } from 'react-router';
export default class Header extends Component {
  render() {
    let {currentUser, isLoggedIn} = this.props;
    let user = Meteor.user();
    let logOut = (props) => {
      Meteor.logout(function(){});
    }
    return (
          <div className="col-sm-12">
            <div className="col-sm-8">
              <ul className="nav nav-tabs">
                <li  className="active red"><Link to="/" className = "red">Home</Link></li>
                <li  className="active red"><Link to="/admin" className = "red">Admin</Link></li>
              </ul>
          </div>
          <div className="col-sm-4" style={{textAlign: 'right'}}>
            {isLoggedIn ?
              <span>{user.profile.name} <button onClick={logOut} className="btn btn-danger">Logout</button></span>
             : <Link to="/login" className="btn btn-success">Login</Link>
           }
          </div>
        </div>
      )
    }
  }
