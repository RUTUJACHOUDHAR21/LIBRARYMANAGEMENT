const books = ["JavaScript Basics", "HTML & CSS", "Python Programming", "Data Structures", "Algorithms"];
const borrowedBooks = [];

function renderBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  books.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book;
    bookList.appendChild(li);
  });

  const borrowedList = document.getElementById("borrowedList");
  borrowedList.innerHTML = "";
  borrowedBooks.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.book} borrowed by ${entry.student} at ${entry.time}`;
    borrowedList.appendChild(li);
  });
}

function borrowBook() {
  const studentName = document.getElementById("studentName").value.trim();
  const bookTitle = document.getElementById("bookTitle").value.trim();
  const index = books.indexOf(bookTitle);

  if (studentName && index !== -1) {
    books.splice(index, 1);
    borrowedBooks.push({
      student: studentName,
      book: bookTitle,
      time: new Date().toLocaleTimeString()
    });
    renderBooks();
  } else {
    alert("Invalid student name or book title!");
  }
}

function returnBook() {
  const bookTitle = document.getElementById("bookTitle").value.trim();
  const index = borrowedBooks.findIndex(b => b.book === bookTitle);

  if (index !== -1) {
    books.push(borrowedBooks[index].book);
    borrowedBooks.splice(index, 1);
    renderBooks();
  } else {
    alert("Book not found in borrowed list!");
  }
}

window.onload = renderBooks;
