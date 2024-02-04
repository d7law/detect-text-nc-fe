import Image from "next/image";
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
import { useState } from "react";

const DetectScreen = () => {
  const [imageData, setImageData] = useState(null);

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const clipboard = e.clipboardData;
    const imageFile = clipboard?.files[0];
    if (!imageFile) {
      console.log("failed");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const res = e.target?.result;
      setImageData(res);
    };
    reader.readAsDataURL(imageFile);
    console.log("Okk");
  };

  return (
    <DetectWrapper>
      <DetectContainer>
        <DetectMessage>
          <DetectShortcut>
            <DetectShortcutKey>Ctrl</DetectShortcutKey>
            <DetectShortcutSign>+</DetectShortcutSign>
            <DetectShortcutKey>V</DetectShortcutKey>
          </DetectShortcut>

          <DetectMessageText>để dán hình ảnh vừa chụp</DetectMessageText>
        </DetectMessage>
      </DetectContainer>
      <input type="text" accept="image/*" onPaste={handlePaste} hidden />
      {imageData && <DetectImage src={imageData} />}
    </DetectWrapper>
  );
};

export default DetectScreen;
