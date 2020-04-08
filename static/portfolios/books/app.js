// Book Constructor
function Book(title, author, isbn) {
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add book to list
UI.prototype.addBookToList = function(book) {
	const list = document.getElementById('book-list');

	// Create tr element
	const row = document.createElement('tr');
	// Insert Cols
	row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</a></td>
  `;
	// Append to list
	list.appendChild(row);
};

// Show Alert
UI.prototype.showAlert = function(message, className) {
	// Create Div
	const div = document.createElement('div');
	// Add class
	div.className = `alert ${className}`;
	// Add text
	div.appendChild(document.createTextNode(message));
	// Get parent
	const container = document.querySelector('.container');
	const form = document.querySelector('#book-form');
	// Insert alert
	container.insertBefore(div, form);

	// Timeout after 3 seconds
	setTimeout(function() {
		document.querySelector('.alert').remove();
	}, 3000);
};

// Delete Book
UI.prototype.deleteBook = function(target) {
	if (target.className === 'delete') {
		target.parentElement.parentElement.remove();
	}
};

// Clear Fields
UI.prototype.clearFields = function() {
	document.getElementById('title').value = '';
	document.getElementById('author').value = '';
	document.getElementById('isbn').value = '';
};

// Local Storage Class
UI.prototype.getBooks = function() {
	let books;
	if (localStorage.getItem('books') === null) {
		books = [];
	} else {
		books = JSON.parse(localStorage.getItem('books'));
	}

	return books;
};

UI.prototype.displayBooks = function() {
	const books = UI.prototype.getBooks();

	books.forEach(function(book) {
		const ui = new UI();

		// Add book to ui
		ui.addBookToList(book);
	});

	UI.prototype.addBook = function(book) {
		const books = UI.prototype.getBooks();

		books.push(book);

		localStorage.setItem('books', JSON.stringify(books));
	};

	UI.prototype.removeBook = function(isbn) {
		const books = UI.prototype.getBooks();

		books.forEach(function(book, index) {
			if (book.isbn === isbn) {
				books.splice(index, 1);
			}
		});
		// Set storage again
		localStorage.setItem('books', JSON.stringify(books));
	};
};

// DOM Load Event Listener. (to actually listen for get from LS)
document.addEventListener('DOMContentLoaded', UI.prototype.displayBooks());

// Event Listener for Add Book
document.querySelector('#book-form').addEventListener('submit', function(e) {
	// Get Form Values
	const title = document.getElementById('title').value,
		author = document.getElementById('author').value,
		isbn = document.getElementById('isbn').value;

	// Instntiate Book
	const book = new Book(title, author, isbn);

	// Instntiate UI
	const ui = new UI();

	// Validate  - added later
	if (title === '' || author === '' || isbn === '') {
		// Error alert
		ui.showAlert('Please fill in  all fields', 'error');
	} else {
		// Add book to the list
		ui.addBookToList(book);

		// Add book to localstorage
		UI.prototype.addBook(book);

		// Show success (message, className)
		ui.showAlert(`${book.title} by ${book.author} added!`, 'success');

		// Clear input after submit
		ui.clearFields();
	}

	e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e) {
	// Instntiate UI
	const ui = new UI();

	// Delete Book
	ui.deleteBook(e.target);

	// Remove from LS
	UI.prototype.removeBook(
		e.target.parentElement.previousElementSibling.textContent
	);

	// Show alert
	ui.showAlert('Book was Removed!', 'info');

	e.preventDefault();
});
// Converted ES6 into ES5 local storage items
// Basically UI.prototype.NAME function()
// class className { static NAME() {}}
// className instead of UI.prototype
