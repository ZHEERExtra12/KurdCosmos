
import React, { useState } from "react";


const Login = () => {

          const [login, setLogin] = useState(false)

          const toggleLog = () => {
                    setLogin(!login)
          }

          const [register, setRegister] = useState(false)
          const reg = () => {
                    setRegister(!register)
          }

          const [pass1 ,setPass1]= useState('')
          const [pass2 ,setPass2]= useState('')

          const [error ,setError]= useState('')

          const ee=()=>{
          if(pass1!=pass2){
                    setError('ووشەیی نهێنی وەکو یەک نیە')
          }
          if(pass1==="" && pass2===""){
                    setError("زانیاریە کەسیەکان بنووسە")
          }
         
          }

          if (register) {
                    return (<>
                              <button onClick={toggleLog}>
                                        <h1 className="md:hidden">چوونەژورەوە</h1>

                                        <h1 className="hidden md:block">

                                                  <svg width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="#fff" fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z" />
                                                  </svg>
                                        </h1>

                              </button>

                              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-nato backdrop-blur-sm">
                                        <div className="bg-gray-950 p-6 rounded-lg shadow-lg max-w-sm w-80 relative">
                                                  <h2 className="text-2xl mb-2  text-white pt-0 pl-4  font-bold ">Kurd<span className="text-yellow-500">Cosmos</span></h2>
                                                  
                                                  <button onClick={toggleLog} className="absolute  top-7 right-4 z-10"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eab308"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></button>

                                                  <h2 className="text-right mt-6 mb-2 text-gray-400">ناو</h2>
                                                  <input type="text" placeholder="ناوت" className="w-full h-9 rounded-lg bg-gray-800 placeholder:text-right placeholder:mr-2 placeholder:text-xs text-right text-gray-400 text-sm" />

                                                  <h2 className="text-right mt-6 mb-2 text-gray-400">بەروار</h2>
                                                  <input type="date" required className="w-full h-9 rounded-lg bg-gray-800 placeholder:text-right placeholder:mr-2 placeholder:text-xs text-right text-gray-400 text-sm" />

                                                  <h2 className="text-right mt-6 mb-2 text-gray-400">ئیمەیڵ</h2>
                                                  <input type="text" className="w-full h-9 rounded-lg bg-gray-800 placeholder:text-right placeholder:mr-2 placeholder:text-xs text-right text-gray-400 text-sm" placeholder="ئیمەیڵ" required/>

                                                  <h2 className="text-right mt-6 mb-2 text-gray-400">ووشەیی نهێنی</h2>
                                                  <input type="password" onChange={(e)=>setPass1(e.target.value)} value={pass1} className="w-full h-9 rounded-lg bg-gray-800 placeholder:text-right placeholder:mr-2 placeholder:text-xs text-right text-gray-400 text-sm" placeholder="  نابێ لە ٨ پیت و هێما کەمتر بێ  " />

                                                  <h2 className="text-right mt-6 mb-2 text-gray-400" id="pass"> دووبارە ووشەیی نهێنی</h2>
                                                  <input type="password" onChange={(e)=>setPass2(e.target.value)} value={pass2} className="w-full h-9 rounded-lg bg-gray-800 placeholder:text-right placeholder:mr-2 placeholder:text-xs text-right text-gray-400 text-sm" placeholder=" دوبارە وشەیی نهێنی" />
                                                  {/*we use onchange to allow the value to be change
                                                  and we use the value to 
                                                  */}
                                                  {/**
                                                   the value={the is the value that should change } 
                                                   */}

{/** we use this to display error */}            {error && (
                                                            <p className={`mt-2 text-center ${error ? 'text-red-400' : 'text-green-500'} text-sm`}>
                                                            {error}
                                                            </p>
                                                  )}

                                                  <p className="text-white text-center mt-2 text-xs"><button className="text-yellow-500 hover:underline" onClick={reg}>چوونەژورەوە </button>هەژمارت هەیە ؟ </p>
                                                  <button className="bg-yellow-500 text-white w-full py-4 mt-4 rounded-md" type="submit" onClick={ee}>تۆمارکردن</button>
                                                  
                                                 
                                                  
                                        </div>
                              </div>
                    </>)
          }



          return (
                    <>
                              <button onClick={toggleLog}>
                                        <h1 className="md:hidden">چوونەژورەوە</h1>

                                        <h1 className="hidden md:block">

                                                  <svg width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill="#fff" fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z" />
                                                  </svg>
                                        </h1>

                              </button>

                              {login && (
                                        <form>
                                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-nato backdrop-blur-sm">
                                        <div className="bg-gray-950 p-6 rounded-lg shadow-lg max-w-sm w-80 relative">
                                                  <h2 className="text-2xl mb-2  text-white pt-0 pl-4  font-bold ">Kurd<span className="text-yellow-500">Cosmos</span></h2>
                                                  <button onClick={toggleLog} className="absolute  top-7 right-4"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eab308"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></button>
                                                  <h2 className="text-right mt-9 mb-3 text-gray-400" >ئیمەیڵ</h2>

                                                  <input type="email"  className="w-full h-9 rounded-lg bg-gray-800 placeholder:text-right placeholder:mr-2 placeholder:text-xs text-right text-gray-400 text-sm" placeholder="ئیمەیڵ" required/>

                                                  <h2 className="text-right mt-9 mb-3 text-gray-400">ووشەیی نهێنی</h2>
                                                  <input type="password" className="w-full h-9 rounded-lg bg-gray-800 placeholder:text-right placeholder:mr-2 placeholder:text-xs text-right text-gray-400 text-sm" placeholder=" ووشەیی نهێنی" required/>


                                                  <p className="text-white text-center mt-3 text-xs"><button className="text-yellow-500 hover:underline" onClick={reg}>خۆتۆمارکردن </button>هەژمارت نیە ؟ </p>
                                                  <button className="bg-yellow-500 text-white w-full py-4 mt-4 rounded-md" type="submit">چوونەژورەوە</button>
                                        </div>
                              </div>
                              </form>
                              )}



                    </>
          )


}

export default Login;