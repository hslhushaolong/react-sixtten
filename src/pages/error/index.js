/**
 * 404 错误页面
 * */
import React, { Component } from 'react';

class Error extends Component {
  render() {
    return (
      <div>
        <div style={{ width: '100%', height: '100%' }}>
          <div className="errorWrapper">
            <div className="errorPin" />
            <div className="errorCode"> 错误 <span>404</span></div>
            <p>你所找的页面已进入外太空</p>
            <p>请刷新页面或者<button><a href="#/">返回首页</a></button></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;
