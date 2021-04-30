/* eslint-env browser */
import { useEffect, useGlobals } from "@storybook/addons";

// export const withGlobals = (StoryFn, context) => {
//   const [{ reactQueryClient }, updateGlobals] = useGlobals();
//   // Is the addon being used in the docs panel
//   const isInDocs = context.viewMode === "docs";

//   return StoryFn();
// };

function displayToolState(selector, state) {
  const rootElement = document.getElementById(selector);
  let preElement = rootElement.querySelector("pre");

  if (!preElement) {
    preElement = document.createElement("pre");
    preElement.style.setProperty("margin-top", "2rem");
    preElement.style.setProperty("padding", "1rem");
    preElement.style.setProperty("background-color", "#eee");
    preElement.style.setProperty("border-radius", "3px");
    preElement.style.setProperty("max-width", "600px");
    rootElement.appendChild(preElement);
  }

  preElement.innerText = `This snippet is injected by the withGlobals decorator.
It updates as the user interacts with the ⚡ tool in the toolbar above.

${JSON.stringify(state, null, 2)}
`;
}
