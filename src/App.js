import './App.css';
import React , {Component} from 'react';
import Too from './xompnmt/too/too';
import Aitm from './xompnmt/aitm/aitm';
class App extends Component {
  state = {
    items : [
      {id:1, name:'zakaria' ,age:22},
      {id:2, name:'zabi' ,age:22},
       {id:3, name:'hhhhh' ,age:22}
      ]
    }
    toodelet =(id) => {
     let items = this.state.items.filter(item => {
      return item.id !== id
     });
     this.setState({items})
     
    }
    aitm = (item) =>{
      item.id = Math.random();
     let items = this.state.items;
     items.push(item);
     this.setState({items});

    }
  render(){
    return(
      <div className="App container">
          <h1 className="text-center">Todo App</h1>
          <Too items={this.state.items} toodelet={this.toodelet}/>
          <Aitm  aitm={this.aitm}/>
      </div> 
     
    );
            }
          }
export default App


