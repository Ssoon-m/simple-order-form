import { render, screen } from "@testing-library/react";
import App from "../App";
import { describe, expect, test } from "vitest";

describe("App", () => {
  test("renders App", () => {
    render(<App />);
    const button = screen.getByText("18,000원 결제하기");
    expect(button).toBeInTheDocument();
  });
});
