import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import HelloWorld from "./hello-world";

describe("HelloWorld", () => {
  it("renders a name", () => {
    const { getByText } = render(<HelloWorld name="Nick" />);
    expect(getByText(/Hello Nick/i)).toBeInTheDocument();
  });
});
