import React, { Component } from 'react';
import './styles.css';
import CartList from '../../data/defaults.json';
import ItemList from '../../data/items.json';

const DefaultItems = () => {
  return (
    <ul>
      {CartList.items.map((cartListItem) => {
        const { id, quantity } = cartListItem;
        const itemDetails = ItemList[id];
        return (
          <li>
            {itemDetails.name} is
            {` ${quantity} ${itemDetails.units}${quantity > 1 ? 's' : ''}`}
          </li>
        );
      })}
    </ul>
  );
};

class GroceryContainer extends Component {
  render() {
    return (
      <div className="grocery-container">
        <DefaultItems />
      </div>
    );
  }
}

export default GroceryContainer;
