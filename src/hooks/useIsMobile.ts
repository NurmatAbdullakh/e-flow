import { useState, useEffect } from "react";

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile;
}