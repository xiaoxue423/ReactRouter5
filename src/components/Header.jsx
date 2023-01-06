import React, { Component } from 'react'

export default class Header extends Component {
  render() {
  console.log('Header组件收到的Props',this.props)
    return (
      <>
        <div className="page-header"><h2>我是一般组件React Router Demo</h2></div>
      </>
    )
  }
}
