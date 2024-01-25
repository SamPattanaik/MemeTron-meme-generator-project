import Image from './images/Meme-logo.png'
function Header(){
    return(
        <header className="header">
            <img src={Image} alt='meme' className='header-image'/>
            <h2 className='header-title'>Meme Generator</h2> 
        </header>

    )
}
export default Header