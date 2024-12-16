import React,{ useState } from 'react';
import '../index.css'
import Login from './Login';
const Nav=()=>{
          const [nav ,setNav]= useState(false)
          const toggle=()=>{
                    setNav(!nav)
          }

          const icon = nav ? (<svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#eab308"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>) :(<svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#eab308"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>)

    return(<>
        <div className="bg-gray-950 relative md:py-4 py-2">
            <a href="#"><h2 className="text-2xl mb-2 md:text-right text-white pt-2 pl-4 md:text-2xl md:pr-4 font-bold">Kurd<span className="text-yellow-500">Cosmos</span></h2></a>

            <ul className="text-right hidden md:flex ml-auto  text-yellow-500 font-nato font-semibold flex-row-reverse absolute top-4 right-60 gap-3">
                <a href=""><li className="p-3 hover:text-yellow-100 transition duration-500 ">سەرەتا</li></a>
                <a href=""><li className="p-3 hover:text-yellow-100 transition duration-500 ">ئەنیمیەکان</li></a>
                <a href=""><li className="p-3 hover:text-yellow-100 transition duration-500 ">زنجیرە ئەنیمیەکان</li></a>
                <a href=""><li className="p-3 hover:text-yellow-100 transition duration-500 ">مانگا</li></a>

            </ul>

            <h2 className='hidden md:block absolute top-6 left-5'>
                <Login />
            </h2>



            <button
                onClick={toggle}
                className="absolute top-5 right-2 md:hidden">{icon}</button>

            {nav && (<ul className="text-center md:hidden fixed w-full top-12 z-20 bg-gray-900 py-4 mt-3 text-yellow-500 font-nato font-semibold">
                <a href=""><li className="p-3">سەرەتا</li></a>
                <a href=""><li className="p-3">ئەنیمیەکان</li></a>
                <a href=""><li className="p-3">زنجیرە ئەنیمیەکان</li></a>
                <a href=""><li className="p-3">مانگا</li></a>
                <li className="p-3"><Login /></li>
            </ul>)}
        </div>
    </>)
}
export default Nav;