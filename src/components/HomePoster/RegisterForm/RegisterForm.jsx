import axios from 'axios';
import './RegisterForm.scss'
const API_KEY = 'AIzaSyAKc073qLnrxvIPpygV71_oIIps1rsZJl4'
export default function RegisterForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
      returnSecureToken: true
    }
    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, data)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return (
    <div className='RegisterForm'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id='email' />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' />
        </div>
        <div>
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  )
}
