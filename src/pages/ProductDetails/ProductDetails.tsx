import WrapperComponent from "@/components/WrapperComponent/WrapperComponent";
import { Footer, HelmetTags, SimilarProductS } from "../../components";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallback from "@/components/ErrorBoundaryFallback";

export function Component() {
  return (
    <section className="">
      <HelmetTags
        title={"Nasnav interview task"}
        description={"Website Description"}
        canonical=""
      />
      <WrapperComponent />
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
        <SimilarProductS />
        <Footer />{" "}
      </ErrorBoundary>
    </section>
  );
}
