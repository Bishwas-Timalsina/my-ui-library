// import { describe, it, expect, vi } from "vitest";
// import { render, screen } from "@testing-library/react";

// import { createRef } from "react";
// import Text from "./Text";

// describe("Text", () => {
//   it("renders children when provided", () => {
//     render(<Text>Hello children </Text>);
//     expect(screen.getByText("Hello children")).toBeInTheDocument();
//   });

//   it("renders content when children is not provided", () => {
//     render(<Text content="Hello content" />);
//     expect(screen.getByText("Hello content")).toBeInTheDocument();
//   });

//   it("prefers children over content when both are given", () => {
//     render(<Text content="From content"> From children </Text>);
//     expect(screen.getByText("From children")).toBeInTheDocument();
//     expect(screen.queryByText("From content")).not.toBeInTheDocument();
//   });

//   it("applies custom classname", () => {
//     const { container } = render(
//       <Text className="my-custom-class"> Styled </Text>,
//     );
//     expect(container.firstChild).toHaveClass("my-custom-class");
//   });

//   it("calls onclick when clicked", () => {
//     const onclick = vi.fn();
//     render(<Text onClick={onclick}> Click me </Text>);
//     screen.getByText("Click me").closest("div")?.click();
//     expect(onclick).toHaveBeenCalled();
//   });

//   it("renders icon on the left by default", () => {
//     render(<Text icon={<span data-testid="icon" />}> Label </Text>);
//     expect(screen.getByTestId("icon")).toBeInTheDocument();
//   });

//   it("truncates text when truncate is true", () => {
//     render(<Text truncate> Long text </Text>);
//     expect(screen.getByText("Long text")).toHaveClass("truncate");
//   });

//   it("forwards ref to the underlying div element", () => {
//     const ref = createRef<HTMLDivElement>();
//     render(<Text ref={ref}>Ref test</Text>);
//     expect(ref.current).toBeInstanceOf(HTMLDivElement);
//   });
// });
