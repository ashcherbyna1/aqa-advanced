function numNumber(num) {
    console.log(num);

    if (num > 0) {
        numNumber(num - 1);
    }
}

numNumber(15);