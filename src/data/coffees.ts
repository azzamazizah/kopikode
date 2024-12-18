import type { Coffee } from '../types';

export const coffees: Coffee[] = [
  {
    id: 1,
    name: 'Espresso',
    price: 7000,
    description: 'Strong and concentrated coffee shot',
    image: 'assets/images/espresso.jpg',
    category: 'Hot Coffee'
  },
  {
    id: 2,
    name: 'Cappuccino',
    price: 15000,
    description: 'Espresso with steamed milk foam',
    image: 'assets/images/cappuccino.jpg',
    category: 'Hot Coffee'
  },
  {
    id: 3,
    name: 'Iced Latte',
    price: 12000,
    description: 'Espresso with cold milk and ice',
    image: 'assets/images/iced-latte.jpg',
    category: 'Cold Coffee'
  },
  {
    id: 4,
    name: 'Caramel Macchiato',
    price: 18000,
    description: 'Espresso with vanilla and caramel',
    image: 'assets/images/caramel-macchiato.jpg',
    category: 'Hot Coffee'
  },
  {
    id: 5,
    name: 'Cold Brew',
    price: 15000,
    description: 'Smooth cold-brewed coffee',
    image: 'assets/images/cold-brew.jpg',
    category: 'Cold Coffee'
  }
];