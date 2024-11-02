const li = document.querySelector("ul");
const input = document.querySelector("#item");
const addbutton = document.querySelector("#add");

addbutton.onclick = () => {
  const newitem = input.value.trim(); // trim to avoid adding empty items
  if (newitem === "") return; // prevent adding empty items
  input.value = "";
  
  const listitem = document.createElement("li");
  const spanelement = document.createElement("span");
  const deletebutton = document.createElement("button");
  
  spanelement.textContent = newitem;
  deletebutton.textContent = 'Delete';

  listitem.appendChild(spanelement); // Append the span element
  listitem.appendChild(deletebutton); // Correctly append the delete button
  li.appendChild(listitem); // Append the list item to the ul

  deletebutton.addEventListener('click', () => {
    li.removeChild(listitem);
  });
  
  input.focus();
};
