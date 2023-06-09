import React, { useState } from 'react'
import "./Navbar.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Navbar = (isLogged) => {
    const [input, setInput] = useState("")
    console.log(isLogged)
    const navigate = useNavigate()
   
    const handleLogout = async (e) => {
        e.preventDefault()
        try{
            const res = await axios.get('http://localhost:4444/auth/logout')
            console.log(res.data)
            navigate('/login')
        } catch(e){
            console.log(e)
        }
    }

  return (
    <nav>
        <div className="wrapper">
            <div className='logo-container'>
                <a href="/">TalkWire</a>
            </div>
            <div className='search-container-btn'>
                <span className="material-symbols-outlined">search</span>
            </div>
            <div className='search-container'>
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <span className="material-symbols-outlined">search</span>
            </div>
            <div className='options-hamburger-btn'>
                <span class="material-symbols-outlined">menu</span>
            </div>
            <div className='options-container'>
                <div>
                    <a>Lorem ipsum</a>
                </div>
                <div>
                    {
                        isLogged
                        ?
                            <a onClick={(e) => handleLogout(e)}>Log out</a>
                        : 
                            <a href='/login'>Log in</a>

                    }
                </div>
            </div>
        </div>
        {
            input !== "" && (
                <div className="results">
                    <div className="result">
                        <img src="https://picsum.photos/200/300"/>
                        <a href='search'>Jhon doe</a>
                    </div>
                                        <div className="result">
                        <img src="https://picsum.photos/200/300"/>
                        <a href='search'>Jhon doe</a>
                    </div>
                </div>
            )
        }
    </nav>
  )
}

export default Navbar