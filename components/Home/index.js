import Image from 'next/image';
import { FullPage } from 'styles/layouts';
import {
  BlockText,
  Container,
  Flex,
  Overlay,
  Stack,
  StyledImage,
} from 'styles/components/Layouts';
import { Box, Line } from 'styles/components/Shape';
import { Button } from 'styles/components/Buttons';
import { Typo } from 'styles/components/Typo';
import utilClasses from 'styles/modules/Utilities.module.css';

const View = () => {
  const techStack = [
    [
      {
        title: 'Frontend',
        tech: [
          'Nextjs',
          'React Js',
          'Elm',
          'Ruby on rails',
          'JQuery',
          'Javascript',
          'Html5',
          'Css',
          'Scss',
        ],
      },
    ],
    [
      {
        title: 'Backend',
        tech: ['Ruby on rails', 'Nodejs', 'Firebase'],
      },
    ],
    [
      {
        title: 'Mobile App',
        tech: ['Android', 'Swift', 'React Native', 'Flutter'],
      },
    ],
    [
      {
        title: 'Design Skills',
        tech: ['Adobe Photoshop', 'Adobe Illustrator', 'Figma (Software)'],
      },
      {
        title: 'Industry Knowledge',
        tech: ['Graphic Design', 'Web Design', 'Photography'],
      },
    ],
  ];

  return (
    <>
      <FullPage>
        <Overlay>
          <Flex items="center" content="center" width="100%" height="100%">
            <BlockText align="center">
              <Typo
                as="h1"
                fontSize="6.4rem"
                lineHeight="7.68rem"
                fontWeight={700}
                color="#fff"
                marginLeft={5}
              >
                Slogan{' '}
                <Typo as="span" color="warning" fontWeight={700}>
                  Transformation
                </Typo>{' '}
                Strategy
              </Typo>

              <Typo
                as="p"
                color="grey4"
                fontSize="2rem"
                lineHeight="2.4rem"
                marginTop="2rem"
              >
                Digital Transformation Strategy is an outsourced team. We are
                the young generation with energetic engineers, <br />
                inventive designers and especially for product mindset. We're
                here to delivery outstanding service.
              </Typo>

              <Typo as="div" marginTop={66}>
                <Button as="a" bgColor="warning" color="grey2" fontWeight={500}>
                  Contact Us
                </Button>
              </Typo>
            </BlockText>
          </Flex>
        </Overlay>

        <Stack position="absolute" bottom={30} left={45} level={3}>
          <Flex items="baseline">
            <Typo
              as="h3"
              fontSize="9.6rem"
              lineHeight="11.5rem"
              fontWeight={700}
              color="#fff"
            >
              01
            </Typo>
            <Typo
              as="p"
              fontSize="1.8rem"
              lineHeight="2.16rem"
              color="#fff"
              marginLeft={5}
            >
              Slogan
            </Typo>
          </Flex>
        </Stack>

        <Image
          src="/static/images/home-banner-1.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Banner"
        />
      </FullPage>

      <FullPage>
        <Stack
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height="100%"
          level={2}
        >
          <Flex items="center" content="center" width="100%" height="100%">
            <div style={{ width: '100%' }}>
              <Typo
                as="p"
                align="center"
                fontSize="1.4rem"
                lineHeight="1.68rem"
                marginBottom={10}
              >
                <Typo as="span" color="warning">
                  We're ready
                </Typo>{' '}
                <Typo as="span" color="grey3">
                  to keep up with
                </Typo>{' '}
                <Typo as="span" color="#fff">
                  the latest technical skills and trendy design.
                </Typo>
              </Typo>
              <Line bgColor="warning" />

              <Container maxWidth="117rem">
                <Flex marginTop="9rem" className="row gx-4">
                  {techStack.map((ts) => (
                    <div className="col-md-3">
                      <Box
                        bgColor="rgba(255, 255, 255, 0.2)"
                        padding="4rem 3rem"
                        rounded={3}
                        height="100%"
                        other={{ flex: 1 }}
                      >
                        {ts.map((item, i) => (
                          <>
                            <Typo
                              as="h3"
                              color="#fff"
                              fontWeight={500}
                              fontSize="2.2rem"
                              lineHeight="2.64rem"
                              marginBottom={25}
                              className={i > 0 ? utilClasses['mt-70'] : null}
                            >
                              {item.title}
                            </Typo>
                            {
                              <ul>
                                {item.tech.map((t, i) => (
                                  <Flex
                                    as="li"
                                    items="center"
                                    className={
                                      i !== 0 ? utilClasses['mt-10'] : null
                                    }
                                  >
                                    <Box
                                      bgColor="#fff"
                                      width={8}
                                      height={8}
                                      rounded={999}
                                    />
                                    <Typo
                                      as="p"
                                      color="#fff"
                                      fontSize="1.8rem"
                                      lineHeight="2.16rem"
                                      marginLeft={10}
                                    >
                                      {t}
                                    </Typo>
                                  </Flex>
                                ))}
                              </ul>
                            }
                          </>
                        ))}
                      </Box>
                      ;
                    </div>
                  ))}
                </Flex>
              </Container>
            </div>
          </Flex>
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
              03
            </Typo>
            <Typo
              as="p"
              fontSize="1.8rem"
              lineHeight="2.16rem"
              color="#fff"
              marginLeft={5}
            >
              Techniques
            </Typo>
          </Flex>
        </Stack>

        <Image
          src="/static/images/home-banner-3.png"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Banner"
        />
      </FullPage>

      <FullPage>
        <Container height="100%">
          <Flex className="row g-0" height="100%">
            <Box
              className="col-4"
              height="100%"
              other={{ position: 'relative' }}
            >
              <StyledImage
                width="100%"
                height="100%"
                src="/static/images/home-banner-4-1.png"
              />
              <Stack
                bgColor="rgba(12, 12, 12, 0.8)"
                top={0}
                left={0}
                width="100%"
                height="100%"
                level={2}
              />
              <Stack top={0} left={0} width="100%" height="100%" level={3}>
                <Flex
                  items="center"
                  content="center"
                  width="100%"
                  height="100%"
                >
                  <BlockText align="center" color="#fff" maxWidth={370}>
                    <Typo as="h3" fontWeight={900} fontSize="9.6rem">
                      12
                    </Typo>
                    <Typo
                      as="h4"
                      fontWeight={500}
                      fontSize="2.4rem"
                      lineHeight="3.456rem"
                    >
                      What is Lorem Ipsum?
                    </Typo>
                    <Typo
                      as="h4"
                      fontSize="1.4rem"
                      lineHeight="2.16rem"
                      marginTop={20}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley
                    </Typo>
                  </BlockText>
                </Flex>
              </Stack>
            </Box>
            <Box
              className="col-4"
              height="100%"
              other={{ position: 'relative' }}
            >
              <StyledImage
                width="100%"
                height="100%"
                src="/static/images/home-banner-4-2.png"
              />
              <Stack
                bgColor="rgba(12, 12, 12, 0.8)"
                top={0}
                left={0}
                width="100%"
                height="100%"
                level={2}
              />
              <Stack top={0} left={0} width="100%" height="100%" level={3}>
                <Flex
                  items="center"
                  content="center"
                  width="100%"
                  height="100%"
                >
                  <BlockText align="center" color="#fff" maxWidth={370}>
                    <Typo as="h3" fontWeight={900} fontSize="9.6rem">
                      5
                    </Typo>
                    <Typo
                      as="h4"
                      fontWeight={500}
                      fontSize="2.4rem"
                      lineHeight="3.456rem"
                    >
                      What is Lorem Ipsum?
                    </Typo>
                    <Typo
                      as="h4"
                      fontSize="1.4rem"
                      lineHeight="2.16rem"
                      marginTop={20}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley
                    </Typo>
                  </BlockText>
                </Flex>
              </Stack>
            </Box>
            <Box
              className="col-4"
              height="100%"
              other={{ position: 'relative' }}
            >
              <StyledImage
                width="100%"
                height="100%"
                src="/static/images/home-banner-4-3.png"
              />
              <Stack
                bgColor="rgba(12, 12, 12, 0.8)"
                top={0}
                left={0}
                width="100%"
                height="100%"
                level={2}
              />
              <Stack top={0} left={0} width="100%" height="100%" level={3}>
                <Flex
                  items="center"
                  content="center"
                  width="100%"
                  height="100%"
                >
                  <BlockText align="center" color="#fff" maxWidth={370}>
                    <Typo as="h3" fontWeight={900} fontSize="9.6rem">
                      99+
                    </Typo>
                    <Typo
                      as="h4"
                      fontWeight={500}
                      fontSize="2.4rem"
                      lineHeight="3.456rem"
                    >
                      What is Lorem Ipsum?
                    </Typo>
                    <Typo
                      as="h4"
                      fontSize="1.4rem"
                      lineHeight="2.16rem"
                      marginTop={20}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley
                    </Typo>
                  </BlockText>
                </Flex>
              </Stack>
            </Box>
          </Flex>
        </Container>
        <Stack position="absolute" bottom={30} left={45} level={3}>
          <Flex items="baseline">
            <Typo
              as="h3"
              fontSize="9.6rem"
              lineHeight="11.5rem"
              fontWeight={700}
              color="#fff"
            >
              04
            </Typo>
            <Typo
              as="p"
              fontSize="1.8rem"
              lineHeight="2.16rem"
              color="#fff"
              marginLeft={5}
            >
              Highlight các con số về Khách hàng , Dự án, Đối tác
            </Typo>
          </Flex>
        </Stack>
      </FullPage>
    </>
  );
};

export default View;
