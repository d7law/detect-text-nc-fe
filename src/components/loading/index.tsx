import { LoadingWrapper } from "./styled";

interface LoadingFixedProps {
  loading: boolean;
  color?: string;
  isFullContent?: boolean;
}

const LoadingSection = ({ loading = true, color, isFullContent = false }: LoadingFixedProps) => {
  return loading ? (
    <LoadingWrapper isFullContent={isFullContent}>
      <span className="loader"></span>
    </LoadingWrapper>
  ) : null;
};

export default LoadingSection;
