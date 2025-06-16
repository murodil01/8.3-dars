import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ProviderConf = ({ children }: { children: React.ReactElement }) => {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
};

export default ProviderConf;
