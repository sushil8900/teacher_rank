// Simulated data for tutors
const tutors = [
    { name: "Abhinay", topic: "Mathematics", rating: 4.8 },
    { name: "Aarti", topic: "Science", rating: 4.6 },
    { name: "Alice Johnson", topic: "History", rating: 4.9 },
    { name: "Dr. Mahak", topic: "dbms", rating: 4.8 },
    { name: "Gate smasher", topic: "software engineering", rating: 5.0 },
    { name: "Mrs. Harpreet", topic: "data structure", rating: 4.9 },
    // Add more tutor data here
];

const searchForm = document.getElementById("search-form");
const topicInput = document.getElementById("topic");
const resultsContainer = document.getElementById("results");

searchForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const searchTerm = topicInput.value.toLowerCase();

    // Filter tutors based on the topic
    const filteredTutors = tutors.filter((tutor) =>
        tutor.topic.toLowerCase().includes(searchTerm)
    );

    displayResults(filteredTutors);
});

function displayResults(tutors) {
    resultsContainer.innerHTML = "";

    if (tutors.length === 0) {
        resultsContainer.innerHTML = "<p>No tutors found.</p>";
        return;
    }

    tutors.forEach((tutor) => {
        const tutorCard = document.createElement("div");
        tutorCard.classList.add("tutor-card");
        tutorCard.innerHTML = `
            <h3>${tutor.name}</h3>
            <p>Teaches: ${tutor.topic}</p>
            <p>Rating: ${tutor.rating}</p>
        `;
        resultsContainer.appendChild(tutorCard);
    });
}
