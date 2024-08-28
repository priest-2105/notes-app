const addBtn = document.getElementById('addBtn');
const notes_El = document.querySelector('.notes');
const edit_B = document.querySelector('.editbtn');
const delete_B = document.querySelector('.deletebtn');


const main = notes_El.querySelector('.main');
const textArea = notes_El.querySelector('textarea');


addBtn.addEventListener('click', () => {
    addNewNote();
})


function addNewNote() {
    const note = document.createElement('div');
    note.classList.add('note');

    
}



edit_B.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
})


textArea.addEventListener('input', (e) => {

    const { value } = e.target;

    main.innerHTML = marked(value);

});