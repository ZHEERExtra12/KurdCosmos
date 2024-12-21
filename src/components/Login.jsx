
import React, { useState } from "react";
import '../index.css'




const Login = ({updateLogin}) => {
    const [info, setInfo] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>

            
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-nato backdrop-blur-sm">
                    <div className="bg-gray-950 p-6 rounded-lg shadow-lg max-w-sm w-80 relative">
                        <h2 className="text-2xl mb-2  text-white pt-0 pl-4  font-bold ">Kurd<span className="text-yellow-500">Cosmos</span></h2>
                        <button onClick={()=>{updateLogin("")}} className="absolute  top-7 right-4">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eab308"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
                        </button>

                        <h2 className="text-right mt-9 mb-3 text-gray-400" >ئیمەیڵ</h2>

                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full h-9 rounded-lg bg-gray-800 placeholder:text-right placeholder:mr-2 placeholder:text-xs text-right text-gray-400 text-sm" placeholder="ئیمەیڵ" />

                        <h2 className="text-right mt-9 mb-3 text-gray-400">ووشەیی نهێنی</h2>
                        <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} className="w-full h-9 rounded-lg bg-gray-800 placeholder:text-right placeholder:mr-2 placeholder:text-xs text-right text-gray-400 text-sm" placeholder=" ووشەیی نهێنی" />


                        <p className="text-white text-center mt-3 text-xs">
                            <button className="text-yellow-500 hover:underline" 
                            onClick={()=>{updateLogin("reg")}} type="button">خۆتۆمارکردن </button>هەژمارت نیە ؟    
                        </p>

                        <p className="text-center text-red-400 mt-3 text-sm">{info}</p>
                        <button className="bg-yellow-500 text-white w-full py-4 mt-4 rounded-md" onClick={()=>{
                        email == "" && password == "" ? setInfo("تکایە زانیاریەکانت بنووسە") : updateLogin("")
                        //  if(email == "" && password == "") {
                        //         setInfo("تکایە زانیاریەکانت بنووسە")
                        //  }
                        //  else { updateLogin("")}
                        }}>چوونەژورەوە</button>
                    </div>
                </div>
            




        </>


    )







}

export default Login;