var Name = document.getElementById(123);
var price = document.getElementById(12);
var serial = document.getElementById(1);
var allProducts = [];
function addNewItem() {
  var obj = {
    name: Name.value,
    price: price.value,
    serial: serial.value,
  };
  allProducts.push(obj);
  clear();
  display(); //  مش هتفرق مين قبل مين لانهم مش بياثرو علي بعض
  console.log(allProducts);
}
function clear() {
  Name.value = "";
  price.value = "";
  serial.value = "";
}
function display() {
  var cartona = "";

  for (var i = 0; i < allProducts.length; i++) {
    cartona += `<tr>
<td>${allProducts[i].name}</td>
<td>${allProducts[i].price}</td>
<td>${allProducts[i].serial}</td>
<td><button onclick="del(${i});" class="btn-danger btn">delete</button></td>
<td><button class="btn-warning btn">update</button></td>
</tr>
`;
  }
  document.getElementById(`table`).innerHTML = cartona;
}
function del(i) {allProducts.splice(i,1);
display();}





