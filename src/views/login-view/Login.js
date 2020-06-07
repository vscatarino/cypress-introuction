import React from 'react'
import './login.css'

export default class Login extends React.Component{
 constructor() {
  super()
  this.state = {
   email: '',
   password:''
  }
 }

 changeInputValue = (event) => {
  const target = event.target  
  this.setState({
   ...this.state,
   [target.name]:target.value
  })
 }

 login = () => {
  const { email, password } = this.state
  if (!email || !password) {
   console.log('não é possível logar')
   return
  }

  console.log('executa o login')

 }

 render() {
  const {email, password} = this.state
  return(
   <div className={'login--flex-cloumn login--container'} >
    <div className={'App-card login--card'}>
     <div className={'login--flex-cloumn login--input'}>
      <label htmlFor="email">Email</label>
      <input name="email" placeholder="Email" value={email} onChange={(e) => this.changeInputValue(e)}/>
     </div>
     <div className={'login--flex-cloumn login--input'}>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => this.changeInputValue(e)} />
     </div>
     <button className={'login--button'} onClick={() => this.login()}>Entar</button>
    </div>    
   </div>
  )}
} 