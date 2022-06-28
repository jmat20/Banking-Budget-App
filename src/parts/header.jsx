import logo from './placeholder.png';

let HeaderComponent = () => {
    return (
        <div className='header'>
            <div>
            <img src={logo} className='header-logo' alt='logo' />
            <span className='header-text'>PLACEHOLDER BANK</span> 
            </div>
            <button type='button' className='header-button'>Log-Out</button>
        </div>
    )
}

export default HeaderComponent