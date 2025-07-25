import { Button } from "./Button"
import logo from '../assets/CodeMy.png'
import SignInForm from "./Signinform";
import { useState } from "react";
import SignUpForm from "./Signupform";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignInFormOpen, setIsSignInFormOpen] = useState(false);
  return (
    <>
    <div className='flex flex-row justify-around border-b-black bg-gray-900 p-2 shadow-md border-b-4 border-gray-100'>
      <div className='flex items-center space-x-2'>
        <img src={logo} alt="Logo" className='h-16 w-16' />
        <h1 className='text-white text-2xl font-mono'>CodeMy</h1>
      </div>
      <nav className='flex space-x-4'>
        <Button variant='primary' size='large' label='Sign In' onClick={()=>{setIsLoggedIn(!isLoggedIn)}} />
        <Button variant='secondary' size='large' label='Sign Up' onClick={() => setIsSignInFormOpen(!isSignInFormOpen)} />
      </nav>
    </div>
      <div className='flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        {isLoggedIn && <SignInForm setIsLoggedIn={setIsLoggedIn}/>}
        {isSignInFormOpen && <SignUpForm setIsSignInFormOpen={setIsSignInFormOpen} />}
      </div>
    </>
  )
}

export default Navbar
