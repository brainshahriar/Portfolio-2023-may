import {useEffect} from "react";

// @ts-ignore
import ReactGA from "react-ga4";

const trackingId = "G-QK188Y051Y";

interface propTypes {
    pageTitle ?: string
}

const GoogleAnalytics = (props: propTypes) :void => {
    const {pageTitle = 'landing page'} = props;

    useEffect(() => {
        ReactGA.initialize(trackingId);
        ReactGA.send({
            hitType: "pageview",
            page: `${window.location.pathname + window.location.search}`,
            title: pageTitle
        });
    }, [pageTitle]);

    return;
};

export default GoogleAnalytics;
