import React, { useState, useEffect } from 'react';
import  './meme.css'

function Memes({ memes, randomImage  }) {
  const [randomIndex, setRandomIndex] = useState(null);
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [isAllCaps, setIsAllCaps] = useState(false);
  const [fontColor, setFontColor] = useState('white');
  const [hasTextShadow, setHasTextShadow] = useState(false);
  const [fontSize, setFontSize] = useState('');
  const [selectedFont, setSelectedFont] = useState('Arial');
  const availableFonts = ['Arial', 'Times New Roman', 'Verdana'];

  useEffect(() => {
    if (memes.length > 0) {
      const newIndex = Math.floor(Math.random() * memes.length);
      setRandomIndex(newIndex);
    }
  }, [memes]);

  const handleClick = () => {
    if (memes.length > 0) {
      const newIndex = Math.floor(Math.random() * memes.length);
      setRandomIndex(newIndex);
    }
  };

  const handleTopTextChange = (e) => {
    setTopText(e.target.value);
  };

  const handleBottomTextChange = (e) => {
    setBottomText(e.target.value);
  };

  if (memes.length === 0) {
    return <div>Downloading ....</div>;
  }

  const handleReset = () => {
    setTopText('');
    setBottomText('');
    setIsAllCaps(false);
    setFontColor('white');
    setHasTextShadow(false);
    setFontSize('');
    setSelectedFont('Arial');
    
  };

  const handleCapsToggle = () => {
    setIsAllCaps(!isAllCaps);
  };

  const handleFontChange = (e) => {
    setSelectedFont(e.target.value);
  };


  const formatText = (text) => {
    return isAllCaps ? text.toUpperCase() : text;
  };

  const handleFontColorChange = (e) => {
    setFontColor(e.target.value);
  };

  const handleTextShadowToggle = () => {
    setHasTextShadow(!hasTextShadow);
  };

  const handleFontSizeChange = (e) => {
    setFontSize(Number(e.target.value));
  };

  const meme = memes[randomIndex];
  const memeUrl = meme ? meme.url : '';
  const memeName = meme ? meme.name : '';

  return (
    <div className='container'>

<section className='image-section'>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img
          src={memeUrl}
          alt={memeName}
          style={{ width: '400px', height: '400px' }}
        />
        <p
          style={{
            position: 'absolute',
            top: 10,
            left: 10,
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px black',
            textTransform: isAllCaps ? 'uppercase' : 'none',
            color: fontColor,
            textShadow: hasTextShadow ? '2px 2px 4px black' : 'none',
            fontSize: `${fontSize}px`,
            fontFamily: selectedFont,
          }}
        >
          {topText}
        </p>
        <p
          style={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px black',
            textTransform: isAllCaps ? 'uppercase' : 'none',
            color: fontColor,
            textShadow: hasTextShadow ? '2px 2px 4px black' : 'none',
            fontSize: `${fontSize}px`,
            fontFamily: selectedFont,
          }}
        >
          {bottomText}
        </p>


      </div>
      </section>

      <section className='section-2'>
        <div className='item'>
          <button onClick={handleClick}>Flip Image</button>
          <button onClick={handleReset}>Reset</button>
        </div>

        <div className='item'>
          <label htmlFor="topText">Top Text:</label>
          <input
          type="text"
          id="topText"
          value={topText}
          onChange={handleTopTextChange}
          placeholder='Add a text' /></div>

        <div className='item'>
          <label htmlFor="bottomText">Bottom Text:</label>
          <input
          type="text"
          id="bottomText"
          value={bottomText}
          onChange={handleBottomTextChange}
          placeholder='Add a text'/></div>
      
      
        <div className='item'>
          <label htmlFor="capsToggle">All Caps:</label>
          <input
          type="checkbox"
          id="capsToggle"
          checked={isAllCaps}
          onChange={handleCapsToggle}/></div>


        <div className='item'>
          <label htmlFor="textShadowToggle">Text Shadow:</label>
          <input
          type="checkbox"
          id="textShadowToggle"
          checked={hasTextShadow}
          onChange={handleTextShadowToggle}/></div>


        <div className='item'>
          <label htmlFor="fontSelect">Font:</label>
          <select id="fontSelect" value={selectedFont} onChange={handleFontChange}>
          {availableFonts.map((font) => (
              <option key={font} value={font}>
              {font}
              </option>))}</select></div>



        <div className='item'>
          <label htmlFor="fontColor">Font Color:</label>
          <select id="fontColor" value={fontColor} onChange={handleFontColorChange}>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="yellow">Yellow</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </div>

        <div className='item'>
          <label htmlFor="fontSize">Font Size:</label>
          <input
            type="number"
            id="fontSize"
            value={fontSize}
            onChange={handleFontSizeChange}
          />
        </div>
      </section>


   

      
    </div>
  );
}

export default Memes;
