import { StyledHeader, StyledImg, StyledText } from "./HeroStyles";
import banner from "../../assets/img/banner.png";

const HeroSection = () => {
    return (   
        <div className="cover-container d-flex w-100 h-100 p-2 mx-auto flex-column">
            <main>
              <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-transparent">
                <div className="col-md-5 p-lg-5 mx-auto  d-block">
                  <StyledHeader className="display-4 fw-normal">Synapse Marine</StyledHeader>
                  <StyledText className="lead fw-normal">Synapse takes you to the future of sailing technology. Monitor every minute adjustment with real-time load data at your fingertips.</StyledText>
                </div>
                <div>
                    {/* <StyledImg src={dashboard}/> */}
                    <StyledImg src={banner}/>
                </div>
                
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
              </div>
            </main>
        </div>  
    );
}
 
export default HeroSection;