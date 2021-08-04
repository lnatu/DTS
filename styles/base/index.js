import styled from "styled-components";

export const Base = styled.section((props) => ({
  "*, *::after, *::before": {
    margin: 0,
    padding: 0,
    boxSizing: "inherit",
  },
  html: {
    "font-size": "62.5%",
  },
  body: {
    "box-sizing": "border-box",
  },
}));
