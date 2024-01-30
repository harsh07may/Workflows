import { render } from "@testing-library/react";
import App from "./App";
import { it, describe } from "vitest";

describe("App", () => {
  it("renders headline", () => {
    render(<App />);
  });
});
