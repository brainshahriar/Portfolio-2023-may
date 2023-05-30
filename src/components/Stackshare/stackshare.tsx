import './stackshare.scss';
import {useState} from "react";

import TechItem from "./TechItem/tech-item";
import {AnalyticsEvent} from "src/common/utils";

const Stackshare = () => {
    const [selectedTech, setSelectedTech] = useState('backend');

    const handleTechChange = (tech: string) => {
        setSelectedTech(tech);

        // send event to analytics
        // AnalyticsEvent('stackshare', 'stack_checked', tech);
        AnalyticsEvent('stackshare', 'stack_checked', tech);
    }

    return (
        <div className={'l-stackshare'} id="technologies">
            <h2 className={'l-stackshare__title'}>#Technologies</h2>
            <div className={'l-stackshare__content noselect'}>
                <div className={'l-stackshare__content__header'}>
                    <div className={`l-stackshare__item ${selectedTech === 'frontend' ? 'l-stackshare__selected' : ''}`}
                         onClick={() => handleTechChange('frontend')}
                    >
                        Frontend
                    </div>
                    <div
                        onClick={() => handleTechChange('backend')}
                        className={`l-stackshare__item ${selectedTech === 'backend' ? 'l-stackshare__selected' : ''}`}>Back-end
                    </div>
                    <div
                        onClick={() => handleTechChange('devops')}
                        className={`l-stackshare__item ${selectedTech === 'devops' ? 'l-stackshare__selected' : ''}`}>DevOps
                    </div>
                    <div
                        onClick={() => handleTechChange('utilities')}
                        className={`l-stackshare__item ${selectedTech === 'utilities' ? 'l-stackshare__selected' : ''}`}>Utilities
                    </div>
                </div>
                {selectedTech === 'frontend' &&
                    <div className={'l-stackshare__content__body l-stackshare__frontend'}>
                        <TechItem name={"JavaScript"}
                                  logoUrl={"https://img.stackshare.io/service/1209/javascript.jpeg"}/>
                        <TechItem name={"ReactJS"} logoUrl={"https://img.stackshare.io/service/1020/OYIaJ1KK.png"}/>
                        <TechItem name={"HTML5"} logoUrl={"https://img.stackshare.io/service/2538/kEpgHiC9.png"}/>
                        <TechItem name={"CSS3"} logoUrl={"https://img.stackshare.io/service/6727/css.png"}/>
                        <TechItem name={"SASS"} logoUrl={"https://img.stackshare.io/service/1171/jCR2zNJV.png"}/>
                        <TechItem name={"Markdown"} logoUrl={"https://img.stackshare.io/service/1147/markdown.png"}/>
                        <TechItem name={"JQuery"} logoUrl={"https://img.stackshare.io/service/1021/lxEKmMnB_400x400.jpg"}/>
                        <TechItem name={"Redux"} logoUrl={"https://img.stackshare.io/service/4074/13142323.png"}/>
                        <TechItem name={"ES6"} logoUrl={"https://img.stackshare.io/service/4109/16407404782_8b9c57eab3.jpg"}/>
                    </div>
                }
                {selectedTech === 'backend' &&
                    <div className={' l-stackshare__content__body l-stackshare__backend'}>
                        <TechItem name={"OO PHP"}
                                  logoUrl={"https://img.stackshare.io/service/991/hwUcGZ41_400x400.jpg"}/>
                        <TechItem name={"Laravel"} logoUrl={"https://img.stackshare.io/service/992/AcA2LnWL_400x400.jpg"}/>
                        <TechItem name={"Postman"} logoUrl={"https://img.stackshare.io/service/1336/xWMRvm_5_400x400.png"}/>
                        <TechItem name={"MySQL"} logoUrl={"https://img.stackshare.io/service/1025/logo-mysql-170x170.png"}/>
                        <TechItem name={"Nginx"} logoUrl={"https://img.stackshare.io/service/1052/YMxUfyWf.png"}/>
                        <TechItem name={"Python"} logoUrl={"https://img.stackshare.io/service/993/pUBY5pVj.png"}/>
                        <TechItem name={"Django"} logoUrl={"https://img.stackshare.io/service/994/4aGjtNQv.png"}/>
                    </div>
                }

                {selectedTech === 'devops' &&
                    <div className={'l-stackshare__content__body l-stackshare__devops'}>
                        <TechItem name={"GitHub"} logoUrl={"https://img.stackshare.io/service/27/default_869c34d29acc794d60ecdd5d2b5bfc042a80a4ec.jpg"}/>
                        <TechItem name={"PhpStorm"} logoUrl={"https://img.stackshare.io/service/1452/icon_PhpStorm.png"}/>
                        <TechItem name={"Cpanel"} logoUrl={"https://img.stackshare.io/service/3079/Dpfp-1vu_400x400.jpg"}/>
                        <TechItem name={"AWS S3"} logoUrl={"https://img.stackshare.io/service/25/amazon-s3.png"}/>
                        <TechItem name={"AWS EC2"} logoUrl={"https://img.stackshare.io/service/18/amazon-ec2.png"}/>
                        <TechItem name={"AWS SQS"} logoUrl={"https://img.stackshare.io/service/395/amazon-sqs.png"}/>
                        <TechItem name={"AWS Cloudfront"} logoUrl={"https://img.stackshare.io/service/13/amazon-cloudfront.png"}/>
                        <TechItem name={"Linux"} logoUrl={"https://img.stackshare.io/service/10483/linux.png"}/>
                    </div>
                }
                {selectedTech === 'utilities' &&
                    <div className={'l-stackshare__content__body l-stackshare__utilities'}>
                        <TechItem name={"Docker"} logoUrl={"https://img.stackshare.io/service/586/n4u37v9t_400x400.png"}/>
                        <TechItem name={"Jira"} logoUrl={"https://img.stackshare.io/service/154/default_53605d3093005bd7853e04a258c0d4746e803e29.jpg"}/>
                        <TechItem name={"StackOverflow"} logoUrl={"https://img.stackshare.io/service/1927/so-icon.png"}/>
                        <TechItem name={"Slack"} logoUrl={"https://img.stackshare.io/service/675/RNiSRYOF_400x400.jpg"}/>
                        <TechItem name={"Redmine"} logoUrl={"https://img.stackshare.io/service/1186/redmine-logo-twitter_400x400.png"}/>
                    </div>
                }
            </div>
            <div className={'l-stackshare__content__footer'}>
                <div>Complete list on <a href="https://stackshare.io/z4yed/my-stack" target={"_blank"} rel={'noreferrer'}>stackshare</a></div>
            </div>
        </div>
    );
};

export default Stackshare;