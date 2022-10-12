import React , {Component} from "react";
import './aitm.css';

class  Aitm extends Component {
 state = {
    name : '',
    age : ''
 }
 handleChange = (e)=>{
    this.setState({
        [e.target.id] : e.target.value

    })
}
handleSubmit  = (e) => {
    e.preventDefault();
    if(e.target.name.value === ''){
        return false;

    }else{
        this.props.aitm(this.state);
        this.setState({
            name : '',
            age : ''
         })
    }
   
   
}
    render(){

        return(
             <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="name" id="name" onChange={this.handleChange} value={this.state.name}/>
                    <input type="number" placeholder="age" id="age" onChange={this.handleChange} value={this.state.age}/>
                    <input type="submit" value="Add" />
                </form>
             </div>
        )
    }

}
export default Aitm