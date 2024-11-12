import Link from 'next/link';
import React from 'react';
import styles from '@/components/menu/Menu.module.css'

const Menu = () => {
    return (
        <div>
            <ul className={styles.menu_container}>
                <li>
                    <Link href={'/'}>Main</Link>
                </li>
                <li>
                    <Link href={'/users'}>Users</Link>
                </li>
                <li>
                    <Link href={'/posts'}>Posts</Link>
                </li>
                <li>
                    <Link href={'/comments'}>Comments</Link>
                </li>
            </ul>
        </div>
    );
};

export default Menu;