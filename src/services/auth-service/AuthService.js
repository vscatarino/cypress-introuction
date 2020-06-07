export default class AuthServide {
 static isAuthenticated = () => { 
  return 'isAuthenticated' === localStorage.getItem('isAuthenticated')
 }

 static basicAuth = (username, password) => {
  if (username === 'vcatarino15@gmail.com' && password === 'cypress') {
   localStorage.setItem('isAuthenticated', 'isAuthenticated')
   return Promise.resolve('Autenticado')
  } else {
  return Promise.reject('Não foi possível realizar o login')
  }
 }
}