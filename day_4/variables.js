function f() {
    var a = 34;
    f2();
    function f2() {
        console.log(a);     
        var b = 65;
        f3();
        function f3() {
            var c = 12;
            console.log(b);
            f4();
            function f4() {
                console.log(a);
                console.log(b);
                console.log(c);
            }

        }
    }
}
f();

