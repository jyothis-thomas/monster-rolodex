import { Component } from 'react'

import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {

    render() {
        console.log('test properties', this.props);
        const monsters = this.props.monsters;
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
}
export default CardList