(function (app) {
    var element = document.querySelector("#minus")

    function minus(a, b) {
        return a - b;
    }

    function minusPrint(data) {
        element.innerHTML = data;
    }

    app.minus = minus;
    app.minusPrint = minusPrint;
})(myApp)
