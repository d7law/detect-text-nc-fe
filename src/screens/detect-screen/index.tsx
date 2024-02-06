import DogButton from "components/dog-button";
import {
  DetectContainer,
  DetectImage,
  DetectMessage,
  DetectMessageText,
  DetectShortcut,
  DetectShortcutKey,
  DetectShortcutSign,
  DetectWrapper,
} from "./styled";
import React, { useEffect, useState } from "react";
import { detectTextApi, getHello } from "api";

const DetectScreen = () => {
  const [imageSrc, setImageSrc] = useState<string>(null);
  const [imageFile, setImageFile] = useState<File>(null);

  const handleClick = async () => {
    const { data } = await detectTextApi({ image: imageFile });
    console.log(data);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const dataClipboard = e.clipboardData.items[0];
    console.log(dataClipboard);
    if (dataClipboard.type !== "image/png") {
      console.log("Not Image");
    }
    const data = dataClipboard.getAsFile();

    setImageFile(data);

    const blob = new Blob([data], { type: data?.type });
    setImageSrc(URL.createObjectURL(blob));
  };

  return (
    <div onPaste={handlePaste}>
      <DetectWrapper>
        <DetectContainer>
          <DetectMessage hidden={imageSrc ? true : false}>
            <DetectMessageText>Click vào khung này và</DetectMessageText>
            <DetectShortcut>
              <DetectShortcutKey>Ctrl</DetectShortcutKey>
              <DetectShortcutSign>+</DetectShortcutSign>
              <DetectShortcutKey>V</DetectShortcutKey>
            </DetectShortcut>

            <DetectMessageText>để dán hình ảnh vừa chụp</DetectMessageText>
          </DetectMessage>

          {imageSrc && <DetectImage src={imageSrc} />}
        </DetectContainer>
        {imageSrc && (
          <DogButton content="Click here" onCLick={handleClick}></DogButton>
        )}
      </DetectWrapper>
    </div>
  );
};

export default DetectScreen;
