import "../../styles/css/pages/projects/NoProjectsFoundCard.css";

function NoProjectsFoundCard(props) {
    return (
        <div className='NoProjectsFoundCard'>
            <h1 className='heading'>{props.heading}</h1>
            <p className='content'>{props.content}</p>
        </div>
    );
}

export default NoProjectsFoundCard;
