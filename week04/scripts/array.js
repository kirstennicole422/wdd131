let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];
let namesB = names.filter(checkNames(names)) 

function checkNames(name) {
    if (name[0] == "B") {
        return name;
    }
}

let namesLength = names.map((names) => names.length);


names.reduce((names) => averageStringLength(names));

}