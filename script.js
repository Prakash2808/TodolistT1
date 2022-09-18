function addMore(){
    let name = document.getElementById('name').value;
    if(name==''){
        document.getElementById('error').innerHTML="Please enter value";
    }

    else{
        let box=document.getElementById('box');
        let li=document.createElement('li');
        li.textContent=name;

        let a=document.createElement('a');
        a.textContent="x";
        a.href="javascript:void(0)";
        li.appendChild(a);
        let pos=box.firstElementChild;
        //console.log(pos);
        if(pos==null){
            box.appendChild(li);
        }else{
        box.insertBefore(li,pos);
        }
    }
    document.getElementById('name').value="";
}
let btn=document.querySelector('ul');
btn.addEventListener('click',function(e){
    let box=document.getElementById('box');
    let li=e.target.parentNode;
    box.removeChild(li);

});