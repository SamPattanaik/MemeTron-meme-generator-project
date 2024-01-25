import { useState } from "react"
import MemeData from "./MemeData"
function Meme(){
    const [meme, setMeme]=useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    }) 
    function getMemeImage(){
        const memesArray= MemeData.data.memes
        const randomNumber=Math.floor(Math.random()*memesArray.length)
        const url=memesArray[randomNumber].url
        setMeme(prevMeme => (
            {
                ...prevMeme,
                randomImage: url
            }
        )) 
    }
    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]: value
        }))
    }
    return(
        <main>
            
            <div className="form">
                <input type="text" 
                placeholder="Top text" 
                className="form-input"
                name="topText"
                onChange={handleChange}
                value={meme.topText}
                />

                <input type="text" 
                placeholder="Bottom text" 
                className="form-input"
                name="bottomText"
                onChange={handleChange}
                value={meme.bottomText}
                />

                <button onClick={getMemeImage} className="form-button">Get a new Meme Image 🖼</button>
            </div><br/>
            
                <img src={meme.randomImage} alt="" className="meme-image"/>
                <h2 className="meme-top-text">{meme.topText}</h2>
                <h2 className="meme-bottom-text">{meme.bottomText}</h2>
                
            
        </main>
    )
}
export default Meme