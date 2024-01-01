import React from 'react';
import styles from './page.module.css'
import Topbar from './components/Topbar.client'
import Loading from './components/Loading.client'
import BackgroundImgChanger from './modules/backgroundImgChanger';

export default function Page() {
  const titleTop = "He's waiting for".split(' ').map((word, index) => (
    <React.Fragment key={index}>
      {word.split('').map((char, charIndex) => (
        <span key={charIndex} className={styles.char}>{char}</span>
      ))}
      {index < word.length - 1 && ' '}
    </React.Fragment>
  ));

  const titleBtm = "HoLidays!".split(' ').map((word, index) => (
    <React.Fragment key={index}>
      {word.split('').map((char, charIndex) => (
        <span key={charIndex} className={styles.char}>{char}</span>
      ))}
      {index < word.length - 1 && ' '}
    </React.Fragment>
  ));

  return (
    <div className={styles.container}>
      <BackgroundImgChanger className={styles.BackgroundImg} />
      <Loading />
      <Topbar />
      <div className={styles.titleBox}>
        <div className={styles.titleTop}>{titleTop}</div>
        <div className={styles.titleBtm}>{titleBtm}</div>
      </div>
    </div>
  );
}