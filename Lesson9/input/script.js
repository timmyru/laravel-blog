let age = document.getElementById('age');
let name = prompt('Your name', 'Ivan'),
    surname = prompt('Your surname', 'Ivanov');

age.addEventListener('input', function () {
    showUser.apply(age, [name, surname]);
});


function showUser(surname, name) {
    console.log(`Пользователь ${surname} ${name}, его возраст ${this.value}`);
}