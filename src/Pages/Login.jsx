import { Link } from "react-router-dom"
import logo from '../assets/Icons/logo.svg'
import x from '../assets/Icons/menu_x.svg'
import { useContext, useState } from "react"
import { ShopContext } from "../Context/ShopContext"


const Login = ({login , setStatus , type , setType , setToken}) => {

  const {account , setAccount} = useContext(ShopContext);
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const applyLogin = (e) => {
    if(email !== '' && pass !== ''){
      setToken(true)
    }
    setAccount(prev => ({...prev ,
      email: email,
      userpassword: pass
    }))
  }
  const getEmail = (e) => {
    setEmail(e.target.value)
  }
  const getPassword = (e) => {
    setPass(e.target.value)
  }
  return (
    <div style={login === true ? {display: 'flex',  flexDirection: 'column',justifyContent: 'space-between'} : {display: 'none'}}  className='Login'>
      <p className="login-type">{type === 'login' ? 'Login' : 'Sign up'} <img src={x} onClick={() =>setStatus(false)} alt="" /></p>
      <div className="login-container">
        {
          type === 'login' ?
          <form className="login-dropdown" onSubmit={applyLogin}>
            <div className="label">
              <label>Email Address *</label>
              <input type="email" placeholder="Email" required onChange={getEmail}/>
            </div>
            <div className="label">
              <label>Password *</label>
              <input type="password" placeholder="Password" required onChange={getPassword} />
            </div>
            <div className="save">
              <div className="remember">
                <input type="checkbox" className="check" />
                <p>Remember</p>
              </div>
              <Link className="forgot" to={'/help'}>Forgot Password</Link>
            </div>
              <div className="submit">
                <button><img src={logo} alt="" /> Log In</button>
              </div>
              <div className="register">
                <p>New to UnderArmour/<span onClick={() => setType('register')}>Register</span></p>
              </div>
          </form>
           :
           <form className="register-dropdown" onSubmit={applyLogin}>
            <div className="label">
              <label>Email Address *</label>
              <input type="email" placeholder="Create an Email" required onChange={getEmail}/>
            </div>
            <div className="label">
              <label>Password *</label>
              <input type="password" placeholder=" Create your Password" required onChange={getPassword} />
            </div>
            <div className="create-account">
                <button><img src={logo} alt="" />Create an Account</button>
              </div>
              <div className="signin">
                <p>Already have an account/<span onClick={() => setType('login')}>Log in</span></p>
              </div>
           </form>
        }
      </div>
    </div>
  )
}

export default Login
