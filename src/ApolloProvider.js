import React, { Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import Loader from "./Components/common/Loader.js";
const App = React.lazy(() => import("./App"));

export default (
  <HelmetProvider>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </HelmetProvider>
);
