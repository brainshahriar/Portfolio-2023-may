import Typewriter from 'typewriter-effect';

import './typewritter.scss';

const Typewritter = () => {
    return (
        <div className={'l-typewritter'}>
            <div className="l-typewritter__first">
                <pre className={'l-typewritter__first__code'}>
                   <Typewriter
                       onInit={(typewriter) => {
                           typewriter
                               .changeDelay(20)
                               .typeString('<span style="color:#cc7832">let </span>')
                               .typeString('<span style="color:#a9b7c6">developer = {<br/></span>')
                               .pauseFor(200)
                               .typeString('<span style="color:#9876aa">    name</span>')
                               .typeString('<span style="color:#a9b7b6">: </span>')
                               .typeString('<span style="color:#698651">\'Zayed Hassan\'</span>')
                               .typeString('<span style="color:#cc7832">,</span><br/>')
                               .pauseFor(200)
                               .typeString('<span style="color:#9876aa">    type</span>')
                               .typeString('<span style="color:#a9b7b6">: </span>')
                               .typeString('<span style="color:#698651">\'Web Developer\'</span>')
                               .typeString('<span style="color:#cc7832">,</span><br/>')
                               .pauseFor(200)
                               .typeString('<span style="color:#9876aa">    location</span>')
                               .typeString('<span style="color:#a9b7b6">: </span>')
                               .typeString('<span style="color:#698651">\'Dhaka, Bangladesh\'</span>')
                               .typeString('<span style="color:#cc7832">,</span><br/>')
                               .typeString('<span style="color:#9876aa">    properties</span>')
                               .changeDelay(10)
                               .typeString('<span style="color:#a9b7b6">: </span>')
                               .typeString('<span style="color:#a9b7c6">[</span>')
                               .typeString('<span style="color:#698651">\'PHP-Laravel\'</span>')
                               .typeString('<span style="color:#cc7832">,</span><br/>')
                               .typeString('<span style="color:#698651">                 \'MySQL\'</span>')
                               .typeString('<span style="color:#cc7832">,</span><br/>')
                               .typeString('<span style="color:#698651">                 \'Javascript\'</span>')
                               .typeString('<span style="color:#a9b7c6">]</span><br/>')
                               .typeString('<span style="color:#a9b7c6">}</span>')
                               .typeString('<span style="color:#cc7832">;</span>')
                               .start();
                       }}
                   />
                </pre>
            </div>
            <div className="l-typewritter__second">
                <h2 className={'l-typewritter__second__title'}>Web Developer</h2>
                <p className={'l-typewritter__second__subtitle'}>
                    With a focus on building beautiful, performant and responsive websites
                </p>
            </div>
        </div>
    );
};

export default Typewritter;