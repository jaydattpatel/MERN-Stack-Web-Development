/*
author : Jaydatt Patel

$(selector).load(URL, data[optional], callback[optional]);

- The required URL parameter specifies the URL you wish to load.
- The optional data parameter specifies a set of querystring key/value pairs to send along with the request.
- The optional callback parameter is the name of a function to be executed after the load() method is completed.

The optional callback parameter specifies a callback function to run when the load() method is completed. The callback function can have different parameters:
- responseTxt : contains the resulting content if the call succeeds
- statusTxt : contains the status of the call
- xhr : contains the XMLHttpRequest object

*/

// add whole content from file without error check
// $('main').load("012-Load-URL-or-File.txt");

// add specific element '#div1' from file
// $('main').load("012-Load-URL-or-File.txt #div1");

// add whole content from file with error check
$("main").load(
  "012-Load-URL-or-File.txt",
  function (responseTxt, statusTxt, xhr) {
    if (statusTxt == "success") {
      console.log("Added file successfully !");
    }
    if (statusTxt == "error") {
      alert("Error: " + xhr.status + ": " + xhr.statusText);
    }
  }
);
