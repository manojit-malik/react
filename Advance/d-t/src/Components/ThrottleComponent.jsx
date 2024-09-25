import useThrottle from "../useThrottle";
import React, {useEffect} from "react";

const ThrottleComponent = () => {

    const handleResize = useThrottle (() => {
        console.log('Window Resized');
    }, 1000)

    useEffect (() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize); 
    }, [handleResize]);

    return <div>Resize the window to see throttling in action.</div>;
    


}

export default ThrottleComponent;