import "./contact.scss";
import {
    GitHubIcon,
    LinkedInIcon,
    FacebookIcon,
} from "../../assets/icons/index.js";

const Contact = () => {
    return (
        <div className="l-contact" id="contact">
            <div className="l-contact__content">
                <h2 className="l-contact__content__name">#Contact</h2>
                <div className="l-contact__content__icons">
                    <a href="https://github.com/z4yed" target={"_blank"} rel="noreferrer">
                        <img src={GitHubIcon} alt=""/>
                    </a>
                    <a href="https://rb.gy/jcxtli" target={"_blank"} rel="noreferrer">
                        <img src={LinkedInIcon} alt=""/>
                    </a>
                    <a href="https://facebook.com/cs.zayed" target={"_blank"} rel="noreferrer">
                        <img src={FacebookIcon} alt=""/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
