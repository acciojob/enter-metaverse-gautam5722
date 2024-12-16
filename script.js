//your JS code here. If required.
const displayCode = document.getElementById("status");
const btn = document.getElementById("enterBtn");


btn.addEventListener('click', () => { 
	displayCode.outerHTML = '<h1 id="status">Entered Metaverse';
});