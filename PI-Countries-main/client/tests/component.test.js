const React = require("react");
const { render } = require("@testing-library/react");
const About = require("../src/Views/About/about");

describe("About", () => {
  test("renders without errors", () => {
    render(<About />);
    // Perform your assertions or expectations here
  });
});
