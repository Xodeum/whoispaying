var names = [];

function addName() {
    var nameInput = document.getElementById('nameInput');
    var name = nameInput.value.trim();
    if (name) {
        names.push(name);
        updateNameList();
        nameInput.value = '';
    }
}

function updateNameList() {
    var nameList = document.getElementById('nameList');
    nameList.innerHTML = '';
    names.forEach(function(name) {
        var li = document.createElement('li');
        li.textContent = name;
        nameList.appendChild(li);
    });
}

function whosPaying() {
    if (names.length === 0) {
        document.getElementById('result').textContent = 'Please add some names first!';
        return;
    }

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    document.getElementById('result').textContent = randomPerson + ' is going to buy lunch today!';
}
