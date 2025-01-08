function check(){
    var phone=document.getElementById("phone").value;
    if(!phone){
        alert("enter the phone number first!");
        return false;
    }
    var regphone=new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$");
    if(!regphone.test(phone)){
        alert("validation is wrong.");
        return false;
    }
}