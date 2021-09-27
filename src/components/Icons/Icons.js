import { BrightnessHigh, MoonStars } from 'react-bootstrap-icons';

const BrightIcon = () => {
    return ( 
        <BrightnessHigh 
            color="black"
            size={20}
            className="mt-2"
         />
     );
};

const DarkIcon = () => {
    return ( 
        <MoonStars 
            color="white"
            size={20}
            className="mt-2"
         />
     );
};
 
 
export {
  BrightIcon,
  DarkIcon,
};