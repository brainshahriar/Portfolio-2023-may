import {useEffect, useState} from "react";
import {AiOutlineBars} from 'react-icons/ai';
import useWindowDimensions from '../../hooks/useWindowDimenstions';
import "./navbar.scss";

function Navbar() {
    const [showNavItems, setShowNavItems] = useState(false);
    const {width} = useWindowDimensions();

    const [deviceIsMobile, setDeviceIsMobile] = useState(false);

    useEffect(() => {
        if (width <= 475) {
            setDeviceIsMobile(true);
        } else {
            setDeviceIsMobile(false);
            setShowNavItems(true);
        }
    }, [width])

    const handleMobileNav = () => {
        setShowNavItems(!showNavItems);
    }

    const hideMobileNav = () => {
        if (deviceIsMobile) {
            setShowNavItems(false);
        }
    }

    return (
        <div className="l-navbar">
            <div className="l-navbar__left">
                <a href="/">ZΛYΣD</a>
            </div>
            <div className="l-navbar__right">
                {showNavItems && (
                    <ul>
                        <li onClick={hideMobileNav}>
                            <a href="#about">About</a>
                        </li>
                        <li onClick={hideMobileNav}>
                            <a href="#technologies">Technologies</a>
                        </li>
                        <li onClick={hideMobileNav}>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                )}
                <div className={'l-navbar__right__bars'} onClick={handleMobileNav}>
                    <AiOutlineBars/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
