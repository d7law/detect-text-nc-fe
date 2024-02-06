import { MouseEvent } from "react";
import { DogButtonContainer, DogButtonWrapper } from "./styled";

interface DogButtonProps {
  content: string;
  onCLick?: () => void;
  actionApi?: () => void;
}

const DogButton = ({ content, onCLick, actionApi }: DogButtonProps) => {
  const animateDogBtn = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.currentTarget?.classList.remove("animate");
    e.currentTarget?.classList.add("animate");
    setTimeout(() => {
      e.currentTarget?.classList.remove("animate");
    }, 1000);

    actionApi();
  };
  return <DogButtonContainer onClick={onCLick}>{content}</DogButtonContainer>;
};

export default DogButton;
