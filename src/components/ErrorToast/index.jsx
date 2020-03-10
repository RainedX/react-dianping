import React, { Component } from 'react'
import './index.css'

class ErrorToast extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timer: null
    }
  }
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.clearError();
    }, 100)
  }
  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }
  render() {
    const { msg } = this.props
    return (
      <div className="errorToast">
        <div className="errorToast_text">{msg}</div>
      </div>
    )
  }
}

export default ErrorToast;
