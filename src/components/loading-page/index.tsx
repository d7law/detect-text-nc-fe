import LoadingSection from "../loading";
import { LoadingPageWrapper } from "./styled";
import Portal from "../portal/index";

interface LoadingFixedProps {
  loading: boolean;
}

const LoadingPage = ({ loading }: LoadingFixedProps) => {
  return loading ? (
    <Portal>
      <LoadingPageWrapper>
        <LoadingSection loading />
      </LoadingPageWrapper>
    </Portal>
  ) : null;
};

export default LoadingPage;
