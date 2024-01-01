"use client"
import Image from 'next/image'
import React from 'react';
import { useRecoilState } from 'recoil';
import { currentSeasonIndexState } from '../states/recoilState';

export default function BackgroundImgChanger({ className }) {
  const backgroundImgArray = [
    '/spring.webp',
    '/summer.webp',
    '/fall.webp',
    '/winter.webp',
  ];

  const currentSeasonIndex = useRecoilState(currentSeasonIndexState)[0];
  const backgroundImage = backgroundImgArray[currentSeasonIndex];
  
  return (
    <div className={className}>
      <Image src={backgroundImage} alt="background image" layout="fill" objectFit="cover" priority />
      <div style={{ display: 'none' }}>
        {backgroundImgArray.map((src, index) => (
          index !== currentSeasonIndex && <Image key={src} src={src} alt="" layout="fill" />
        ))}
      </div>
    </div>
  )
}