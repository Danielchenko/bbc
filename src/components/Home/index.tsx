import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export const Home = () => {
    const navigate = useNavigate()
 
      const [inputValue, setInputValue] = useState('');

    function handleChange(event: { target: { value: React.SetStateAction<string>; }; }) {
        setInputValue(event.target.value)
    }
    function handleClick() {
        // eslint-disable-next-line no-restricted-globals
        event?.preventDefault();
        navigate('/search',{
        state: inputValue
        })
        
    }
    return (
    <>
        <div className='container'>
            <form>
                <input type="text" id="search" name="search" onChange={handleChange} />
                <button type="submit" onClick={handleClick}>Ver Cartas</button>
            </form>
        </div>
        
    </>
    )
    
}