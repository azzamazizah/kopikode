import type { Coffee } from '../types';

export const coffees: Coffee[] = [
  {
    id: 1,
    name: 'Espresso',
    price: 35000,
    description: 'Strong and concentrated coffee shot',
    image: '../public/images/espresso.jpg',
    category: 'Hot Coffee'
  },
  {
    id: 2,
    name: 'Cappuccino',
    price: 45000,
    description: 'Espresso with steamed milk foam',
    image: '../public/images/cappuccino.jpg',
    category: 'Hot Coffee'
  },
  {
    id: 3,
    name: 'Iced Latte',
    price: 42000,
    description: 'Espresso with cold milk and ice',
    image: '../public/images/iced-latte.jpg',
    category: 'Cold Coffee'
  },
  {
    id: 4,
    name: 'Caramel Macchiato',
    price: 48000,
    description: 'Espresso with vanilla and caramel',
    image: '../public/images/caramel-macchiato.jpg',
    category: 'Hot Coffee'
  },
  {
    id: 5,
    name: 'Cold Brew',
    price: 38000,
    description: 'Smooth cold-brewed coffee',
    image: '../public/images/cold-brew.jpg',
    category: 'Cold Coffee'
  }
];