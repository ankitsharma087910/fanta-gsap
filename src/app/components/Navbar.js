import { Menu } from 'lucide-react';
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex cursor-pointer text-white items-center justify-between w-full h-full p-6 font-bold text-sm md:text-2xl'>
      <span>Logo</span>
      <ul className='flex gap-8'>
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