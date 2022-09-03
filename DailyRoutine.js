var arr=[];
var addData=document.getElementById('addData');

/*adding values*/
   function add(){
         data=document.getElementById('Add').value;
         if(data=="") {
            document.getElementById("InputError").innerHTML="Can not be empty";
            document.getElementById("InputError").style.color="red";
         }
         else{
            document.getElementById("InputError").style.display="none";
            arr.push(data);
            populate();    
         }
    }
     

/*printing values*/
function populate(){
    text="";
    for(i=0;i<arr.length;i++){
        text+="<div class='flexItem'><div class='item1'><label class='Add'><input type='checkbox' class='tick' onclick='checkedItem(this)' >"+arr[i]+"</label></div><div class='item2'><i class='fa fa-pencil-square-o fa-2x' aria-hidden='true' onclick='Edit(this)'></i></div><div class='item3' ><i class='fa fa-trash fa-2x' aria-hidden='true' onclick='Delete(this)'></i></div></div>";
     }
    document.getElementById('InCompleteTask').style.display="block"
    document.getElementById('display').style.display="block"
    document.getElementById('display').innerHTML=text;
    txt="<button  id='btn' onclick='allDelete()'>Empty To Do</button>";
    document.getElementById('display').innerHTML+=txt;
}
/*Empty todo*/
function allDelete(){
        var Confirmation=confirm("do you want to empty the todo list");
        if( Confirmation==true) {
            arr.splice(0,arr.length);
            populate(arr);   
        }
   
 
}
/*delete todo list*/
function Delete(args){
    let item=args.closest('.flexItem');
    let nodes=Array.from(item.closest('#display').children);
    let index=nodes.indexOf(item);
    var Confirmation=confirm("do you want to delete");
    if( Confirmation==true) {
        arr.splice(index,1);
        populate(arr);
     }
   
}
   
/*item checked*/
 function checkedItem(args){
    let item=args.closest('label');
    if(args.checked==true)
    item.style.textDecoration="line-through";
    else
    item.style.textDecoration="none";
}

 /*edit todo list*/   
function Edit(args){
    let item=args.closest('.flexItem');
    let nodes=Array.from(item.closest('#display').children);
    let index=nodes.indexOf(item);
    Confirmation=confirm("do you want to update value");
    if( Confirmation==true) {
        document.getElementById('Add').value=arr[index];
        document.getElementById('addData').innerHTML="Update To-Do";
        document.getElementById('addData').onclick=function(){update(index);}
     } 

}
/*update todo list*/
 function update(args){
        arr[args]=document.getElementById('Add').value;
        console.log(arr[args]);
        populate();
        document.getElementById('Add').value="";
        document.getElementById('addData').innerHTML="To do";
        document.getElementById('addData').onclick=function(){add(); }
 }




