import React from "react";
import { render, screen } from "@testing-library/react";

import ImageGallery from "./ImageGallery";

describe("<ImageGallery />", () => {
  const defaultProps = {
    items: [
      {
        original: "./2.jpg",
        thumbnail: "./2t.jpg",
      },
    ],
  };

  it("renders slides", () => {
    render(<ImageGallery {...defaultProps} />);
    const elements = screen.getAllByLabelText("Go to Slide 1");
    // expect a thumbnail and slide label
    expect(elements.length).toBe(2);
  });
});
