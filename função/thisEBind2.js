function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){ // dentro do setinterval tem um temporizador que vai ficar disparando essa função
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa