import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        hasError:false
      }
    }
    static getDerivedStateFromError( error ) {
         return {hasError:true}
    }
    componentDidCatch( error, errorInfo ) {
        console.log(error,errorInfo)
    }
  render() {
      if ( this.state.hasError ) {
       return <h3>Something went wrong sir</h3>
      }
      return this.props.children
  }
}

export default ErrorBoundary