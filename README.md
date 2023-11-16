# BooksLibrary Website
###### IN PROCESS

![image](https://github.com/adelinetr/books-website/assets/119743518/3cf54d4e-fdc3-4be6-9ed7-e91e6c7a54ec)
![image](https://github.com/adelinetr/books-website/assets/119743518/4787e803-cbe7-4a19-81e2-a7d039ebaf52)
![image](https://github.com/adelinetr/books-website/assets/119743518/cd1e8577-3bed-4b85-a99f-0f1c813f44fa)


-  In this project I used Tailwind CSS and OpenLibrary API to fetch data and look for the names of any book in search field.

``` js
// Fetching data, iterating it and create separate elements where it should be viewed

async function searchBooks() {
    const output = document.getElementById('book-output');
    const input = document.getElementById('book-input').value;

    output.innerHTML = '';
    fetch('https://openlibrary.org/search.json?q='+input)
    .then(a => a.json()) // Convert response to an object
    .then(response => {
        for(let i=0; i<30; i++){
            output.innerHTML+= `
            <div class="w-44 h-65"> 
                        <img src="https://covers.openlibrary.org/b/isbn/`+response.docs[i].isbn[0]+`-M.jpg" alt="">
                        <h3 id="book-title">`+response.docs[i].title+`</h3>
                        <h4 id="book-author" class="text-gray-400">`+response.docs[i].author_name[0]+`</h4>  
            </div>
            `
        }
    });
}
```
