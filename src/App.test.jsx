// import { describe, it, expect } from "vitest";

// describe("something truthy and falsy", () => {
//   it("true to be true", () => {
//     expect(true).toBe(true);
//   });

//   it("false to be false", () => {
//     expect(false).toBe(false);
//   });
// });

import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("renders the footer", () => {
    render(<App />);

    screen.debug();

    expect(screen.getByText("Copyright 2024")).toBeInTheDocument();
  });
});
