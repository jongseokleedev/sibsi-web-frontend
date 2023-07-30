import React from 'react';
import s from './Footer.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
// import {
//   PUBLIC_CONTACT_EMAIL,
//   PUBLIC_DOCS_ENDPOINT,
//   PUBLIC_GITHUB_ENDPOINT,
//   PUBLIC_TWITTER_ENDPOINT
// } from '../../config/constants';

function FooterLayout() {
  const route = useRouter();
  const handleLink = async (url: string) => {
    await route.replace(url)
  }

  const handleOpenMail = () => {
    window.open(`mailto:${PUBLIC_CONTACT_EMAIL}`, '_blank');
  }

  return (
    <div className={s.container}>
      <div className={s.inner}>
        <div className={s.leftSide}>
          <div className={s.logoWrp}>
            <Image
              width={192}
              height={40}
              src={'/static/images/brandLogoLg.svg'}
              alt={'Stayking'}></Image>
          </div>
        </div>
        <div className={s.footerUl}>
          <div className={s.footWrp}>
            <div className={s.label}>
              Technology
            </div>
            <ul>
              <li onClick={() => handleLink(PUBLIC_DOCS_ENDPOINT)}>
                Document
              </li>
              <li onClick={() => handleLink(PUBLIC_GITHUB_ENDPOINT)}>
                Github
              </li>
            </ul>
          </div>
          <div className={s.footWrp}>
            <div className={s.label}>
              Community
            </div>
            <ul>
              <li onClick={handleOpenMail}>
                E-mail
              </li>
              <li onClick={() => handleLink(PUBLIC_TWITTER_ENDPOINT)}>
                Twitter
              </li>
            </ul>
          </div>
        </div>
        <div className={s.rightSide}>
          {'©'}2023 Stayking
        </div>
      </div>
      <div className={s.outerRights}>
        {'©'}2023 Stayking
      </div>
    </div>
  );
}

export default FooterLayout;
