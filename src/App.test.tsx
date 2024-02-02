import { render, screen } from "@testing-library/react";
import App from "./App";
import { it, describe, expect } from "vitest";

describe("App", () => {
  it("renders headline", () => {
    render(<App />);
    expect(screen.getByText(/Hello World/i)).toBeDefined();
  });
});
