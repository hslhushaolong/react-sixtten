import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div>
          调转页面
        <button><Link to='/error/asa'>提交</Link></button>
      </div>
    );
  }
}

export default Login;
