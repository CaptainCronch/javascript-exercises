function factorial(n, i = n - 1) {
    if (i <= 1) {return n}
    else {return factorial(n * i, i - 1)}
}