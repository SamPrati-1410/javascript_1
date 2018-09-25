//  empty shopping array
var shoppingList = [];
//form handling to insert values entered to array and create li items for each value in array with delete button
var form = document.getElementById('shopping-form-input');

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var inputVal = document.getElementById('input-form').value;
    shoppingList.push(inputVal);
    console.log(shoppingList);
    var listingPush = document.getElementById('list-push')
    var li = document.createElement('li')
    li.id = inputVal;
    var btn = document.createElement('button');
    btn.value = inputVal; btn.innerHTML = 'Del';
    li.innerHTML = inputVal;
    listingPush.appendChild(li);
    listingPush.appendChild(btn);
    // prompt user, if true empty the input value and focus
    var confirmUser = confirm('Do you want to add more?')
    if (confirmUser) { document.getElementById('input-form').value = ''; document.getElementById('input-form').focus(); }
});

// shopping form has items which users entered 
var eventHandle = document.getElementById('shopping-form');
eventHandle.addEventListener('click', deleteElem)

//functions to delete the li items
function deleteElem(e) {
    e.preventDefault();
    var listingPush = document.getElementById('list-push');
    var rmvLi = document.getElementById(e.target.value);
    listingPush.removeChild(e.target);
    listingPush.removeChild(rmvLi);
}

