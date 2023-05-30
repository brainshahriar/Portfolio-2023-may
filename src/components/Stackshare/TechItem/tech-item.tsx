import "./tech-item.scss";

interface propTypes {
    name ?: string,
    logoUrl ?: string
}

const TechItem = (props: propTypes) => {
    const {name, logoUrl} = props;

    return (
        <div className={'a-tech-item'}>
            <img src={logoUrl} alt={'tech stack logo'}/>
            <h3 className={'a-tech-item__title'}>{name}</h3>
        </div>
    );
};

export default TechItem;