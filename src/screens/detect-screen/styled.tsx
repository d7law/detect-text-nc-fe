import styled, { css } from "styled-components";
import bg from "../../../public/backgrounds/detect-text-nc.bg.jpg";
import { createBox, createTheme } from "@mui/system";

export const DetectWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const DetectContainer = styled.div`
  width: 800px;
  height: 500px;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border: 6px dashed white;
  border-radius: 10px;
  overflow: hidden;
  color: white;
  background-color: black;
`;

export const DetectMessage = styled.div<{ hidden?: boolean }>`
  display: ${(props) => (props.hidden ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  /* color: white; */
`;

export const DetectMessageText = styled.div`
  margin-top: 12px;
  margin-bottom: 13px;
  text-align: center;
`;

export const DetectShortcut = styled.div`
  display: flex;
  align-items: center;
`;

export const DetectShortcutKey = styled.span`
  padding: 6px 12px;
  border: 2px solid white;
  border-radius: 6px;
`;

export const DetectShortcutSign = styled.span`
  margin: 0 6px;
`;

export const DetectImage = styled.img<{ src: string }>`
  src: ${(props) => props.src};
`;
