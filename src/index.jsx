import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import LampadaMagica from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <LampadaMagica />
  </StrictMode>
);
