 let notes = JSON.parse(localStorage.getItem("notes")) || [];

    function displayNotes() {
        const container = document.getElementById("notesContainer");
        container.innerHTML = "";

        notes.forEach((note, index) => {
            container.innerHTML += `
                <div class="note">
                    <p>${note}</p>
                    <div class="note-buttons">
                        <button class="edit" onclick="editNote(${index})">Edit</button>
                        <button class="delete" onclick="deleteNote(${index})">Delete</button>
                    </div>
                </div>
            `;
        });
    }

    function addNote() {
        const input = document.getElementById("noteInput");
        const error = document.getElementById("errorMsg");

        if (input.value.trim() === "") {
            error.style.display = "block";
            return;
        }

        error.style.display = "none";
        notes.push(input.value);
        localStorage.setItem("notes", JSON.stringify(notes));
        input.value = "";
        displayNotes();
    }

    function deleteNote(index) {
        notes.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(notes));
        displayNotes();
    }

    function editNote(index) {
        const updatedNote = prompt("Edit your note:", notes[index]);
        if (updatedNote !== null && updatedNote.trim() !== "") {
            notes[index] = updatedNote;
            localStorage.setItem("notes", JSON.stringify(notes));
            displayNotes();
        }
    }

    displayNotes();