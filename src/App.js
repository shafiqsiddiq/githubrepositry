import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from "./Navigation/RouterConfig";
import { ProvideAuth } from "./Navigation/Auth/ProvideAuth";
import { Loader } from "./assets";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ProvideAuth>
        <BrowserRouter>
          <RouterConfig />
        </BrowserRouter>
      </ProvideAuth>
    </Suspense>
  );
}

export default App;
