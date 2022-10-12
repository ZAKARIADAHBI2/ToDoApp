import React from "react";
import './too.css';

const Too =(props) => {
 const {items} = props;
 const {toodelet} = props;
 let length = items.length; 
 const ListItems = length ? (
 items.map(item => {
    return (
        <div key={item.id}>
           <span className="name">{item.name}</span>
           <span className="age">{item.age}</span>
           <span className="action icon" onClick={() => toodelet(item.id)}>&times;</span>         
       </div>
    )
 
                })
 ): (
    <p>ntg to be shown </p>
 )
    return(
       
        <div className="Listitems">
             <div>
            <span className="name title">name</span>
            <span className="age title">age</span>
            <span className="action title">action</span>
        </div>
            {ListItems}
        </div>
    );

}

export default Too
