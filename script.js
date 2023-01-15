function game1() {
    let numberM = Number(prompt('Введите число'));
    function seasons(num) {
        if (num <= 0 || num >= 13) {
            alert('Введите другое число');
        } else if (num === 1 || num === 2 || num === 12) {
            alert('Зима');
        }
        else if (num >= 3 && num <= 5) {
            alert('Весна');
        }
        else if (num >= 6 && num <= 8) {
            alert('Лето');
        }
        else if (num >= 9 && num <= 11) {
            alert('Осень');
        }
    }
    seasons(numberM);
}
function game2() {
    let fruit = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    word = fruit.sort(() => Math.random() - 0.5)
    alert(word);


    first = String(prompt('Чему равнялся первый фрукт?'));

    if (first.toLowerCase() === word[0].toLowerCase()) {
        alert('Поздравляю, вы угадали!')
    }
    else {
        alert('Вы не угадали.')
    }

    second = String(prompt('Чему равнялся последний фрукт?'));
    if (second.toLowerCase() === word[6].toLowerCase()) {

        alert('Поздравляю, вы угадали!');
    }
    else {
        alert('Вы не угадали.');
    }
}

function game3() {
    alert('Отгадайте загадку. У вас 3 попытки.');
    let solution = 'карандаш';
    let attempt = prompt('Задом исправляет ошибки головы. Что это?');

    for (let numberOfRepetitions = 1; numberOfRepetitions <= 1; numberOfRepetitions++) {
        if (attempt.toLowerCase() !== solution.toLowerCase()) {
            attempt = prompt('Это не правильный ответ. Попробуйте ещё раз. Подсказка: этим предметом часто пользуются школьники и студенты.');
            alert(attempt);
        } else {
            alert('Вы угадали!')
            break;
        }

        if (attempt.toLowerCase() !== solution.toLowerCase()) {
            attempt = prompt('Это не правильный ответ. Попробуйте ещё раз. Подсказка: Один конец этого предмета исправляет то, что делает другой конец');
            alert(attempt);
        } else {
            alert('Вы угадали!');
            break;
        }

        if (attempt.toLowerCase() !== solution.toLowerCase()) {
            alert('К сожалению, вы не угадали');
        } else {
            alert('Вы угадали!');
            break;
        }
    }
}