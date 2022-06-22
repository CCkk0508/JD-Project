//根据id获取页面元素
function $(elementId) {
    return document.getElementById(elementId);
}


function email_tip(){
    email_tip = $("email_tip");
    email_tip.style.visibility = "visible";
}
function password_tip(){
    password_tip = $("password_tip");
    password_tip.style.visibility = "visible";
}
function  phone_tip(){
    phone_tip = $("phone_tip");
    phone_tip.style.visibility = "visible";
}


//判断邮箱号是否合法
function checkEmail() {
    let email = $ ("email").value;
    let email_tip = $("email_tip");
    email_tip.innerHTML = "";
    const reg = /^[a-zA-Z\d]{6,18}$/;
    const reg1 = /^[a-zA-Z]\w{5,17}$/;
    if(reg.test(email) == false){
        email_tip.innerHTML = "长度应为6～18个字符";
        email_tip.style.color ="red";
        return  false;
    }
    else if(reg1.test(email) == false){
        email_tip.innerHTML = "邮箱地址需以字母开头";
        email_tip.style.color ="red";
        return false;
    }else{

        email_tip.style.visibility = "hidden";
        return true;
    }
}
//判断密码是否合法
function checkPassword(){
    let password = $ ("password").value;
    let password_tip = $("password_tip");
    password_tip.innerHTML = "";
    let reg = /^.{8,16}$/;
    if (reg.test(password) == false){
        password_tip.innerHTML = "密码长度应为8-16个字符";
        password_tip.style.color ="red";
        return false;
    }
    return true;
}
//判断电话号码是否合法
function checkPhone(){
    let  phone = $("phone").value;
    let phone_tip = $("phone_tip");
    phone_tip.innerHTML = "";
    let reg = /^1\d{10}$/;
    if (reg.test(phone) == false){
        phone_tip.innerHTML = "请填写正确的中国大陆地区手机号，其他地区请到网易帐号中心注册";
        phone_tip.style.color = "red";
        return false;
    }
    return true;
}

//验证所有内容
function checkAll(){
    if ( checkEmail() &&  checkPassword() && checkPhone()){
        return true;
    }else{
        return false;
    }
}