import './button.css'

function Button(props) {
    return (
      <button className={props.style}>
        <img src={props.btnImage} />
        {props.btnName}
      </button>
    );
}
export default Button