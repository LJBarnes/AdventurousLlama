import React, {useState} from "react";
import "./style.css";

const Login =(props)=>  {
  // Setting the component's initial state
//   state = {
//     userName: "",
//     email: "",
//     password: ""
//   };
  const [userName, setUserName] = useState('');
  const [email, setEmail] =useState('');
  const [password, setPassword] = useState('');
  const handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    // const name = event.target.name;

    
      value = value.substring(0, 15);
        setPassword(value)
    // Updating the input's state
  
  };

  const handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!userName || !email) {
      alert("Fill out your username and email!");
    } else if (password.length < 6) {
      alert(
        `Choose a more secure password ${userName}`
      );
    }
    setUserName("")
    setEmail("")
    setPassword("")
  };

 
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {userName}
        </p>
        <form className="form">
          <input
            value={userName}
            name="userName"
            onChange={event=>setUserName(event.target.value)}
            type="text"
            placeholder="User Name"
          />
          <input
            value={email}
            name="email"
            onChange={event=>setEmail(event.target.value)}
            type="text"
            placeholder="email"
          />
          <input
            value={password}
            name="password"
            onChange={event=>handleInputChange(event)}
            type="password"
            placeholder="Password"
          />
          <button onClick={event=>handleFormSubmit(event)}>Submit</button>
        </form>
      </div>
    );
  }


export default Login;