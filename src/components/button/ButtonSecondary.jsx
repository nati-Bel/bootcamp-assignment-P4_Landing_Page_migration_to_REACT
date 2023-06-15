import "./buttonSecondary.css"

function SecondaryButton({btnImage,btnName}) {
    return (
      <button className="buttonSecondary">
        <img className="buttonIcon"src={btnImage} />
        {btnName}
      </button>
    );
};

export default SecondaryButton