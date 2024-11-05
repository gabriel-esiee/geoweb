document.getElementById('modal-close').addEventListener('click', function(e){
    closeModal();
});

document.getElementById('modal-bg').addEventListener('click', function(e){
    closeModal();
});

function openModal() {
    document.getElementById('modal').classList.add('active');
}

function closeModal() {
    document.getElementById('modal').classList.remove('active');
}

