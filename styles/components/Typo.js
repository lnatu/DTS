import styled from 'styled-components';

export const Typo = styled.div(
  ({
    align,
    color,
    fontSize,
    fontWeight,
    lineHeight,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    marginX,
    marginY,
    theme,
  }) => ({
    color: theme.colors[color] || color,
    fontSize: fontSize,
    fontWeight: fontWeight || 400,
    lineHeight: lineHeight,
    textAlign: align,

    margin: margin,
    marginTop: marginTop,
    marginRight: marginRight,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    margin: marginX ? `0 ${marginX}` : null,
    margin: marginY ? `${marginY} 0` : null,
  })
);
