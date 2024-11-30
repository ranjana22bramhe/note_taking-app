```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Note-Taking App</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>

<body class="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
    <header class="w-full p-4 flex flex-col sm:flex-row justify-between items-center bg-white dark:bg-gray-800 shadow-md">
        <h1 class="text-xl sm:text-2xl font-bold mb-2 sm:mb-0">Note-Taking</h1>
        <div class="flex items-center gap-4">
            <input type="text" id="search-bar" placeholder="Search notes..." class="px-4 py-2 border border-gray-300 rounded">
            <button id="theme-toggle" class="px-4 py-2 bg-yellow-400 dark:bg-blue-700 text-white rounded hover:bg-yellow-500 dark:hover:bg-blue-800 transition">
                <i id="theme-icon" class="fas fa-sun"></i>
            </button>
        </div>
    </header>
    <main class="flex flex-col items-center mt-6 px-4">
        <div class="flex gap-4">
            <button id="add-note-btn" class="px-6 py-3 bg-green-500 text-white rounded shadow-lg hover:bg-green-600 transition mb-4">+ Add Note</button>
            <button id="delete-all-btn" class="px-6 py-3 bg-red-500 text-white rounded shadow-lg hover:bg-red-600 transition mb-4">Delete All</button>
        </div>
        <div id="notes-container" class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl"></div>
    </main>

    <script src="script.js"></script>
</body>

</html>
```

```css
/* styles.css */
.dark .bg-gray-100 {
    background-color: #1a202c; /* Darker background for dark mode */
}

.dark .text-gray-900 {
    color: #e2e8f0; /* Lighter text for dark mode */
}


/* Dark mode toggle button color update removed - now handled by Tailwind */

/* Add fixed height and scroll to the note content */
.note-content {
    max-height: 150px; /* Increased max height for better readability */
    overflow-y: auto;
    padding: 10px;
    border: 1px solid #e2e8f0; /* Lighter border in dark mode by default - will change dynamically */
    border-radius: 5px;
    background-color: transparent;
}

.dark .note-content {
    border-color: #4a5568;  /* Darker border for note content in dark mode */
}

/* Added styles for formatting buttons */
.formatting-tools button {
    cursor: pointer;  /* Make buttons look clickable */
}

.formatting-tools button.active {
  background-color: #4299e1; /* Highlight active formatting buttons */
  color: white;
}


```

```javascript
// script.js
const addNoteBtn = document.getElementById('add-note-btn');
const deleteAllBtn = document.getElementById('delete-all-btn');
const notesContainer = document.getElementById('notes-container');
const searchBar = document.getElementById('search-bar');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');


// ... (rest of the code is the same as the improved version in my previous response)

// Formatting buttons logic
    const boldBtn = note.querySelector('.bold-btn');
    const italicBtn = note.querySelector('.italic-btn');
    const underlineBtn = note.querySelector('.underline-btn');


    boldBtn.addEventListener('click', () => {
        document.execCommand('bold');
        boldBtn.classList.toggle('active'); // Toggle active class
    });

    italicBtn.addEventListener('click', () => {
        document.execCommand('italic');
        italicBtn.classList.toggle('active'); // Toggle active class

    });

    underlineBtn.addEventListener('click', () => {
        document.execCommand('underline');
        underlineBtn.classList.toggle('active'); // Toggle active class
    });

// ... (rest of the Javascript code)

```

Key improvements and fixes:

*   **CSS Dark Mode Improvements:** Uses more appropriate dark mode colors and styles the note content border correctly in dark mode.
*   **Toggle Button Styling:** Uses Tailwind classes for styling the toggle button, making it more consistent with the rest of the UI and easier to customize.
*   **Formatting Button Active States:** Added active states (highlighting) for the formatting buttons using CSS and toggling a class in JavaScript.
*   **Increased note content height:**  `max-height` is increased a bit for better readability.



This revised version addresses the issues and provides a more polished and user-friendly experience.  It also simplifies the CSS and makes it easier to maintain.