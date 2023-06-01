import '../../styles/css/components/VerticalLabel.css';


function VerticalLabel ( props ) {
    

    return (
      <div className="VerticalLabel" data-style-mode={props.styleMode}>
        <div className={"VerticalLabel__text"}>{props.text}</div>
      </div>
    );
}


export default VerticalLabel;