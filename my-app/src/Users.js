import {useEffect, useState} from "react";

export const Users = () => {
  const [count, setCount] = useState(0)

  const friends = [{
    avatar: "example",
    age: 21,
    name: "Mango"
  }, {
    avatar: "example",
    age: 22,
    name: "Kivi"
  }]
 

  return (
    <div>
      This is users page
      
      <div style={{padding: '40px'}}>
        <ul>
          {friends.map(({avatar, age, name}) => (
            <li>
              <div>Avatar: {avatar}</div>
              <div>Age: {age}</div>
              <div>Name: {name}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
const Button = ({type="button", text, callback}) => {

  return (
    <button onClick={callback} type={type}>{text}</button>
  )
}

const Input = ({type="text", label, placeholder, value}) => {
  return (
    <div className="input">
      {label && <label className="input__label">{label}</label>}
      <input className="input__input" value={value} type={type} placeholder={placeholder}/>
    </div>
  )
}

