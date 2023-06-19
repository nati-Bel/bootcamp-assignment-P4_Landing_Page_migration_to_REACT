import './CardItem.css'

function CardItem (props) {
    return(
            <div className='card-item-container'>
                <img className={props.style} src={props.cardImg}/>
                <span className='cardText'>{props.cardTxt}</span>
            </div>    
    );
}

export default CardItem