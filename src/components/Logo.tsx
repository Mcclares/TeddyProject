import logo from './Logo.png';

export const Logo = () => {
    return <div style={{marginLeft: "180px", paddingTop: "20px"}}>
        <img style={{ borderRadius: "100px", width: '100px', height: '100px' }} src={logo} alt="Logo" />
        <h1 style={{color: "white"}}>RedTeddyHelp</h1>
    </div>
}

export default Logo;