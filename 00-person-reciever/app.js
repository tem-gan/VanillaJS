const myform = document.querySelector('#myform');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const usersList = document.querySelector('#users');

myform.addEventListener('submit', onSubmit);

function onSubmit(e) {

    e.preventDefault();
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${firstname.value}:${lastname.value}`));

    usersList.appendChild(li);

    fetch('http://localhost:8080/person', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstname: firstname.value, lastname: lastname.value })
    });

    //clear
    firstname.value = '';
    lastname.value = '';
}

function fetchPeople() {
    fetch('http://localhost:8080/person/all')
        .then(function (response) {
            response.json().then(data => {
                data.map((item, idx) => {

                    const li = document.createElement('li');
                    li.appendChild(document.createTextNode(item.firstname + ':' + item.lastname));

                    usersList.appendChild(li);
                    //user edit button
                    let btn = document.createElement("button");
                    btn.innerHTML = "delete";
                    usersList.appendChild(btn);
                    btn.addEventListener('click', function () {
                        fetch('http://localhost:8080/person/13', { method: 'DELETE' })
                            .then(() => this.setState({ status: 'Delete successful' }));
                    });


                })
            })
        })
        .then(function (myJson) {
            console.log(myJson);
        });
}

function deletePerson() {
    
}