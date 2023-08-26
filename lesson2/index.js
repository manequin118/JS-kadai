const ul = document.getElementById("js-target");

const fragment = document.createDocumentFragment();
const a = document.createElement("a");
a.href = "1.html";

const img = document.createElement("img");
img.src = "bookmark.png";
img.alt = "ブックマーク";
const text = document.createTextNode("これです");

a.appendChild(img);
a.appendChild(text);

const li = document.createElement("li");
li.appendChild(a);

fragment.appendChild(li);

ul.appendChild(fragment);
