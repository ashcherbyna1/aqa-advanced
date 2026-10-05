function cbFunction(randomText, miliseconds) {
    const callback = function () {
        console.log(randomText);
    };
    setTimeout(callback, miliseconds);
}
cbFunction('Lorem Ipsum is simply dummy text of the printing and typesetting industry', 1000);
