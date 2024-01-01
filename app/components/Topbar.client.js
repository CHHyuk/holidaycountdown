"use client";
import React, { useState, useEffect } from 'react';
import styles from './Topbar.module.css'
import setTheme from '../modules/SetTheme';
import { getSeasons } from '../modules/getSeasons';
import { useRecoilState } from 'recoil';
import { currentSeasonIndexState } from '../states/recoilState';

const seasons = ['Spring', 'Summer', 'Autumn', 'Winter'];
const speakers = ['🔊' , '🔈']

export default function Topbar() {
  const [currentSeasonIndex, setCurrentSeasonIndex] = useRecoilState(currentSeasonIndexState);
  const [currnetSpeakerIndex, setCurrentSpeakerIndex] = useState(0);

  useEffect(() => {
    const seasonName = getSeasons(); 
    const seasonIndex = seasons.findIndex(season => season.toLowerCase() === seasonName.toLowerCase());
    if (seasonIndex !== -1) {
      setCurrentSeasonIndex(seasonIndex); 
    }
    setTheme(seasonName); 
  }, []);

  const handleButtonClick = () => {
    const newSeasonIndex = (currentSeasonIndex + 1) % seasons.length;
    setCurrentSeasonIndex(newSeasonIndex);
    setTheme(seasons[newSeasonIndex].toLowerCase());
  };

  const handelSpeakerClick = () => {
    setCurrentSpeakerIndex((prevIndex) => (prevIndex + 1) % speakers.length);
  }
  return (
    <div className={styles.container}>
      <div className={styles.themeBtnGroup}>
        <div
          className={styles.themeBtn}
          onClick={handleButtonClick}
        >
          {seasons[currentSeasonIndex]}
        </div>
      </div>
      <div 
        className={styles.speakerIcon}
        onClick={handelSpeakerClick}
      >
        {speakers[currnetSpeakerIndex]}
      </div>
    </div>
  );
}