const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}

funcs[2]();
funcs[8]();
// pelo fato de var não ter escopo de função ele vai imprimir 10 para todas as chamadas de funcs