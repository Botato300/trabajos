resolverDesafioBino([2, 5, 4, 20, 10]);

function contarMultiplosDe2(n) {
    let count = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

function contarMultiplosDe3(n) {
    let count = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 3 === 0) {
            count++;
        }
    }
    return count;
}

function contarMultiplosDe4(n) {
    let count = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 4 === 0) {
            count++;
        }
    }
    return count;
}

function contarMultiplosDe5(n) {
    let count = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 5 === 0) {
            count++;
        }
    }
    return count;
}

function resolverDesafioBino(numbers) {
    const multiplosDe2 = contarMultiplosDe2(numbers);
    const multiplosDe3 = contarMultiplosDe3(numbers);
    const multiplosDe4 = contarMultiplosDe4(numbers);
    const multiplosDe5 = contarMultiplosDe5(numbers);

    console.log(`${multiplosDe2} Multiplo(s) de 2`);
    console.log(`${multiplosDe3} Multiplo(s) de 3`);
    console.log(`${multiplosDe4} Multiplo(s) de 4`);
    console.log(`${multiplosDe5} Multiplo(s) de 5`);
}
