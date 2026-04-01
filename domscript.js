// console.log("Hello World");

// // element selectors
// // by ID
// let heading = document.getElementById("heading"); 
// console.dir(heading);
// // by className
// let headings = document.getElementsByClassName("head");
// console.dir(headings);
// console.log(headings);
// // by TagName
// let paragraphs = document.getElementsByTagName("p");
// console.dir(paragraphs);

// // querySelector and querySelectorAll
// let elements = document.querySelector("p");
// console.dir(elements)

// let allElements = document.querySelectorAll("p");
// console.dir(allElements)

// let firstElement = document.querySelector(".head");
// console.dir(firstElement)

// let allHeadings = document.querySelectorAll(".head");
// console.dir(allHeadings)

// let firstHeading = document.querySelector("#heading");
// console.dir(firstHeading)

// // tagname, innertest, innerHtml
// let div = document.querySelector("div");
// console.dir(div)
// console.log(div.tagName)
// console.log(div.innerText)
// div.innerText = "This is a div element"
// console.log(div.innerHTML)

// Attributes
// get attribute

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let p = document.querySelector(".para");
// console.log(p.getAttribute("class"));

// // set attribute
// console.log(p.setAttribute("class", "newClass"));

// // node Style
// let d = document.querySelector("div");
// console.log(d.style);
// d.style.backgroundColor = "blue";

// Insert Element
// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me";

// console.log(newBtn);

// // node.append() - Adds at the end of the node(inside)

// let div = document.querySelector("div");
// div.append(newBtn);

// // node.prepend() - Adds at the beginning of the node(inside)
// div.prepend(newBtn);

// // node.before() - Adds before the node(outside)
// div.before(newBtn);

// // node.after() - Adds after the node(outside)
// div.after(newBtn);

// // Delete Element
// // node.remove() - remove the node 

// let para = document.querySelector("p");
// para.remove();