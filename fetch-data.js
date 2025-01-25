// Define an asynchronous function to fetch and display user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the container where user data will be displayed
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        // Convert response to JSON
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold the user list
        const userList = document.createElement('ul');

        // Loop through each user and create an <li> element for their name
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name; // Set the user's name as the text content
            userList.appendChild(listItem); // Append the <li> to the <ul>
        });

        // Append the <ul> to the data container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle any errors that occur during the fetch
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Add an event listener to fetch data once the DOM content is loaded
document.addEventListener('DOMContentLoaded', fetchUserData);

