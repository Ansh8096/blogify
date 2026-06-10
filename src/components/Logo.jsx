import React from 'react'
// import logo from '../assets/logo.png'

function Logo({width = "100px"}) {
    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62PVN-BibYo0ra1gRjl8OOCDbESMRX5Tmjg&s" 
            alt="Logo" 
            width={width}
            />
        </div>
    )
} 

export default Logo
