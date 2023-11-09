function HouseKeeper(name, age, gender, yearsOfExp, cleaningRepertoire) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.yearsOfExp = yearsOfExp;
    this.cleaningRepertoire = cleaningRepertoire;
    this.work = function () {
        alert("Cleaning in progress.");
        alert("Cleaning done.");
    }
}

var houseKeeper1 = new HouseKeeper("Melissa", 19, "female", 3, ["bedroom", "showerroom"]);
var houseKeeper2 = new HouseKeeper("Jane", 18, "female", 2, ["lobby", "kitchen"]);
