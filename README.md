# FAQ Page

## Introduction

This project is a FAQ page that displays a list of questions and corresponding answers dynamically fetched from an API. The questions and answers are retrieved from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) dummy endpoint. The page initially displays 10 records of questions and answers, and more records can be loaded by clicking on the "Load More" button. Please click on the below link to find how it looks: https://faqcodingtask.netlify.app/

## Installation

1. Clone the repository to the local machine.
2. Navigate to the project directory.
3. Open the `index.html` file in a web browser to view the FAQ page.

## Usage

1. Upon loading the page, there is a list of questions.
2. Click on a question to reveal its corresponding answer.
3. Click on the "Load More" button to load additional questions. This can be done until no more questions are left.

## Features

- Display questions and answers from an API.
- Collapsible answers for better readability and user experience.
- Load more functionality to get the additional questions.

## Implementation Details

### Requirements Gathering

As a UI developer, it is crucial to understand the exact content expected to appear on the web page. Then it is important to understand how easy it can be made for the end user to interact with the content on the web page. In this project, the rendering of the data fetched from API should be displayed in the list format is the primary goal. Additionally, Designing a button with Load More functionality to get more questions until no more questions left is another requirement.

### Design and Setup

After understanding the requirements, it is vital to think the design in mind. FAQ pages of the websites has been referred to understand the layout and design in more better way. The rough wireframe of the look and feel of the web page has been designed.

In approaching the development of the web page, initially the JavaScript came to mind. The data can be fetched from the provided API using fetch and rendering records dynamically on the webpage using eventListener is the first thing that came to mind. While thinking about other ways, Using React Hooks concept was another thing that came to mind. For this task, Javascript has been chosen for simple and straightforward things as this is the small project. If in the future, if the FAQ page grows in complexity then for scalability and state management React or other frameworks/libraries can be used. For the lightweightness and simplicity, plain Javascript has been chosen for this task. The `index.html`, `styles.css` and `script.js` files are created to start writing the logic.

### What does functionality do?

- In `index.html`, the structure and the content of the webpage is provided.
- In `styles.css`, the visual appearance and layout of the elements of the webpage is provided.
- In `script.js`, functionality to fetch the records from API and rendering records is provided.
- The `fetch()` API is used to retrieve questions and answers from the JSONPlaceholder endpoint.
- `fetchRecords()` function fetches data from the JSON placeholder API.
- `renderRecords()` function renders the fetched data into the FAQ list by creating li elements for each question and answer pair.
- Event listener attached to the load more button triggers the renderRecords function to fetch and render more records when clicked.
- Initial rendering of questions is triggered when the script is loaded.

### Testing
#### User Acceptance Testing (UAT)
The FAQ page was put through User Acceptance Testing (UAT) to make sure it fulfilled user needs and performed as intended. The tests listed below were carried out:
1. **Initial Page Load:**
   - Confirmed there were no issues with the page loading.
   - Made sure there were just ten questions visible at first.

2. **Question Expansion:**
   - Clicked on questions to check answers expanded and collapsed.
   - Testing was done on several simultaneous expansions and collapses

3. **Load More Functionality:**
    -  Clicked the "Load More" button to ensure 10 more questions were   appended.
   - Verified the button disappeared when no more entries were available.

4. **API Integration:**
   - Tested with different API response scenarios:
    - Empty response.
     - Error response.

5. **UI/UX Testing:**
   - Checked the layout and styling of the FAQ page.
   - Ensured the "Load More" button was functional and appropriately styled.
   - Collapse/expand animations were tested for smoothness.

### Deployment

- It is a small project so I hosted it on netlify free version: https://faqcodingtask.netlify.app/



## Future Optimization

If the FAQ page's complexity enhances further then there are few optimizations that can be considered to improve the performance. 

#### Debouncing Events: 
If the loadMoreBtn is clicked multiples times, it could cause multiple fetch requests. To prevent this delay can be setup on the event so that the fetch request is only sent after a pause preventing unnecessary requests. Debouncing is a technique used to make sure that a function is not triggered frequently beyond a limit usually done to avoid rapid firing of events, like pressing buttons or keys.

#### lazy loading
Few resources such as images or some font libraries if added in the future then lazy loading them can be considered to improve initial page load time and to prevent unnecessary loading. 

#### Virtual DOM Rendering
As the complexity of the webpage increases in future, instead of directly manipulating the DOM for each item, virtual DOM libraries like React.js or Vue.js can be used. Performance is improved by these libraries by effectively managing DOM updates and lowering reflows.

#### Reduce DOM Manipulation
The amount of DOM manipulation can be reduced by creating elements first and then adding them to the DOM using methods like document fragment.

#### Simplify CSS
To reduce rendering time, CSS styles should also be optimized in the future. 

#### Future Deployment
Later the FAQ project with the other functionalities, backend and database is developed. Then it can be containerized using Docker and can be deployed on kubernetes of any cloud server for the less downtime.
