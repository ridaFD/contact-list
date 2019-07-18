import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
    // console.log('Iam state')
  }
  
  
async componentDidMount() {
  try{
    const response = await fetch('http://localhost:8080/contacts/list')
  const text = await response.json()
  // console.log('iam text ',text)
  this.setState({list: text})
  console.log(this.state.list)
  }
    catch(err){
      
    }

}

  render() { 

  return (
    
    <div></div>)
}
  }

 
export default App;