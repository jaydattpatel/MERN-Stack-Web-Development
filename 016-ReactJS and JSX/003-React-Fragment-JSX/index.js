/**
 * author : Jaydatt Patel
 Babel compiler for compile JSX (Javascript XML) script for JS and HTML. It allow to write html code in JS. 
 
 React Fragment:
 You must use one single parent element and all other children elements must be in that single parent element. If you do not want to add parent element in DOM then you can use react fragment: 

 Method-1 :
 const content =  <>
                  inner element.....
                  </>

 Method-2 :
 const content =  <React.Fragment>
                  inner element.....
                  </React.Fragment>

 
 
 */

const fragment = (
  <>
    <h1 className="heading">Welcome to ReactJS.</h1>
    <h2 id="babel-JSX"> React Fragment</h2>
  </>
);

ReactDOM.createRoot(document.getElementById("main")).render(fragment);
