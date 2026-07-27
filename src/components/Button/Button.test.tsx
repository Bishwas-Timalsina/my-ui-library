// // src/components/Button/Button.test.tsx
// import { fireEvent, render, screen } from "@testing-library/react";
// import { createRef } from "react";
// import { describe, expect, it, vi } from "vitest";
// import Button from "./Button";

// describe("Button", () => {
//   it("renders the label text", () => {
//     render(<Button label="Click me" />);
//     expect(screen.getByText("Click me")).toBeInTheDocument();
//   });

//   it("calls onclick when clicked", () => {
//     const onclick = vi.fn();
//     render(<Button label="Click me" onClick={onclick} />);
//     fireEvent.click(screen.getByRole("button"));
//     expect(onclick).toHaveBeenCalledTimes(1);
//   });

//   it("does not call onclick when variant is disabled", () => {
//     const onclick = vi.fn();
//     render(<Button label="Click me" onClick={onclick} variant="disabled" />);
//     fireEvent.click(screen.getByRole("button"));
//     expect(onclick).not.toHaveBeenCalled();
//   });

//   it("disables the button when variant is disabled", () => {
//     render(<Button label="Click me" variant="disabled" />);
//     expect(screen.getByRole("button")).toBeDisabled();
//   });

//   it("disables the button and shows Loading... when isLoading is true", () => {
//     render(<Button label="Submit" isLoading />);
//     expect(screen.getByRole("button")).toBeDisabled();
//     expect(screen.getByText("Loading...")).toBeInTheDocument();
//   });

//   it("does not call onclick when isLoading is true", () => {
//     const onclick = vi.fn();
//     render(<Button label="Submit" onClick={onclick} isLoading />);
//     fireEvent.click(screen.getByRole("button"));
//     expect(onclick).not.toHaveBeenCalled();
//   });

//   it("applies custom classname", () => {
//     render(<Button label="Click me" className="my-custom-class" />);
//     expect(screen.getByRole("button")).toHaveClass("my-custom-class");
//   });

//   it("renders icon when provided", () => {
//     render(<Button label="Click me" icon={<span data-testid="icon" />} />);
//     expect(screen.getByTestId("icon")).toBeInTheDocument();
//   });

//   it("shows the spinner icon when isLoading is true", () => {
//     const { container } = render(<Button label="Submit" isLoading />);
//     expect(container.querySelector(".spinner-icon")).toBeInTheDocument();
//   });

//   it("applies inline style prop", () => {
//     render(<Button label="Click me" />);
//     expect(screen.getByRole("button")).toHaveStyle({ marginTop: "10px" });
//   });

//   it("forwards ref to the underlying button element", () => {
//     const ref = createRef<HTMLButtonElement>();
//     render(<Button ref={ref} label="Click" />);
//     expect(ref.current).toBeInstanceOf(HTMLButtonElement);
//   });
// });
