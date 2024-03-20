import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Loader } from "./components";
import "./SASS/styles.scss";
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
