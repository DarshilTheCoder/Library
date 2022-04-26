console.log('welcome to library project');

//constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display() {

}


// Add methods to display prototype
// method for adding
Display.prototype.add = function (book) {
    console.log("adding to ui");
    tableBody = document.getElementById('tableBody');
    let uiString = ` <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
    tableBody.innerHTML += uiString;
}

// method for clear
Display.prototype.clear = function () {
    let LibraryForm = document.getElementById('LibraryForm');
    LibraryForm.reset()
}

// method  for validation
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

// method for showing the message 
Display.prototype.show = function (type , displayMessage) {
    let messageShow = document.getElementById('message');
    messageShow.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Messge:</strong> ${displayMessage}
                            </div>`;

    setTimeout(() => {
        messageShow.innerHTML = "";
    }, 2000);
}

//Add submit 
let libraryForm = document.getElementById('LibraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let programming = document.getElementById('Programming');
    let fiction = document.getElementById('Fiction');
    let cooking = document.getElementById('Cooking');

    if (programming.checked) {
        type = programming.value;
    }
    else if (fiction.checked) {
        type = fiction.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success','your book added succesfully');
    }
    else {
        display.show('danger','sorry your book not added');
    }


    e.preventDefault();
}
