const faqList = document.getElementById('faq-list');
const loadMoreBtn = document.getElementById('load-more-btn');
let start = 0;
const limit = 10;
  
async function fetchRecords() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`);
    const data = await response.json();
    return data;
}

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
    faqItem.querySelector('.answer').classList.toggle('active');
    });
    faqList.appendChild(faqItem);
    });
    start += limit;
}

    loadMoreBtn.addEventListener('click', renderRecords);
  
    renderRecords();

  