/**
 * author : Jaydatt Patel
 * 
 JSX (Javascript XML) script is combination of for JS and HTML. Babel is compiler to compile JSX script. 
 
 JSX allows to write HTML in JS and JS in HTML. 
 
 If you want to write HTML in JS then You must use one single any parent element tag or react fragment <></> then all other children elements must be in that single parent element.
 
 If you want write JS in HTML then you can write between brackets { code } and return HTML code.
 
 */

const heading = (
  <div>
    <h1 className="heading">Welcome to ReactJS.</h1>
    <h2 id="babel-JSX"> Babel JSX</h2>
  </div>
);
ReactDOM.createRoot(document.getElementById("main")).render(heading);
