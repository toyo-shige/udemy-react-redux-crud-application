import React from 'react';
import PropTypes from 'prop-types';


//function App() {
//  return (
//    <React.Fragment>
//      <label htmlFor="bar">bar</label>
//      <input type="text" onChange={() => {console.log("I am clicked! ")}} />
//    </React.Fragment>
//  );
//}

const App = ()=> {
  const profiles = [
    {name:"Taro", age:12},
    {name:"Hanako", age:16},
    {name:"aaa", age:74 }
  ];
  return(
    <div>1111
    {
      profiles.map((profile, index)=>{
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }
    </div>
  );
}

const User = (props)=> {
  return (<div>Hi! I am {props.name} and {props.age} years old !</div>);
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}


export default App;
