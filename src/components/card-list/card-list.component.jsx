import Card from '../card/card.component';
import './card-list.styles.css';

//destructureing done in params since only monsters is passed.
const CardList = ({monsters}) => {
    return (
        <div className='card-list'>
            {monsters.map((monster) =>{
                return(
                    <Card monster={monster}/>
                )
            })}
        </div>
    )
}
export default CardList