/**
 React.createElement(Tagname,{attributes:val}, children)
 */

const heading = React.createElement(
  "h1",
  { class: `head`, id: `heading` },
  `Welcome to ReactJS.`
);
ReactDOM.createRoot(document.getElementById("main")).render(heading);
