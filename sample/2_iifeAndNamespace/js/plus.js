(function (app) {
    var element = document.querySelector("#plus")

    function plus(a, b) {
        return a + b;
    }

    function plusPrint(data) {
        element.innerHTML = data;
    }

    app.plus = plus;
    app.plusPrint = plusPrint;
})(myApp)