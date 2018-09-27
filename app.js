function Player() {
    this.name = "";
    this.life = 100;
    this.giveLife = function (targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + " gave you a life to " + targetPlayer.name);
    }
}

var amr = new Player()
var mohsen = new Player()

amr.name = "Amr"
mohsen.name = "Mohsen"

amr.giveLife(mohsen)

console.log(amr.life)
console.log(mohsen.life)
