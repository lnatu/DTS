import Link from 'next/link';
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
import { StyledCard } from 'components/Home/styles';
import StepCard from 'components/Home/components/ClientCard';
import classes from 'components/Home/styles/Home.module.css';

const View = () => (
  <FullPage height="auto">
    {/* <StyledImage
      src="/static/images/home-banner-7.png"
      width="100%"
      height="100%"
    /> */}

    <Flex
      bgImage="linear-gradient(to bottom, rgba(0, 0, 0, .9), rgba(0, 0, 0, .9)), url(/static/images/home-banner-7.png)"
      width="100%"
      height="100%"
      items="center"
      content="center"
      padding="8rem 0"
    >
      <Box>
        <StyledImage src="/static/images/home-banner-7-1.png" />

        <Flex
          content="center"
          className={classes['slide-preview-small']}
          marginTop="8.5rem"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <Box className={classes['slide-preview-item']}>
              <Box border="1px solid #c4c4c4" rounded={6} padding={6} key={i}>
                <StyledImage src="/static/images/home-banner-7-2.png" />
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>

    {/* <Stack
      bgColor="rgba(51, 51, 51, 0.5)"
      position="absolute"
      bottom={0}
      left={0}
      width="100%"
      height="6.8rem"
      level={2}
    /> */}

    <Stack
      bgColor="warning"
      position="absolute"
      top={0}
      left={0}
      width="29rem"
      height="100%"
      level={3}
    >
      <Stack
        bottom={100}
        left={45}
        width="130%"
        className={classes['text-reverse']}
      >
        <Typo as="h2" fontSize="4.8rem" lineHeight="5.76rem">
          <Typo as="span" color="#333" fontWeight={700}>
            Design for
          </Typo>{' '}
          <Typo as="span" color="#fff" fontWeight={700}>
            you
          </Typo>
        </Typo>
        <Typo as="p" fontSize="1.4rem" lineHeight="1.68rem" marginTop="1.5rem">
          <Typo as="span" color="#fff">
            Lorem Ipsum is simply dummy text of the printing
          </Typo>{' '}
          <Typo as="span" color="#333">
            and typesetting industry. Lorem Ipsum has been the industry's
          </Typo>
        </Typo>
      </Stack>
    </Stack>

    <Stack position="absolute" bottom={30} left={45} level={3}>
      <Flex items="baseline">
        <Typo
          as="h3"
          fontSize="9.6rem"
          lineHeight="11.5rem"
          fontWeight={700}
          color="#fff"
        >
          07
        </Typo>
        <Typo
          as="p"
          fontSize="1.8rem"
          lineHeight="2.16rem"
          color="#333"
          marginLeft={5}
        >
          Design
        </Typo>
      </Flex>
    </Stack>
  </FullPage>
);

export default View;