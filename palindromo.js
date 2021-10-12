function verificaPalindromo(string){
    if(!string) console.log("Entre uma palavra válida")

    console.log(string.split("").reverse().join("") === string)
}

verificaPalindromo("osso");

// verifica apenas se uma palavra é um palíndromo.