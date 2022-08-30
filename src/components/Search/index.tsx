import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import  "./style.css"

const Api = 'https://www.breakingbadapi.com/api'


export const Search = ( ) => {
    const {state} = useLocation()
    
    const [cards, setCards] = useState([]);
    const [limit, setLimit] = useState(5);
    const [shuf, setShuf] = useState(1);
    const [text, setText] = useState('');
  
    //função de add + 1 card
    function moreLimit() {
      if(limit <= 7)
      setLimit(limit + 1)
    }
    
    useEffect(() => {
        setText(state as string)
        if(text) {
          fetch(`${Api}/characters?name=${text}&limit=${limit}`)
          .then((response) => response.json())
          .then((response) => {setCards(response)})
        }
    },[text, limit])

    //função de random cards
    function shuffle(o: any[] | React.SetStateAction<any>): any {
      o  = cards
      for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      setCards(o)
      setShuf(shuf + 1)
      return o;
    }

    return (
      <div className="App">
        {cards && (
            <div className='cardsContainer'>
            {cards.map((card: any) => (
              <div key={card.char_id} className='cardContainer'>
                <h4 className='cardName'>{card.name}</h4>
                <img src={card.img} className='cardImg'/>
                <p className='cardDescription'>{card.occupation[0]} <br></br> status: {card.status}</p>
                <p className='cardPoint'>{10 - card.occupation.length}</p>
              </div>
            ))} 
          </div>
      )}
        <div className='btnContainer'>
          <button onClick={moreLimit}>Mais Cartas</button>
          <button onClick={shuffle}>Embaralhar</button>
        </div>
      </div>
    )


    
}