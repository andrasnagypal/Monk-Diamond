function passwordCheck()
		{
			var password=document.getElementById("passwordBox");
			var writtenPassword=password.value;
			if (writtenPassword==="Ernest300")
			{
				return true;
			}
			alert("Access denied! Incorrect password!");
			return false;
		}
function toDoAddToList()
{
	var newItem=document.createElement("div");
	newItem.innerHTML=document.getElementById("box").value;
	newItem.onclick=deleteItem;
	document.getElementById("list").appendChild(newItem);
	saveList();
}
function deleteItem()
{
	document.getElementById("list").removeChild(this);
	saveList();
}
function saveList()
{
	localStorage.storedList=document.getElementById("list").innerHTML;
}
function loadList()
{
	document.getElementById("list").innerHTML=localStorage.storedList;
	for (var i=0;i<list.children.length;i++)
		list.children[i].onclick=deleteItem;
}