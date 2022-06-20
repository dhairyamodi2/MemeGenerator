import React from 'react'
import memesData from './memesData'


const Meme = () => {
  // How will you update your UI when something is clicked and value is change. 
  /*
  For example, you need to change src of image after every click. You rendered it first. Like this
  <img src={img-link}/>
  And now you change the value of img-link. What will happen?? Though that value will be changed. But the above line will be implemeneted only once.
  So UI won't be updated.
  How to do update UI?
  There is called state in react. It is value inside a component that react remembers in it's render, re-render cycle. Don't confuse it with props.
  */
  // const [img_link, setLink] = React.useState("this is image link"); //this is going to be an array having two values. one is the string value passed inside useState another is function

  // setLink("safasf"); //whatever is passed inside, the img_link value will be changed to this.
  /*
  THEN WHAT IS THE DIFFERENCE BETWEEN CHANGING IT NORMALLY AND CHANGING USING STATE'S FUNCTION?
  WHEN WE DO IT VIA FUNCTION, THEN COMPONENT IS RE-RENDERED WITH UPDATED VALUE, HOWEVER IN NORMAL CASE, IT WOULDN'T UPDATE.

  WHILE DOING IT WITH FUNCTION. MAKE SURE,THAT YOU DO IT WHEN EVENT HAPPENS, OTHERWISE YOUR APP WILL CRASH

  */
  const [imgLink, setLink] = React.useState("no-img");
  const generateRandomMeme = () => {
    const memesArray = memesData.data.memes;
    let randomNumber = Math.floor(Math.random() * 100);
    let url = (memesArray[randomNumber].url);
    setLink(url);

    // best practice is to use callback function here. Which takes old values as input and returns new value

    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */ 
  }
  return (
    <div className='meme-section'>
      <div className='meme-form'>
        <div className='input-fields'>
          <input type="text" placeholder='Top' />
          <input type="text" placeholder='Bottom' />
        </div>
        <button onClick={generateRandomMeme}>Get a new Meme image</button>
      </div>
      <div className='img-section'>
        <img src={imgLink} alt="" />
      </div>
    </div>
  )
}

export default Meme