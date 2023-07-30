import React, { ReactNode } from 'react';
import Nav from './Nav';
import s from './Layout.module.scss';
// import Modal from '../Modal';
import { toast } from 'react-toastify';
// import Toast from '../toast/Toast';
import FooterLayout from './Footer';


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={s.container}>
      <header>
        {/*<Nav />*/}
      </header>
      <main>{children}</main>
      {/*<footer>*/}
      {/*  <FooterLayout />*/}
      {/*</footer>*/}
    </div>
  );
}
