//try...catch
//エラー検証を行う命令です

try{
    console.log(name)
}catch(error){
    console.log("メッセージ" + error.message)
}

//finally
//後処理を行う命令
try{
    console.log(name)
}catch(error){
    console.log("メッセージ" + error.message)
}finally{
    console.log("完了")
}
