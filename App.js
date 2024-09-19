const heading = React.createElement(
  "div",
  { id: "heading" },
  React.createElement("div", { id: "subHeading" }, [
    React.createElement("h1", { id: "header" }, "I am an h1 tab"),
    React.createElement("h2", { id: "header" }, "I am an h2 tab"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
