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
    fetch('https://openlibrary.org/search.json?q='+input)
    .then(a => a.json()) //convert response to an object
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

    console.log(output)
}

SEARCH_BTN.addEventListener('click', searchBooks)
INPUT.addEventListener('keypress', function(event) {
    if(event.key === 'Enter'){
        SEARCH_BTN.click();
    }
    }
)
