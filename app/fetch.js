import React, { useEffect, useState } from 'react';
//import Memes from './memeComponents/meme';
import Search from './memeComponents/search';

export default function FetchMemes() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    async function fetchMemes() {
      try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const data = await response.json();
        const memesData = data.data.memes;
        setMemes(memesData);
      } catch (error) {
        setError('Error fetching memes');
      }
    }

    fetchMemes();
  }, []);

  return <div>   <Search memes={memes}/>
  </div>;
}


//working

