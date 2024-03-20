import { FallbackProps } from "react-error-boundary";
import HelmetTags from "./HelmetTags";
import img from "/images/error.png";

export default function ErrorBoundaryFallback(props: FallbackProps) {
  const { error, resetErrorBoundary } = props;

  return (
    <section className=" min-h-screen  w-full mb-20 text-temp_secondary ">
      <HelmetTags
        title={"Something went wrong"}
        description={"error description"}
        index={false}
      />
      <div className="header_background--placeholder w-full h-24 bg-temp_secondary opacity-"></div>
      <section className="flex  items-center justify-center min-h-[calc(100vh-96px)] w-full  py-20 ">
        <div className="flex-center gap-10 site_container md:flex-col md:items-center ">
          <div className="w-1/2  md:w-full flex justify-center">
            <img className="" src={img} alt="error" />
          </div>

          <div className="w-1/2  md:w-full flex flex-col md:items-center">
            <h1 className="font-bold text-7xl">OPPS!!</h1>
            <h2 className="font-medium text-2xl my-3">
              Looks like something went wrong.
            </h2>
            {/* <p className="text-red-500">{error.message}</p> */}

            <button
              className="!w-fit mx mt-5"
              id="custom__btn"
              onClick={resetErrorBoundary}
            >
              <span>Retry</span>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
