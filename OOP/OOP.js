class Color {
    constructor(r,g,b, name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }
    greet(){
        return `HELLO ${this.name}`
    }
}

const c = new Color(1,2,3, "purple");
console.log(c.greet());

