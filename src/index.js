import { greet } from "./greet";

export const textComponent = () => {
  const h1 = document.createElement("h1");

  h1.innerText = greet("Webpack");

  return h1;
};

document.body.appendChild(textComponent());