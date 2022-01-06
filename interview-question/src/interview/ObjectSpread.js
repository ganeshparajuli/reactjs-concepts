import React from 'react'

export default function SignUpPage() {
  const [state, setState] = React.useState({ username: '', email: '', password: '' });
    
  function handleSubmit(event) {   
    event.preventDefault();
    // validateForm(state);
    // signUpUser(state);
    console.log("handleSubmit--->",state);
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setState({ ...state, [name]: value });
  }
    
  return (
    <form onSubmit={handleSubmit}>
      <input name="username" onChange={handleChange} />
      <input name="email" onChange={handleChange} />
      <input name="password" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}