const users = [
   {name:"user1", password:"12345", active:false},
   {name:"user2", password:"123456", active:true},
]
   


document.getElementById("btn").addEventListener("click", function(){
    const usr = document.getElementById("user").value;
    const pw =  document.getElementById("pass").value;
    const msg = document.getElementById("msg");

    const user_id = users.find(x => x.name === usr);

    if(!user_id){
        msg.textContent = "このユーザーが存在しません✖";
        msg.className ="err"
        return;
    }

    if(!user_id.active){
        msg.textContent = "無効なアカウントです⚠";
        msg.className ="deactive";
        return;
    }

    if(user_id.password === pw){
        msg.textContent = "認証しました✅";
         msg.className ="ok";
    }else{
        msg.textContent = "パスワードがちがいます。";
        msg.className ="err"
    }

})