import { Swiper, SwiperSlide } from 'swiper/react';
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

const View = () => (
  <FullPage>
    <Flex
      bgColor="dark2"
      items="center"
      content="center"
      width="100%"
      height="100%"
    ></Flex>

    <Stack position="absolute" bottom={30} left={45} level={3}>
      <Flex items="baseline">
        <Typo
          as="h3"
          fontSize="9.6rem"
          lineHeight="11.5rem"
          fontWeight={700}
          color="#fff"
        >
          02
        </Typo>
        <Typo
          as="p"
          fontSize="1.8rem"
          lineHeight="2.16rem"
          color="#fff"
          marginLeft={5}
        >
          Introduce
        </Typo>
      </Flex>
    </Stack>
  </FullPage>
);

export default View;
