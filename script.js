let photos = {};

function showPhotos(state, target_id) {
    currentState = state;
    currentId = target_id;
    
    const gallery = document.getElementById(target_id);
    gallery.innerHTML = '';

    photos[state].forEach(photo => {
        const container = document.createElement('div');
        container.className = 'picture_container';

        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.caption;
        img.style.cursor = 'pointer';

        img.onload = () => {
            const isHorizontal = img.naturalWidth >= img.naturalHeight;

            const container = document.createElement('div');
            container.className = isHorizontal ? 'picture_container_horizontal' : 'picture_container_vertical';

            img.onclick = () => {
                window.location.href =
                    `picture_page.html?photo=${encodeURIComponent(photo.src)}&caption=${encodeURIComponent(photo.caption)}&description=${encodeURIComponent(photo.description)}`;
            };

            const caption = document.createElement('h5');
            caption.textContent = photo.caption;

            container.appendChild(img);
            container.appendChild(caption);

            gallery.appendChild(container);
        };
    });
}

function showPopup() {
    const modal = document.getElementById("menu_modal");
    if (modal) {
        modal.style.display = "flex";
    }
}

function closePopup() {
    const modal = document.getElementById("menu_modal");
    if (modal) {
        modal.style.display = "none";
    }
}

window.onload = () => {
    fetch('pictures.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            photos = data;

            showPhotos(currentState, currentId);
        })
};
