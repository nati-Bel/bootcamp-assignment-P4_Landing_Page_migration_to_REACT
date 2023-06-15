import './CardItem.css'

function CardItem ({cardImg, cardTxt}) {
    return(
            <div className='card-item-container'>
                <img className='cardImage' src={cardImg}/>
                <span className='cardText'>{cardTxt}</span>
            </div>    
    );
}

export default CardItem