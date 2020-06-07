import React from 'react'
import './login.css'

import AuthService from '../../services/auth-service/AuthService'

export default class Login extends React.Component{
 constructor() {
  super()
  this.state = {
    email: '',
    password: '',
    hasError:false
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
   const {history} = this.props
  if (!email || !password) {
   console.log('não é possível logar')
   return
  }

   AuthService.basicAuth(email, password)
     .then((resp) => {
       console.log(resp)
       history.push({ pathname: 'tasks' })
     })
     .catch(e => {
       console.log('credenciais inválidas: ', e)
       this.setState({hasError:true})

   })
 }

 render() {
  const {email, password, hasError} = this.state
  return(
    <div className={'login--flex-cloumn login--container'} >      
      <div className={'App-card login--card'}>
        {hasError && <span className={'login--error-text'}>Seu email ou senha está incorreto.</span>}
        
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