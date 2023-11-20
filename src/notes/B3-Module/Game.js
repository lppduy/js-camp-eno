import { Card } from './Card.js';

const card = new Card(1);

card.setSprite('./sprite.png');
card.setLabel('Card Content');

document.body.appendChild(card.element);

console.log('tesst');
