/*!* ------------------------------------ Example 1 ------------------------------------------------- *!*/
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
}

let liron_1 = new User('liron', '22');
console.log('liron -', liron_1);


/*!* ------------------------------------ Example 2 ------------------------------------------------- *!*/
class Personal {
    player(years) { console.log(this.name + ' play basketball ' + years + ' years.') }
    game() { console.log(this.name + '- 20 points') }
    lack_number = 'number 7';
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let liron = new Personal('liron', '22');
let tal = new Personal('tal', 21);
liron.player(12);
console.log('liron lack_number -', liron.lack_number);

let tal_player = liron.player.bind(tal);
tal_player(12);

liron.game();
liron.game.call(tal);
liron.player.call(tal, 10);

/*!* ------------------------------------ Example 3 ------------------------------------------------- *!*/
class Parson {
    constructor(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        let date = Date.now();
        this.creaate_pearson = date
    }
}

let person_1 = new Parson('liron', 22, '0509001805');
console.log(person_1);

/*!* ------------------------------------ Example 4 ------------------------------------------------- *!*/
class Animal{
    constructor(name){
        this.name = name

    }
    speak(speach){
        console.log(this.name,'say:',speach)
    }
}

class Dog extends Animal{
    speak(){
        console.log('dog say: avav')
    }
}

class Cat extends Animal{
}

class Fish extends Animal{
    speak(speach){
        super.speak(speach)
    }
}

let new_cat = new Cat('cat')
new_cat.speak('meow')
console.log('cat',new_cat);
let new_dog = new Dog('dog')
console.log('dog',new_dog);
new_dog.speak()
let new_fish = new Fish('fish')
console.log('fish',new_fish);
new_fish.speak('blabla')
console.log('dog instanceof Animal',new_dog instanceof Animal);
