function f1(){
    var a = 78;
    f2();
    function f2(){
        console.log(a);   
    }
}
f1();