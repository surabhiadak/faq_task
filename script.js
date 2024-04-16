document.addEventListener('DOMContentLoaded', () => {
const faqList = document.getElementById('faq-list');
const loadMoreBtn = document.getElementById('load-more-btn');
let start = 0;
const limit = 10;
  
// Function to fetch records from the API 
    async function fetchRecords() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`);
    const data = await response.json();
    loadMoreBtn.style.display="block";
    return data;
}

// Function to render records on the page
    async function renderRecords() {
    const questions = await fetchRecords();
    questions.forEach(question => {
    const faqItem = document.createElement('li');
    faqItem.classList.add('faq-item');
    faqItem.innerHTML = `
        <div class="question">${question.title}</div>
        <div class="answer">${question.body}</div>
    `;
    faqItem.querySelector('.question').addEventListener ('click', () => {
    faqItem.querySelector('.question').classList.toggle('active');
    faqItem.querySelector('.answer').classList.toggle('active');
    });
    faqList.appendChild(faqItem);
    });
    start += limit;
}

    // Function to load more records 
    loadMoreBtn.addEventListener('click', () => {renderRecords();
    })

    // Initial rendering of records
    renderRecords();
});

 