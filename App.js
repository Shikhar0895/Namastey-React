const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "Child" },
    [React.createElement("h1", { id: "h1tag" }, "I am an H1 tag"),React.createElement("h2", { id: "h2tag" }, "I am an H2 tag")]
  )
);

root.render(parent);
console.log(parent);
