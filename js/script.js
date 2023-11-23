const SEARCH_BTN = document.getElementById('search-btn')
const INPUT = document.getElementById('book-input')

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    function navToggle() {
        btn.classList.toggle('open');
        menu.classList.toggle('flex');
        menu.classList.toggle('hidden');
        btn.classList.toggle('text-white');
    }

    btn.addEventListener('click', navToggle);
});


async function searchBooks() {
    const output = document.getElementById('book-output');
    const input = document.getElementById('book-input').value;

    output.innerHTML = '';
    fetch('https://openlibrary.org/search.json?q=' + input)
        .then(a => a.json()) // convert response to an object
        .then(response => {
            for (let i = 0; i < 30; i++) {
                const coverId = response.docs[i].cover_i || response.docs[i].cover;

                // Check if the book has a cover image and its size is at least 30x30 pixels
                if (coverId) {
                    const coverUrl = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
                    const coverSizeUrl = `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;

                    // Check the cover size by loading it and checking the natural width and height
                    const img = new Image();
                    img.src = coverSizeUrl;

                    img.onload = function () {
                        if (img.naturalWidth >= 220 && img.naturalHeight >= 280) {
                            output.innerHTML += `
                                <div> 
                                    <img class='book-cover' src="${coverUrl}" alt="">
                                    <h3 id="book-title">${response.docs[i].title}</h3>
                                    <h4 id="book-author" class="text-gray-400">${response.docs[i].author_name[0]}</h4>  
                                </div>

                                <style>
                                .book-cover {
                                    width: 200px; 
                                    height: 280px; 
                                    object-fit: cover;
                                }
                                </style>
                            `;
                        }
                    };
                }
            }
        });
}


SEARCH_BTN.addEventListener('click', searchBooks)
INPUT.addEventListener('keypress', function(event) {
    if(event.key === 'Enter'){
        SEARCH_BTN.click();
    }
    }
)
