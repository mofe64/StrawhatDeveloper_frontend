import '../css/card.css'
import sampleImage4 from '../assets/paulette-wooten-FMiczIq8orU-unsplash.jpg'
const Card = () => {
    return (
        <>
            <div className='card'>
                <div className='card-image'>
                    <img src={sampleImage4} alt='card'/>
                </div>
                <div className='card-body'>
                    <div className='card-meta'>
                        <p>Some Category</p>
                        <p>Some Date</p>
                    </div>
                    <div className='card-title'>
                        <h1>Some Title for this card</h1>
                    </div>
                    <div className='card-text'>
                        <p>
                            some text on the card    
                        </p>
                    </div>
                    <div className='card-btn'>
                            <button>
                                Read
                            </button>
                        </div>
                    </div>
            </div>    
        </>
    )
}

export default Card;
