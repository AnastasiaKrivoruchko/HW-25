function Person(name, age) {
	this.name = name;
	this.age = age;
	this.getInfo = function() {
		return `Name: ${this.name}, age: ${this.age}`;
	}
}

const Jane = new Person('Jane', 25);
console.log(Jane.getInfo());

const Robert = new Person('Robert', '45');
console.log(Robert.getInfo());

const Alex = new Person('Alex', 16);
console.log(Alex.getInfo());

function Car(brand, model, year, license) {
	this.brand = brand;
	this.model = model;
	this.year = year;
	this.license = license;
	this.assignOwner = function (owner) {
        if (owner.age >= 18) {
            this.owner = owner;
        } else {
			console.log(`${owner.name} is under 18.`);
        }
		    return owner
	}
	this.getInfo = function () {
        let info = `Car: ${this.brand} ${this.model}. Year: ${this.year}. Licence plate: ${this.license}.`;

        if (this.owner !== undefined) {
            return info + this.owner.getInfo();
        } else {
            return info + 'No owner.';
        }
    }
}

const Audi = new Car('Audi', 'A4', 2022, 'AX7777AX');

Audi.assignOwner(Jane); 
console.log(Audi.getInfo());

const Mitsubishi = new Car('Mitsubishi', 'ASX', 2022, 'AX9999AX');
Mitsubishi.assignOwner(Robert); 
console.log(Mitsubishi.getInfo());

const BMW = new Car('BMW', 'X5', 2022, 'AX5555AX');
BMW.assignOwner(Alex); 
console.log(BMW.getInfo());
