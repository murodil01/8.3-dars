import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import ProviderConf from "./provider";
import '@ant-design/v5-patch-for-react-19';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProviderConf>
      <RouterProvider router={router} />
    </ProviderConf>
  </StrictMode>
);
