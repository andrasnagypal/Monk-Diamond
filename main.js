var cycles=0;
var visibleCharacters=false;
var score=0;

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
function startGame()
{
	gamePlayLoop();
}
function gamePlayLoop()
{
	visibleCharacters=!visibleCharacters;
	characterCreation();	
	cycles++;
	alert(cycles);
	if (cycles<12)
	setTimeout(gamePlayLoop,visibleCharacters ? 1000 :3000);
else alert("Score: "+ score);
}

function characterCreation()
{
	var tablet=document.getElementById("board");
	var classSetter=visibleCharacters ? "character visible":"character hidden";
	for (var index=0;index<8;index++)
	{
		tablet.children[index].className=classSetter;
		tablet.children[index].innerHTML="";
		tablet.children[index].onclick=function(){
			score-=2;
		}
	}
	var rnd=Math.floor(Math.random()*7)+1;
	console.log(rnd);
	tablet.children[rnd].innerHTML="";
	tablet.children[rnd].onclick=function(){
			score+=1;
		}
		tablet.children[rnd].className=classSetter+ " thief";
}