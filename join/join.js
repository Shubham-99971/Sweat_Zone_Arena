function clickbtn(){
    var name1=document.getElementById("name1").value;
    var name2=document.getElementById("name2").value;
    var mail=document.getElementById("mail").value;
    var phone=document.getElementById("phone").value;
    var dob=document.getElementById("dob").value;
    if(document.getElementById("g1").checked){
        var gender="male";
    }else if(document.getElementById("g2").checked){
        var gender="female";
    }
    else{
        var gender="";
    }
    if(!name1 || !name2 || !mail || !phone || !gender){
        alert("please fill the required values!");
        return false;
    }
    var regname=new RegExp("^[a-zA-Z ]{2,30}$");
    var regmail=new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$");
    var regphone=new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$");
    if(!regname.test(name1)){
        alert("use only letters of length 2-30.");
        return false;
    }
    if(!regname.test(name2)){
        alert("use only letters of length 2-30.");
        return false;
    }
    if(!regmail.test(mail)){
        alert("mail validation is wrong.");
        return false;
    }
    if(!regphone.test(phone)){
        alert("use digits only of length 10.");
        return false;
    }
    if(!document.getElementById("checkbox").checked){
        alert("agree on terms and conditions to continue!");
    }
    document.getElementById("form5").addEventListener('submit',function(event){
        event.preventDefault();
        if(!confirm("do you want to submit")){
            return false;
        }
        const req=new XMLHttpRequest();
        req.open("post","join.php");
        req.send(new FormData(form5));
        alert("data submited!");
        document.getElementById('form5').reset();
    });
}