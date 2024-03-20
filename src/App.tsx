import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./SASS/styles.scss";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Loader } from "./components";
function App() {
  const { i18n } = useTranslation("");

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language?.startsWith("ar")
      ? "ar"
      : "en";
  }, [i18n, i18n.language]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Navigate to={`/${i18n.language?.startsWith("ar") ? "ar" : "en"}`} />
      ),
    },
    {
      path: `/${i18n.language?.startsWith("ar") ? "ar" : "en"}`,
      lazy: () => import("./pages/ProductDetails/ProductDetails.tsx"),
    },
  ]);
  return <RouterProvider router={router} fallbackElement={<Loader />} />;
}

export default App;
