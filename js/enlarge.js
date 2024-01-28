function enlargeImage(e) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById('enlargedImg');
    let source = e.querySelector("img").src

    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    modalImg.src = source;
}

function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.visibility = 'hodden';
    modal.style.opacity = '0';
}