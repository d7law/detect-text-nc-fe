import { MouseEvent } from "react";
import { DogButtonContainer, DogButtonWrapper } from "./styled";

interface DogButtonProps {
  content: string;
  onSubmit?: () => void;
}

const DogButton = ({ content, onSubmit }: DogButtonProps) => {
  const animateDogBtn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.currentTarget?.classList.remove("animate");
    e.currentTarget?.classList.add("animate");
    setTimeout(() => {
      e.currentTarget?.classList.remove("animate");
    }, 1000);
  };
  return (
    <DogButtonContainer onClick={animateDogBtn} onSubmit={onSubmit}>
      {content}
    </DogButtonContainer>
  );
};

export default DogButton;
