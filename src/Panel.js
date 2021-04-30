import React from "react";
import { useEffect, useGlobals } from "@storybook/addons";
import { useParameter } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import { ADDON_ID } from "./constants";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtoolsPanel } from "react-query/devtools";

const defaultClient = new QueryClient();
export const Panel = (props) => {
  const { client } = useParameter("reactQuery", { client: defaultClient });

  return (
    <AddonPanel {...props}>
      <QueryClientProvider client={client}>
        <ReactQueryDevtoolsPanel style={{ height: "100%" }} />
      </QueryClientProvider>
    </AddonPanel>
  );
};
