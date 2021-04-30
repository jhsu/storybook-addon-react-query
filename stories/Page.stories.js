import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";

import { Page } from "./Page";
import * as HeaderStories from "./Header.stories";

const client = new QueryClient();
export default {
  title: "Example/Page",
  component: Page,
  args: {
    onLogin: console.log,
  },
  parameters: {
    reactQueryClient: { client },
  },
};

const Template = (args) => (
  <QueryClientProvider client={client}>
    <Page {...args} />
  </QueryClientProvider>
);

console.log("client is ", client);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};
// LoggedIn.parameters = {
//   reactQueryClient: new QueryClient(),
// };

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
