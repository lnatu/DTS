import styled from 'styled-components';

export const Container = styled.div`
  max-width: 117rem;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

export const Overlay = styled.div`
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8)
  );

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;

  width: 100%;
  height: 100%;
`;

export const Flex = styled.div(
  ({
    direction,
    wrap,
    items,
    content,
    width,
    height,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    marginX,
    marginY,
  }) => ({
    display: 'flex',
    flexDirection: direction,
    flexWrap: wrap || 'wrap',
    alignItems: items,
    justifyContent: content,

    height: height,
    width: width,

    margin: margin,
    marginTop: marginTop,
    marginRight: marginRight,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    margin: marginX ? `0 ${marginX}` : null,
    margin: marginY ? `${marginY} 0` : null,
  })
);

export const BlockText = styled.div(({ color, align }) => ({
  color: color,
  textAlign: align,
}));

export const Stack = styled.div(
  ({ position, top, right, bottom, left, level, width, height }) => ({
    position: position,
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    zIndex: level,

    width: width,
    height: height,
  })
);
