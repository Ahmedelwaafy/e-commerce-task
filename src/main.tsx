import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import i18n from "./i18n/index.tsx";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";
import Loader from "./components/Loader.tsx";
import { I18nextProvider } from "react-i18next";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {" "}
    <Toaster position="top-center" reverseOrder={false} />
    <HelmetProvider>
      <Suspense fallback={<Loader />}>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </Suspense>
    </HelmetProvider>
  </React.StrictMode>
);
