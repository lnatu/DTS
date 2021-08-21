import { useEffect, useState, useRef } from 'react';
// import { TweenLite, Power3, TweenMax } from 'gsap';
// import hoverEffect from 'hover-effect';
import { FullPage } from 'styles/layouts';
import {
  BlockText,
  Container,
  Flex,
  Stack,
  StyledImage,
} from 'styles/components/Layouts';
import { Typo } from 'styles/components/Typo';
import { Box, Line } from 'styles/components/Shape';
import classes from 'components/Home/styles/Home.module.css';

const View = () => {
  let imageList = useRef(null);
  let revealImg = useRef(null);
  let testimonialList = useRef(null);
  const [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false,
  });
  const imageWidth = 0;

  useEffect(() => {
    // TweenLite.to(testimonialList.children[0], 0, {
    //   opacity: 1,
    // });
    // console.log(imageList.children[0]);
    // TweenLite.to(imageList.children[0], 0, {
    //   opacity: 1,
    // });
    // test();
    // TweenLite.to(revealImg.current, 1, {
    //   // x: -imageWidth * multiplied,
    //   x: '100%',
    //   ease: Power3.easeOut,
    // });
    // new hoverEffect({
    //   parent: document.querySelector('.test'),
    //   intensity: 0.2,
    //   image1: '/static/images/icons/triangle-right.svg',
    //   image2: '/static/images/icons/triangle-right.svg',
    //   displacementImage: '/static/images/icons/triangle-right.svg',
    // });
  }, []);

  //Image transition
  // const slideLeft = (index, duration, multiplied = 1) => {
  //   console.log(imageList);
  //   console.log(document.querySelector(classes['reveal-img']));
  //   TweenLite.to(revealImg.current, duration, {
  //     // x: -imageWidth * multiplied,
  //     x: '100%',
  //     ease: Power3.easeOut,
  //   });
  // };

  // const slideRight = (index, duration, multiplied = 1) => {
  //   TweenLite.to(imageList.children[index], duration, {
  //     // x: imageWidth * multiplied,
  //     width: '100%',
  //     ease: Power3.easeOut,
  //   });
  // };

  // const scale = (index, duration) => {
  //   TweenLite.from(imageList.children[index], duration, {
  //     scale: 1,
  //     ease: Power3.easeOut,
  //   });
  // };

  // //Content transition

  // const fadeOut = (index, duration) => {
  //   // TweenLite.to(testimonialList.children[index], duration, {
  //   //   opacity: 0,
  //   // });
  // };

  // const fadeIn = (index, duration) => {
  //   // TweenLite.to(testimonialList.children[index], duration, {
  //   //   opacity: 1,
  //   //   delay: 1,
  //   // });
  // };

  // const test = () => {
  //   TweenLite.to(revealImg.current, 2, { x: '100%' });
  // };

  const nextSlide = () => {
    if (imageList.children[0].classList.contains(classes.active)) {
      // setState({ isActive1: false, isActive2: true });
      // //Image transition
      // slideLeft(0, 1);
      // // slideLeft(1, 1);
      // // scale(1, 1);
      // // slideLeft(2, 1);
      // // slideLeft(2, 0);
      // // fadeOut(0, 1);
      // // fadeIn(1, 1);
    } else if (imageList.children[1].classList.contains(classes.active)) {
      // setState({ isActive2: false, isActive3: true });
      // //Image transition
      // slideRight(0, 1);
      // slideLeft(1, 1, 2);
      // slideLeft(2, 1, 2);
      // scale(2, 1);
      // //content transition
      // fadeOut(1, 1);
      // fadeIn(2, 1);
    } else if (imageList.children[2].classList.contains(classes.active)) {
      // setState({ isActive1: true, isActive3: false });
      // //Image transition
      // slideLeft(2, 1, 3);
      // slideLeft(0, 1, 0);
      // slideLeft(1, 0, 0);
      // scale(0, 1);
      // //content transition
      // fadeOut(2, 1);
      // fadeIn(0, 1);
    }
  };

  // const prevSlide = () => {
  //   if (imageList.children[0].classList.contains('active')) {
  //     setState({ isActive1: false, isActive3: true });
  //     //Image transition
  //     slideLeft(2, 0, 3);
  //     slideLeft(2, 1, 2);
  //     scale(2, 1);
  //     slideRight(0, 1);
  //     slideRight(1, 1);
  //     //content transtion
  //     fadeOut(0, 1);
  //     fadeIn(2, 1);
  //   } else if (imageList.children[1].classList.contains('active')) {
  //     setState({ isActive2: false, isActive1: true });
  //     //Image transition
  //     slideLeft(0, 0);
  //     slideRight(0, 1, 0);
  //     slideRight(1, 1, 0);
  //     slideRight(2, 1, 2);
  //     scale(0, 1);
  //     //content transtion
  //     fadeOut(1, 1);
  //     fadeIn(0, 1);
  //   } else if (imageList.children[2].classList.contains('active')) {
  //     setState({ isActive2: true, isActive3: false });
  //     slideLeft(2, 1);
  //     slideLeft(1, 0, 2);
  //     slideLeft(1, 1);
  //     scale(1, 1);
  //     //content transtion
  //     fadeOut(2, 1);
  //     fadeIn(1, 1);
  //   }
  // };

  return (
    <FullPage>
      <Stack top="50%" right={100} level={5}>
        <StyledImage
          src="/static/images/icons/triangle-right.svg"
          onClick={nextSlide}
          style={{ cursor: 'pointer' }}
        />
      </Stack>

      <Flex
        bgColor="#000"
        items="center"
        content="center"
        width="100%"
        height="100%"
        ref={(el) => (imageList = el)}
      >
        <Box
          className={
            state.isActive1
              ? classes['feedback-item'] + ` ${classes.active}`
              : classes['feedback-item']
          }
          width="100%"
        >
          <Box other={{ position: 'relative' }}>
            <Typo align="center">
              <StyledImage
                className="test"
                src="/static/images/slider/slider-1.png"
              />
            </Typo>
            {/* 
            <Stack
              className={classes['reveal-img']}
              width="100%"
              height="100%"
              bgColor="#000"
              top={0}
              left={0}
              level={4}
              ref={revealImg}
            /> */}
          </Box>

          <Stack top="40%" left="17%" level={4}>
            <Typo as="h2" color="#fff" fontSize="7.2rem" lineHeight="8.6rem">
              <Typo as="span" color="warning" fontWeight={700}>
                Pr
              </Typo>
              <Typo as="span" fontWeight={700}>
                oject manager
              </Typo>
            </Typo>
          </Stack>

          <Stack
            top="52%"
            right="14%"
            level={4}
            bgColor="rgba(0, 0, 0, 0.8)"
            border="0.5px solid #FCB500"
            rounded="1.5rem"
            padding="4.5rem"
            maxWidth="67rem"
            width="100%"
          >
            <Typo
              as="h3"
              color="#fff"
              fontSize="3rem"
              lineHeight="3.6rem"
              fontWeight={500}
            >
              Founder
            </Typo>
            <Typo
              as="h4"
              color="#fff"
              fontSize="1.4rem"
              lineHeight="1.6rem"
              marginTop="5px"
            >
              <Typo as="span" color="warning">
                Inro
              </Typo>
              <Typo as="span">duction</Typo>
            </Typo>
            <Typo
              as="p"
              color="grey4"
              fontSize="1.4rem"
              lineHeight="1.6rem"
              marginTop="2rem"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typo>
          </Stack>
        </Box>

        <Box
          className={
            state.isActive2
              ? classes['feedback-item'] + ` ${classes.active}`
              : classes['feedback-item']
          }
          width="100%"
        >
          <Box other={{ position: 'relative' }}>
            <Typo align="center">
              <StyledImage src="/static/images/slider/slider-2.png" />
            </Typo>

            <Stack
              className={classes['reveal-img']}
              width="100%"
              height="100%"
              bgColor="#000"
              top={0}
              left={0}
              level={4}
            />
          </Box>

          <Stack top="50%" left="28%" level={4}>
            <Typo as="h2" color="#fff" fontSize="7.2rem" lineHeight="8.6rem">
              <Typo as="span" color="warning" fontWeight={700}>
                Des
              </Typo>
              <Typo as="span" fontWeight={700}>
                igner
              </Typo>
            </Typo>
          </Stack>

          <Stack
            top="60%"
            right="14%"
            level={4}
            bgColor="rgba(0, 0, 0, 0.8)"
            border="0.5px solid #FCB500"
            rounded="1.5rem"
            padding="4.5rem"
            maxWidth="67rem"
            width="100%"
          >
            <Typo
              as="h4"
              color="#fff"
              fontSize="1.4rem"
              lineHeight="1.6rem"
              marginTop="5px"
            >
              <Typo as="span" color="warning">
                Inro
              </Typo>
              <Typo as="span">duction</Typo>
            </Typo>
            <Typo
              as="p"
              color="grey4"
              fontSize="1.4rem"
              lineHeight="1.6rem"
              marginTop="2rem"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typo>
          </Stack>
        </Box>

        <Box
          className={
            state.isActive3
              ? classes['feedback-item'] + ` ${classes.active}`
              : classes['feedback-item']
          }
          width="100%"
        >
          <Box other={{ position: 'relative' }}>
            <Typo align="center">
              <StyledImage src="/static/images/slider/slider-3.png" />
            </Typo>

            <Stack
              className={classes['reveal-img']}
              width="100%"
              height="100%"
              bgColor="#000"
              top={0}
              left={0}
              level={4}
            />
          </Box>

          <Stack top="30%" left="20%" level={4} maxWidth="33.4rem">
            <Typo
              as="h2"
              align="right"
              color="#fff"
              fontSize="7.2rem"
              lineHeight="8.6rem"
            >
              <Typo as="span" color="warning" fontWeight={700}>
                Senior
              </Typo>
              <br />
              <Typo as="span" fontWeight={700}>
                fullstack
              </Typo>
              <br />
              <Typo as="span" color="warning" fontWeight={700}>
                dev
              </Typo>
              <Typo as="span" fontWeight={700}>
                eloper
              </Typo>
            </Typo>
          </Stack>

          <Stack
            top="50%"
            right="15%"
            level={4}
            bgColor="rgba(0, 0, 0, 0.8)"
            border="0.5px solid #FCB500"
            rounded="1.5rem"
            padding="4.5rem"
            maxWidth="67rem"
            width="100%"
          >
            <Typo
              as="h4"
              color="#fff"
              fontSize="1.4rem"
              lineHeight="1.6rem"
              marginTop="5px"
            >
              <Typo as="span" color="warning">
                Inro
              </Typo>
              <Typo as="span">duction</Typo>
            </Typo>
            <Typo
              as="p"
              color="grey4"
              fontSize="1.4rem"
              lineHeight="1.6rem"
              marginTop="2rem"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typo>
          </Stack>
        </Box>
      </Flex>

      <Stack position="absolute" bottom={30} left={45} level={3}>
        <Flex items="baseline">
          <Typo
            as="h3"
            fontSize="9.6rem"
            lineHeight="11.5rem"
            fontWeight={700}
            color="#fff"
          >
            10
          </Typo>
          <Typo
            as="p"
            fontSize="1.8rem"
            lineHeight="2.16rem"
            color="#fff"
            marginLeft={5}
          >
            Feedback
          </Typo>
        </Flex>
      </Stack>
    </FullPage>
  );
};

export default View;
