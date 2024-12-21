import React,{useState} from "react";
import '../index.css'



const Register=({updateLogin})=>{
          
          
          // const [register, setRegister] = useState(false)
          
          // const reg = () => {
                    
          //           setRegister(!register)
          // }

         
          const [pass1 ,setPass1]= useState('')
          const [pass2 ,setPass2]= useState('')
          
          const [error ,setError]= useState('')
             
          
          
          return(
                    <>
                              <form>
                              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-nato backdrop-blur-sm">
                                        <div className="bg-gray-950 p-6 rounded-lg shadow-lg max-w-sm w-80 relative">
                                                  <h2 className="text-2xl mb-2  text-white pt-0 pl-4  font-bold ">Kurd<span className="text-yellow-500">Cosmos</span></h2>
                                                  
                                                  <button type="button" className="absolute  top-7 right-4 z-10" onClick={()=>{updateLogin("")}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#eab308"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></button>

                                                  <h2 className="text-right mt-6 mb-2 text-gray-400">ناو</h2>
                                                  <input type="text" placeholder="ناوت" className="w-full h-9 rounded-lg bg-gray-800 placeholder:text-right placeholder:mr-2 placeholder:text-xs text-right text-gray-400 text-sm" required/>

                                                  <h2 className="text-right mt-6 mb-2 text-gray-400">بەروار</h2>
                                                  <input type="date" required className="w-full h-9 rounded-lg bg-gray-800 placeholder:text-right placeholder:mr-2 placeholder:text-xs text-right text-gray-400 text-sm" />

                                                  <h2 className="text-right mt-6 mb-2 text-gray-400">ئیمەیڵ</h2>
                                                  <input type="email" className="w-full h-9 rounded-lg bg-gray-800 placeholder:text-right placeholder:mr-2 placeholder:text-xs text-right text-gray-400 text-sm" placeholder="ئیمەیڵ" required/>

                                                  <h2 className="text-right mt-6 mb-2 text-gray-400">ووشەیی نهێنی</h2>
                                                  <input type="password" onChange={(e)=>setPass1(e.target.value)} value={pass1} className="w-full h-9 rounded-lg bg-gray-800 placeholder:text-right placeholder:mr-2 placeholder:text-xs text-right text-gray-400 text-sm" placeholder="  نابێ لە ٨ پیت و هێما کەمتر بێ  " required/>

                                                  <h2 className="text-right mt-6 mb-2 text-gray-400" id="pass"> دووبارە ووشەیی نهێنی</h2>
                                                  <input type="password" onChange={(e)=>setPass2(e.target.value)} value={pass2} className="w-full h-9 rounded-lg bg-gray-800 placeholder:text-right placeholder:mr-2 placeholder:text-xs text-right text-gray-400 text-sm" placeholder=" دوبارە وشەیی نهێنی" required/>
                                                  {/*we use onchange to allow the value to be change
                                                  and we use the value to 
                                                  */}
                                                  {/**
                                                   the value={the is the value that should change } 
                                                   */}

{/** we use this to display error */}            {error && (
                                                            <p className="mt-2 text-center text-red-400 text-sm">
                                                            {error}
                                                            </p>
                                                  )}
                                                  <p className="text-white text-center mt-3 text-xs"><button className="text-yellow-500 hover:underline" onClick={()=>{updateLogin("login")}} type="button">چوونەژورەوە </button>هەژمارت هەیە  ؟ </p>
                                                  
                                                 
                                                  <button className="bg-yellow-500 text-white w-full py-4 mt-4 rounded-md" type="button" onClick={()=>{ pass1!=pass2 ? setError("پاسوردەکەوەکویەک نیە") : ( pass1 = pass2 ? updateLogin("") : setError("زانیاریەکانت بنووسە")) }}>تۆمارکردن</button>
                                                  
                                                 
                                                  
                                        </div>
                              </div>
                        </form>
                              
                    </>
          )

}
export default Register;