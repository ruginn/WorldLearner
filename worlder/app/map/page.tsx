'use client';
import World from '@react-map/world';
import { useEffect, useState } from 'react';
import stateCode from './helper/states';

export default function Map() {
  if (typeof window === 'undefined') {
    return <div>hello</div>;
  }

  //   useEffect(() => {
  //     console.log(stateCode[Math.floor(Math.random() * stateCode.length)]);
  //   }, []);

  const printer = (state: string | null) => {
    console.log(state);
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //   const hinter = true;

  return (
    <div className='flex flex-col justify-center items-center w-full bg-blue-400'>
      <World
        onSelect={printer}
        size={windowWidth / 1.5}
        // hints={hinter}
        mapColor='#33b864'
        hoverColor='red'
        type='select-single'
      />
    </div>
  );
}
