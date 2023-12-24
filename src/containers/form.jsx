use strict';
var area = document.getElementById('most-recent-order')
function handleSubmit() {
return (
<form id="form">
  <label htmlFor="Name">Name :</label> <input type="text" id="name" /> <br />
  <label htmlFor="Size">Size :</label>
  <select id="size">
    <option value="">Small</option>
    <option value="">Medium</option>
    <option value="">Large</option>
  </select> <br />
  <label htmlFor="Pepperoni">Pepperoni</label> <input type="checkbox" id="Pepper" value="Pepperoni" /><br />
  <label htmlFor="Gluten-Free">Gluten-Free</label> <input type="checkbox" id="Gluten" value="Gluten-Free" /><br />
  <label htmlFor="Quantity">Quantity :</label> <input type="number" id="quanti" /><br />
  <label htmlFor="instructions">Aditional instructions</label><br /><textarea id="adiStr" cols="100"
    rows="10"></textarea>
  <button type="submit" onClick={handle}>Submit Query</button>
</form>
)
}
function handle() {

let size = document.getElementById('size').value
let Name = document.getElementById('name').value
let quantity = document.getElementById('quanti').value
let Pepperoni = document.getElementById('Pepper').checked
let GlutenFree = document.getElementById('Gluten').checked
if (Pepperoni == true) {
area.innerHTML = `<p>Order for ${quantity},${size} pizza(s) that are not Gluten-Free and have Pepperoni for ${Name}</p>
<br />
<p>Instructions : None</p>`
} else if (GlutenFree == true) {
area.innerHTML = `<p>Order for ${quantity}, ${size} pizza(s) that have Gluten-Free and don't have Pepperoni for ${Name}
</p><br />
<p>Instructions : None</p>`
} else {
area.innerHTML = `<p>Order for ${quantity}, ${size} pizza(s) that are not Gluten-Free and don't have Pepperoni for
  ${Name}</p><br />
<p>Instructions : None</p>`
}

}


ReactDOM.render(
handleSubmit(),
document.getElementById('root')
);