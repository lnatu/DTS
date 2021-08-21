import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 2.8rem;
  left: 0;
  z-index: 99;

  padding: 0 12rem;

  width: 100%;
`;

export const FullPage = styled.section(
  ({ bgImage, height, minHeight, padding }) => ({
    backgroundImage: bgImage,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: height || '100vh',
    minHeight: minHeight,
    width: '100%',
    position: 'relative',
    padding: padding,
    overflow: 'hidden',
  })
);
