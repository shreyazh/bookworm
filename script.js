// Sample book data
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", image: "book1.jpg" },
    { title: "Sherlock Holmes", author: "Arthur Conan Doyle", category: "Mystery", image: "book2.jpg" },
    { title: "Harry Potter", author: "J.K. Rowling", category: "Fantasy", image: "book3.jpg" },
    { title: "Atomic Habits", author: "James Clear", category: "Non-fiction", image: "book4.jpg" },
    { title: "Pride and Prejudice", author: "Jane Austen", category: "Romance", image: "book5.jpg" }
];

// Function to filter books by category
function filterBooks(category) {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";  // Clear previous results

    const filteredBooks = books.filter(book => book.category === category);
    
    if (filteredBooks.length === 0) {
        bookList.innerHTML = "<p>No books found in this category.</p>";
        return;
    }

    filteredBooks.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book");
        bookItem.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <h4>${book.author}</h4>
        `;
        bookList.appendChild(bookItem);
    });
}

// Function to search books by title or author
function searchBooks() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";

    const searchedBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchInput) || 
        book.author.toLowerCase().includes(searchInput)
    );

    if (searchedBooks.length === 0) {
        bookList.innerHTML = "<p>No matching books found.</p>";
        return;
    }

    searchedBooks.forEach(book => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book");
        bookItem.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <h4>${book.author}</h4>
        `;
        bookList.appendChild(bookItem);
    });
}
