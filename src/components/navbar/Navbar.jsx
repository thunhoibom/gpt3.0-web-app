import './navbar.css';
import { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
const Menu = () => {
    return (
        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#whatGPT3">What is GPT</a></p>
            <p><a href="#possibility">OpenAI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
        </>
    )
}
const SignUp = () => {
    return (
        <div id="gpt3__signup" >
            <form className="gpt3__signup-container scale-up-center">
                <h1 className='gradient__text'>Sign up</h1>
                <div className="gpt3__signup-container_field">
                    <p>Username</p>
                    <div>
                        <input type="text" placeholder="Choose your username"></input>
                    </div>
                    <p>Password</p>
                    <div>
                        <input type="text" placeholder="Choose your password"></input>
                    </div>
                    <p>Confirm password</p>
                    <input type="text" placeholder="Confirm password"></input>
                </div>
                <div class="checkbox-wrapper-13">
                    <input type="checkbox" id="c1-13"></input>
                    <label for="c1-13">I accept the End User License Agreement.</label>
                </div>
                <input id="su__continue" type="submit" value="Continue"></input>
            </form>
        </div>
    )
}
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleSignUp, setToggleSignUp] = useState(false);

    // useEffect(() => {
    //     document.onclick = (e) =>{
    //         if(e.target.id !== 'gpt3__signup' && !e.target.closest('.gpt3__navbar-sign')){
    //             setToggleSignUp(false);
    //         }
    //     }
    // },[]);
    useEffect(() => {
        document.onclick = (e) => {
            if (!document.getElementById("gpt3__signup").contains(e.target) && !e.target.closest('.gpt3__navbar-sign') && !e.target.closest('.gpt3__navbar-menu_container-links-sign')) {
                console.log("rendered!!");
                setToggleSignUp(false);
            }
        }
    }, []);

    // useEffect(() => {
    //     const handleClickOutside = (event) => {
    //       // Check if the click is outside the signup form or menu container
    //       if (
    //         !event.target.closest('#gpt3__signup') &&
    //         !event.target.closest('.gpt3__navbar-sign > button')
    //       ) {
    //         setToggleSignUp(false);
    //       }
    //     };

    //     // Add event listener on document mount
    //     document.addEventListener('click', handleClickOutside);

    //     // Remove event listener on component unmount
    //     return () => document.removeEventListener('click', handleClickOutside);
    //   }, [toggleSignUp]);


    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu />
                </div>
            </div>

            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button" onClick={() => setToggleSignUp(true)}>Sign Up</button>
            </div>


            {toggleSignUp && (
                <SignUp />
            )}


            <div className="gpt3__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                        <div className="gpt3__navbar-menu_container-links">
                            <Menu />
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type="button" onClick={() => setToggleSignUp(true)}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Navbar


