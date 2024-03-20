import WrapperComponent from "@/components/WrapperComponent/WrapperComponent";
import {
  Footer,
  HelmetTags,
  SimilarProductS
} from "../../components";

export function Component() {
  return (
    <section className="">
      <HelmetTags
        title={"tab.title"}
        description={"Website Description"}
        canonical=""
      />
      <WrapperComponent />
      <SimilarProductS />
      <Footer />
    </section>
  );
}
