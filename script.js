const addNoteBtn = document.getElementById('add-note-btn');
const deleteAllBtn = document.getElementById('delete-all-btn');
const notesContainer = document.getElementById('notes-container');
const searchBar = document.getElementById('search-bar');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Toggle Theme
themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeIcon.classList.toggle('fa-sun', !isDark);  // Show sun for light mode
    themeIcon.classList.toggle('fa-moon', isDark); // Show moon for dark mode
});

// Apply saved theme
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
    loadNotes();
});

// Create a new note
addNoteBtn.addEventListener('click', () => {
    createNote();
});

// Delete all notes
deleteAllBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to delete all notes?')) {
        notesContainer.innerHTML = '';  // Clear the notes container
        saveNotes();  // Update localStorage
    }
});

function createNote(content = '', bgColor = '#ffffff', textColor = '#000000') {
    const note = document.createElement('div');
    note.classList.add('note', 'p-4', 'rounded', 'shadow-lg', 'bg-white', 'dark:bg-gray-800', 'relative', 'border', 'border-gray-300', 'dark:border-gray-700');
    note.style.backgroundColor = bgColor;

    note.innerHTML = `
        <div class="formatting-tools flex gap-2 mb-2">
            <button class="bold-btn px-2 py-1 bg-gray-200 rounded">B</button>
            <button class="italic-btn px-2 py-1 bg-gray-200 rounded">I</button>
            <button class="underline-btn px-2 py-1 bg-gray-200 rounded">U</button>
        </div>
        <div class="color-pickers flex gap-2 mb-2">
            <label>
                BG:
                <input type="color" class="bg-color-picker" value="${bgColor}">
            </label>
            <label>
                Text:
                <input type="color" class="text-color-picker" value="${textColor}">
            </label>
        </div>
        <div contenteditable="true" class="note-content" style="color: ${textColor};">${content}</div>
        <button class="delete-btn absolute top-2 right-2 text-gray-500 hover:text-red-500">&times;</button>
    `;

    // Event Listeners
    const noteContent = note.querySelector('.note-content');

    // Formatting buttons
    note.querySelector('.bold-btn').addEventListener('click', () => {
        document.execCommand('bold');
    });
    note.querySelector('.italic-btn').addEventListener('click', () => {
        document.execCommand('italic');
    });
    note.querySelector('.underline-btn').addEventListener('click', () => {
        document.execCommand('underline');
    });

    // Color pickers
    note.querySelector('.bg-color-picker').addEventListener('input', (e) => {
        note.style.backgroundColor = e.target.value;
        saveNotes();
    });
    note.querySelector('.text-color-picker').addEventListener('input', (e) => {
        noteContent.style.color = e.target.value;
        saveNotes();
    });

    // Delete button
    note.querySelector('.delete-btn').addEventListener('click', () => {
        note.remove();
        saveNotes();
    });

    // Save content on input
    noteContent.addEventListener('input', saveNotes);

    notesContainer.appendChild(note);
    saveNotes();
}

// Save notes to localStorage
function saveNotes() {
    const notes = Array.from(notesContainer.children).map(note => ({
        content: note.querySelector('.note-content').innerHTML,
        bgColor: note.style.backgroundColor,
        textColor: note.querySelector('.note-content').style.color,
    }));
    localStorage.setItem('notes', JSON.stringify(notes));
}

// Load notes from localStorage
function loadNotes() {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    savedNotes.forEach(note => createNote(note.content, note.bgColor, note.textColor));
}

// Search functionality
searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    Array.from(notesContainer.children).forEach(note => {
        const content = note.querySelector('.note-content').textContent.toLowerCase();
        note.style.display = content.includes(query) ? '' : 'none';
    });
});