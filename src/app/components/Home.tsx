import React from 'react'
import AddToCart from './AddToCart'
// import Styles from './productCard.module.css';
import Link from 'next/link';
import Header from './header';
import Hero from './hero_category';
import Homepage from './home';
import Content1 from './home/content1';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: object;
    phone: string;
    website: string;
    company: object;
}

const ProductCard = async () => {
    const res = await fetch(
        // 'https://jsonplaceholder.typicode.com/users',{next: {revalidate: 10} }
        'https://jsonplaceholder.typicode.com/users', {cache:'no-store'}
    );
    const users: User[] = await res.json();
  return (
    <div>
        {/* <p>{new Date().toLocaleTimeString()}</p>
        <ul>
            {users.map(e => (
                <li className={"font-bold" + (Styles.card )} key={e.id}>
                    <Link href={`users/new`}>{e.username}</Link>
                </li>
            ))}
        </ul> */}
        <Header/>
        
        <div className='h-lvh'>
            <div className='container'>
                <Hero/>
            </div>
        </div>

        <div className='bg-slate-100 py-28 rounded-t-[120px] w-full'>
            <div className='container'>
                <Content1/>
            </div>
        </div>
        {/* <AddToCart/> */}
    </div>
  )
}

export default ProductCard