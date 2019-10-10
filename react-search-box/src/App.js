import React from 'react';
import SearchBar from './components/searchbar'
import NameList  from './components/nameList'
import './App.css'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      nameList:[
        {name:'sid',age:22},
        {name:'manoj',age:26},
        {name:'abcd',age:20},
        {name:'prateek',age:24},
        {name:'google',age:22},
        {name:'web',age:30}
      ],
      tempList:[]
    }
  }
  
  componentDidMount(){
    {/* Don't mutate the  'nameList', duplicate it and apply operations on it  */}
    let newList=[...this.state.nameList];
    this.setState({
      tempList:newList
    })
  }
  


inputChange=(ev)=>{
   let filteredArray=[];
   {/*If search box input is 'nothing' then set 'nameList' data to 'tempList' */}
   if(ev.target.value===''){
     filteredArray=[...this.state.nameList]
   }else{
      let newList=[...this.state.tempList];
      filteredArray=newList.filter(item=>{
      return item.name.toLowerCase().search(
                ev.target.value.toLowerCase()) !== -1
  }) 
 }
   this.setState({
     tempList:filteredArray
   })
  
  }
  
  render(){
    return(
    <div className="main-page">
     <SearchBar change={this.inputChange}/> 
      <NameList list={this.state.tempList} />
        </div>
    )
  }
}

export default App;
