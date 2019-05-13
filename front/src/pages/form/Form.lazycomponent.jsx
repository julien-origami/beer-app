import React, { Suspense, lazy } from "react";
import { Loader } from "../../components/Loader";

const LazyForm = lazy(() => import("./Form.container"));

const LazyBeerForm = () => (
  <Suspense fallback={<Loader />}>
    <LazyForm />
  </Suspense>
);
export default LazyBeerForm;
