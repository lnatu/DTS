import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Contact from 'components/Home/parts/Contact';
import Screen1 from 'components/Home/parts/Screen1';
import Screen2 from 'components/Home/parts/Screen2';
import Screen3 from 'components/Home/parts/Screen3';
import Screen4 from 'components/Home/parts/Screen4';
import Screen5 from 'components/Home/parts/Screen5';
import Screen6 from 'components/Home/parts/Screen6';
import Screen7 from 'components/Home/parts/Screen7';
import Screen8 from 'components/Home/parts/Screen8';
import Screen9 from 'components/Home/parts/Screen9';
import Screen10 from 'components/Home/parts/Screen10';

const View = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();

    tl.from('.slide-up-fade', {
      duration: 2,
      scale: 0.9,
      y: 100,
      opacity: 0,
      delay: 0.5,
      ease: 'power4.out',
      stagger: {
        amount: 0.3,
      },
    });

    tl2.from('.slide-up-skew', {
      duration: 2,
      delay: 1,
      scale: 0.9,
      y: 100,
      skewY: 20,
      opacity: 0,
      ease: 'power4.out',
      stagger: {
        amount: 5,
      },
    });
  }, []);

  return (
    <>
      <Screen1 />
      <Screen2 />
      <Screen3 />
      <Screen4 />
      <Screen5 />
      <Screen6 />
      <Screen7 />
      <Screen8 />
      <Screen9 />
      <Screen10 />
      <Contact />
    </>
  );
};

export default View;
