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
import { Box, Modal } from "@mui/material";
import { detectTextApi, getHello } from "api";
const styleBox = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const DetectScreen = () => {
  const [imageSrc, setImageSrc] = useState<string>(null);
  const [imageFile, setImageFile] = useState<File>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [dataRes, setDataRes] = useState<any>(
    "KHÔNG CÓ TEXT NÀO ĐƯỢC PHÁT HIỆN"
  );

  const handleClick = async () => {
    const { data } = await detectTextApi({ image: imageFile });
    setDataRes(data);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

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
        <Modal open={showModal} onClose={handleClose}>
          <Box
            sx={{
              alignItems: "center",
              height: "auto",
              borderRadius: 1,
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              pt: 2,
              px: 4,
              pb: 3,
              whiteSpace: "pre-wrap",
            }}
          >
            {dataRes}
          </Box>
        </Modal>
      </DetectWrapper>
    </div>
  );
};

export default DetectScreen;
