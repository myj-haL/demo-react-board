import React, {Component} from 'react'; 
import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Form from './Form';



//props 로 전달, 단방향
/* class App extends Component {
  render(){
    const child =[
      {
        name : 'haeywon',
        job : 'student',
      },
      {
        name : "me",
        job : 'developer',
      },
    ]
      
    return (
      <div className='container'>
        <Table childsData={child}/>
      </div>
    )
    
  }
} */


//state 로 전달, 유연한 방향
class App extends Component {
  state = {
    childs : [
      /* {
        name : 'haeywon',
        job : 'student',
      },
      {
        name : "me",
        job : 'developer',
      },
      {
        name : "user",
        job : 'normal',
      }, */
    ],
  }

  removeChild = (index) => {
    const {childs} = this.state
  
      this.setState({
        childs : childs.filter((child, i) => {
          return i !== index
        }),
    })
  }
  
  render () {
    const {childs} = this.state
    return (
      <div className='container'>
          <Table  childsData={childs} removeChild={this.removeChild} />
          <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }

  handleSubmit = (childs) => {
    this.setState({childs : [...this.state.childs, childs]})
  }

  
}




export default App;


