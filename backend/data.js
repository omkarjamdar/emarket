import bcrypt from 'bcryptjs';
const data = {
  users:[
    {
      fname:'Omkar',
      lname:'Jamdar',
      address:'44 Old,Samdoli Road Hanuman Chowk,Sangliwadi',
      mobile:8087207610,
      email:'omsjamdar193@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      
      isAdmin:true,
    },
    {
      fname:'Sameer',
      lname:'Hakke',
      address:'Holle plot,Subhashnagar,Miraj',
      mobile:8788754915,
      email:'sameerhakke10@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin:true,
    },
  ],
  products: [
    {
      
      name: 'Brinjal',
      category: 'vegetable',
      image: '/images/product-2.jpg',
      price: 120,
      countInStock: 10,
      brand: 'Brinjal',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      
      name: 'Tomato',
      category: 'vegetable',
      image: '/images/product-3.jpg',
      price: 100,
      countInStock: 20,
      brand: 'Tomato',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      
      name: 'Eggplant',
      category: 'vegetable',
      image: '/images/product-1.jpg',
      price: 220,
      countInStock: 0,
      brand: 'Eggplant',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality product',
    },
    {
      
      name: 'Onion',
      category: 'vegetable',
      image: '/images/product-4.jpg',
      price: 78,
      countInStock: 15,
      brand: 'Onion',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      
      name: 'Beet',
      category: 'vegetable',
      image: '/images/product-5.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Beet',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      
      name: 'Pudina',
      category: 'vegetable',
      image: '/images/product-6.jpg',
      price: 139,
      countInStock: 12,
      brand: 'Pudina',
      rating: 4.5,
      numReviews: 15,
      description: 'high quality product',
    },
  ],
};
export default data;