import React,{ useState } from 'react';
import '../index.css'
import Login from './Login';



const Nav=({updateLogin})=>{
          const [nav ,setNav]= useState(false)
        

const [height, setHeight] = useState(0)
          const icon = nav ? (<svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#eab308"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>) : (<svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#eab308"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>)

    return(<>
        <div className="bg-gray-950 relative md:py-4 py-2">
            <a href="#"><h2 className="text-2xl mb-2 md:text-right text-white pt-2 pl-4 md:text-2xl md:pr-4 font-bold">Kurd<span className="text-yellow-500">Cosmos</span></h2></a>

            <ul className="text-right hidden md:flex ml-auto  text-yellow-500 font-nato font-semibold
             flex-row-reverse absolute top-4 right-60 gap-3">

                <a href=""><li className="p-3 hover:text-yellow-100 transition duration-500 ">سەرەتا</li></a>
                <a href=""><li className="p-3 hover:text-yellow-100 transition duration-500 ">ئەنیمیەکان</li></a>
                <a href=""><li className="p-3 hover:text-yellow-100 transition duration-500 ">زنجیرە ئەنیمیەکان</li></a>
                <a href=""><li className="p-3 hover:text-yellow-100 transition duration-500 ">مانگا</li></a>

            </ul>

            
            <button onClick={()=>{updateLogin("login")}}  className='absolute top-3 left-5'>
                    

                    <h1 className="hidden md:block p-3">
                        <svg width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#fff" fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z" />
                        </svg>
                    </h1>

            </button>

            <button className="absolute top-5 right-2 md:hidden" onClick={()=>{
                if (height == 500) setHeight(0);
                else setHeight(500);
                setNav(!nav);
                }}>
                {icon}
            </button>

            

            {true && (<ul style={{maxHeight:height, overflow:'hidden'}} 
                className="courser-pointer text-center md:hidden transition-all duration-700
                fixed w-full top-12 z-20 bg-gray-900 py-0 mt-3 
                text-yellow-500 font-nato font-semibold ">
                <a href=""><li className="p-3">سەرەتا</li></a>
                <a href=""><li className="p-3">ئەنیمیەکان</li></a>
                <a href=""><li className="p-3">زنجیرە ئەنیمیەکان</li></a>
                <a href=""><li className="p-3">مانگا</li></a>
                <li className="p-3 cursor-pointer" onClick={()=>{updateLogin("login")}}>
                    <h1 className="md:hidden">چوونەژورەوە</h1>
                    </li>
            </ul>)}
        
        </div>
    </>)
}
export default Nav;