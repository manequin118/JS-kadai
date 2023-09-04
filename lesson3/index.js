let ul = document.getElementById("js-target");
const fragment = document.createDocumentFragment();

const aTag = document.createElement("a");
const aTag2 = document.createElement("a");
aTag.href = "a1.html";
aTag2.href = "a2.html";
aTag.insertAdjacentHTML("beforeend", "a1");
aTag2.insertAdjacentHTML("beforeend", "a2");

const img = document.createElement("img");
const img2 = document.createElement("img");
img.src = "./img/bookmark.png";
img2.src = "./img/message.png";

aTag.appendChild(img);
aTag2.appendChild(img2);

const li = document.createElement("li");
const li2 = document.createElement("li");

li.appendChild(aTag).appendChild(img);
li2.appendChild(aTag2).appendChild(img2);

fragment.append(li);
fragment.append(li2);

ul.appendChild(fragment);
