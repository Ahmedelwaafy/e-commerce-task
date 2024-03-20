import WrapperComponent from "@/components/WrapperComponent/WrapperComponent";
import { Footer, HelmetTags, SimilarProductS } from "../../components";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallback from "@/components/ErrorBoundaryFallback";
import { useTranslation } from "react-i18next";

export function Component() {
    const { t } = useTranslation("home");

  return (
    <section className="">
      <HelmetTags
        title={"Nasnav interview task"}
        description={"Website Description"}
        canonical=""
      />
      <WrapperComponent t={t} />
      <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
        <SimilarProductS t={t} />
        <Footer t={t} />{" "}
      </ErrorBoundary>
    </section>
  );
}
