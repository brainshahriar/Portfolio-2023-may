import './about.scss';
// @ts-ignore
import MyImage from '../../assets/images/myself.JPEG';

const About = () => {
    return (
        <div className={'l-about'} id="about">
            <h2 className={'l-about__title'}>#About</h2>
            <div className={'l-about__content'}>
                <div className={'l-about__content__description'}>
                    <h3>Hello! I'm Zayed Hassan</h3>
                    <p>A web developer based in Dhaka, specializing in
                        <span> building exceptional websites for over 2.5
                        years</span>.
                        I am proficient in creating responsive and user-friendly interfaces, ensuring
                        optimal
                        functionality across various devices.
                        Combining my technical skills, creativity, and attention to detail, I am well-equipped to
                        contribute to web development projects and deliver high-quality results.
                    </p>
                </div>
                <div className={'l-about__content__gallery'}>
                    <img src={MyImage} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default About;