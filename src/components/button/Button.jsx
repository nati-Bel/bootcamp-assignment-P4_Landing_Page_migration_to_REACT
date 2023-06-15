import './button.css'

function Button({btnName, btnImage}) {
    return (
        <button className="btn"><img src={btnImage}/>{btnName}</button>
    )
}
export default Button