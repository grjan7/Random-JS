document.write(`<!doctype html>
<html>
<head>
</head>
<body>
<div id="moveObject" style="width:10px; height:10px;margin:0px;background-color:#ff00ff;"></div>
</body>
</html>`);

let moveObject = document.querySelector("#moveObject");

document.onmouseover = (e) => { 
 moveObject.style = `width:10px; height:10px;background-color:#ff00ff;margin-top:${e.clientY}px;margin-left:${e.clientX}px; `;
}
