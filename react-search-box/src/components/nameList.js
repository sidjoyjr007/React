import React from 'react';

const NameList=(props)=>{
    return(
       <div className="name-list">
         {props.list.map((item,index)=>{
          return(
            <h1 key={index}>{item.name}</h1>
          )
        })}
        </div>
    )
  }

  export default NameList;