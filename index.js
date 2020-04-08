function Cat(name) {
    this.name = name
    this.cost = 50
}
Cat.prototype.voice = function() {
    console.log( `my name is ${this.name}`)
}
const cat = new Cat('cotik')
cat.voice()

