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

const DetectScreen = () => {
  const [imageSrc, setImageSrc] = useState<string>(null);

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const dataClipboard = e.clipboardData.items[0];
    console.log(dataClipboard);
    if (dataClipboard.type !== "image/png") {
      console.log("Not Image");
    }
    const data = dataClipboard.getAsFile();

    const blob = new Blob([data], { type: data.type });
    setImageSrc(URL.createObjectURL(blob));
  };

  return (
    <div onPaste={handlePaste}>
      <DetectWrapper>
        <DetectContainer>
          <DetectMessage hidden={imageSrc ? true : false}>
            <DetectShortcut>
              <DetectShortcutKey>Ctrl</DetectShortcutKey>
              <DetectShortcutSign>+</DetectShortcutSign>
              <DetectShortcutKey>V</DetectShortcutKey>
            </DetectShortcut>

            <DetectMessageText>để dán hình ảnh vừa chụp</DetectMessageText>
          </DetectMessage>

          {imageSrc && <DetectImage src={imageSrc} />}
        </DetectContainer>
      </DetectWrapper>
    </div>
  );
};

export default DetectScreen;
