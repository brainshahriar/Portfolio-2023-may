import ReactGA from "react-ga4";

export const AnalyticsEvent = (category: string, eventName: string, label = '') => {
    ReactGA.event({
        category: category,
        action: eventName,
        label: label
    })
}
