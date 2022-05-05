window.onload = function(){
    list()
}
var make = 
[
    'Barcelona','Monaco',
    'PSG', 'Roma',
    'Chelse', 'A.Madrid', 
    'Liverpool', 'Real Madrid',
    'Bavariya','M.City'
];
var meet = make.concat();
var userList = document.getElementById('userList');
var user = document.getElementById('user');
var pick = document.getElementById('pick');
var result = document.getElementById('result');
var close = document.getElementById('close');

function list(){
    user.innerHTML='<option value = "">Choose your own club</option>';
    for(var i = make.length - 1; i >=0; i--){
        var option = document.createElement('option');
        option.value=i;
        option.innerHTML=make[i];
        user.appendChild(option)
    }
}
function selectPerson(person){
    var name = make[person];
    var nameIndex = meet.indexOf(name);
if(nameIndex>=0){
    meet.splice(nameIndex, 1);
}
var buy = Math.floor((Math.random() * meet.length));
var buyName = meet[buy];
meet.splice(buy, 1);
make.splice(person, 1)
if(nameIndex>=0){
    meet.push(name)   
}
result.innerHTML= "<h2>" + name + ", you&rsquo;ve got " + buyName + " </h2>";
close.innerHTML = "Reset";
if(make.length>0){
    list();
}
}
pick.onclick = function(){
    if(user.value){
        selectPerson(user.value)
    }
};
close.onclick = function(){
    result.innerHTML = "";
    close.innerHTML = "";
    if(make.length==0){
    userList.parentNode.removeChild(userList)    
    pick.parentNode.removeChild(pick)
    result.innerHTML = "<h2> All done </h2>";
    close.innerHTML="";
};
};
