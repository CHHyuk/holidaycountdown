"use client"
import React, { useState, useEffect } from 'react';
import styles from './loading.module.css';

const Loading = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible('hiding');

      const hideTimer = setTimeout(() => {
        setVisible('hidden');
      }, 400);

      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }, 2500)
  }, []);

  return (
    <div className={`${styles.loadingContainer} ${visible === 'hiding' ? styles.fadingOut : visible === 'hidden' ? styles.hidden : ''}`}>
      <div className={styles.loading}></div>
      <div className={styles.loadingText}>loading</div>
    </div>
  )
}

export default Loading;