import styled from "styled-components";

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
`;

export const Flex = styled.div(
  ({ direction, wrap, items, content, width, height }) => ({
    display: "flex",
    flexDirection: direction,
    flexWrap: wrap || "wrap",
    alignItems: items,
    justifyContent: content,

    height: height,
    width: width,
  })
);
