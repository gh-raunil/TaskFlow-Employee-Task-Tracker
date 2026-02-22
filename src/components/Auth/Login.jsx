import React, { useState } from "react";

const Login = ({handleLogin}) => {  

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} action="" className="flex flex-col items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="border-2 border-emerald-600 rounded-full outline-none bg-transparent placeholder:text-gray-400 text-xl px-5 py-3 mt-3"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
          />
          <input
            type="password"
            placeholder="Enter your password"
            required
            className="border-2 border-emerald-600 rounded-full outline-none bg-transparent placeholder:text-gray-400 text-xl px-5 py-3 mt-3"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <button className="text-white border-none bg-emerald-600 rounded-full outline-none placeholder:text-white text-xl px-5 py-3 mt-5">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;