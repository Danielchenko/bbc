import React,{ useState } from "react";

export const SearchInput  = (  onChange: (arg0: string) => void ) => {
    const [inputValue, setInputValue] = useState('');

    function handleChange(event: { target: { value: React.SetStateAction<string>; }; }) {
        setInputValue(event.target.value)
    }
    function handleClick() {
        // eslint-disable-next-line no-restricted-globals
        event?.preventDefault();
        onChange(inputValue)
    }
    return (
    <>
        <form>
            <input type="text" id="search" name="search" onChange={handleChange} />
            <button type="submit" onClick={handleClick}>Ver Cartas</button>
        </form>
    </>
    )
}