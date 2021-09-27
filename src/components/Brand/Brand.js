import lightlogo from "../../assets/img/lightlogo.png"
import darklogo from "../../assets/img/darklogo.png"

const LightLogo = () => {
    return (
        <img src={lightlogo} alt="dark logo" style={{"height": 25}}/>
    );
}
 
const DarkLogo = () => {
    return (
        <img src={darklogo} alt="dark logo" style={{"height": 25}}/> 
    );
}

export {
    LightLogo,
    DarkLogo
};