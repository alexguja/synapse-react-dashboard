import { FooterSection, FooterText, WrapperSection} from "./FooterStyles";
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstaIcon } from "./FooterStyles";

const Footer = () => {
  return (
    <WrapperSection className="w-100 mt-4 position-sticky footer">
      <FooterSection className="container py-5 w-100">
        <div className="row">
          <div className="col-12 col-md">
            <FooterText className="d-block mb-3"> Synapse &copy; 2021</FooterText>
            <TwitterIcon  className="mx-1"/>
            <FacebookIcon className="mx-1"/>
            <LinkedinIcon className="mx-1"/>
            <InstaIcon className="mx-1"/>
          </div>
          <FooterText className="col-6 col-md">
             <h5>Features</h5>
             <ul className="list-unstyled text-small">
                <li>Cool stuff</li>
                <li>Random feature</li>
                <li>Team feature</li>
                <li>Stuff for developers</li>
                <li>Another one</li>
                <li>Last time</li>
             </ul>
          </FooterText>
          <FooterText className="col-6 col-md">
             <h5>Resources</h5>
             <ul className="list-unstyled text-small">
                <li>Resource name</li>
                <li>Resource</li>
                <li>Another resource</li>
                <li>Final resource</li>
             </ul>
            </FooterText>
            <FooterText className="col-6 col-md">
              <h5>Resources</h5>
              <ul className="list-unstyled text-small">
              <li>Cool stuff</li>
                <li>Random feature</li>
                <li>Team feature</li>
                <li>Stuff for developers</li>
              </ul>
              </FooterText>
            <FooterText className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li>Team</li>
                <li>Locations</li>
                <li>Privacy</li>
                <li>Terms</li>
              </ul>  
          </FooterText>
        </div>
     </FooterSection>
   </WrapperSection>
  );
}
 
export default Footer;