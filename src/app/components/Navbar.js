import { Menu } from 'lucide-react';
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-full h-full p-6 font-bold text-sm md:text-xl'>
      <span>Logo</span>
      <ul className='flex gap-4'>
        <li>Home</li>
        <li>Products</li>
        <li>Shop</li>
        <li>Contact</li>
      </ul>
      <span><Menu/></span>
    </div>
  );
}

export default Navbar