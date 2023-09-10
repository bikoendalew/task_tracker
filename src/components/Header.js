import React from 'react'
import Button from './Button'
const Header=({title,click,show})=>{

return (

    <header className='header'>
    <h1>{title}</h1>
   <Button color={show? 'red':'blue'} text={show?'close':'add'} onclick={click} />
    </header>
)}

export default Header