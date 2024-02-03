import styled, { css } from "styled-components";
import { device } from "./media";

type JustifyContent =
  | "start-end"
  | "flex-end"
  | "flex-start"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

interface FlexBoxProps {
  $direction?: string;
  $alignItem?: "flex-end" | "flex-start" | "center";
  $justifyContent?: JustifyContent;
  $shrink?: number;
  $gap?: number;
  $wrap?: "wrap" | "nowrap" | "wrap-reverse";
  $mbGap?: number;
  $mbDirection?: string;
}

export const Container = styled.div`
  max-width: 1240px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Spacing = styled.div`
  flex: 1;
`;

export const ImagePercentWrapper = styled.div<{
  percent?: number;
  percentMobile?: number;
  radius?: number;
}>`
  height: 0;
  position: relative;
  overflow: hidden;
  padding-top: ${({ percent }) => percent}%;
  border-radius: ${({ radius }) => radius ?? 0}px;

  img {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  @media ${device.mobile} {
    ${({ percentMobile }) =>
      percentMobile ? `padding-top:${percentMobile}%` : null};
  }
`;

export const HideByOpacityStyle = css`
  opacity: 0;
  user-select: none;
  pointer-events: none;
`;

export const HideByOpacity = styled.div`
  width: 0px;
  height: 0px;

  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  ${HideByOpacityStyle}
`;

export const FlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction ?? "row"};
  align-items: ${({ $alignItem }) => $alignItem};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  flex-shrink: ${({ $shrink }) => $shrink};
  gap: ${({ $gap }) => $gap}px;
  flex-wrap: ${({ $wrap }) => $wrap};

  @media ${device.mobile} {
    gap: ${({ $mbGap }) => $mbGap}px;
    flex-direction: ${({ $mbDirection, $direction }) =>
      $mbDirection ? $mbDirection : $direction ? $direction : "row"};
  }
`;
