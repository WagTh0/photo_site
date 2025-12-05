let photos = {};

fetch('oregonpictures.json')
    .then(response => response.json())
    .then(data => {
        photos = data;

        showPhotos('cascades', 'grid_content1');
        showPhotos('wallowa', 'grid_content2');
        showPhotos('blue_mountains', 'grid_content3');
        showPhotos('other_oregon', 'grid_content4');
    })
    .catch(error => {
        console.error('Error loading photos:', error);
    });
    
function showPhotos(state, target_id) {
    const gallery = document.getElementById(target_id);
    gallery.innerHTML = '';

    if (!photos[state]) {
        console.warn(`No photos found for state: ${state}`);
        return;
    }

    photos[state].forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.caption;
        img.style.cursor = 'pointer';

        img.onclick = () => {
            window.location.href = `picture_page.html?id=${photo.id}`;
        };

        const caption = document.createElement('h5');
        caption.textContent = photo.caption;

        const container = document.createElement('div');
        container.className = 'picture_container_horizontal';

        img.onload = () => {
            const isHorizontal = img.naturalWidth >= img.naturalHeight;
            container.className = isHorizontal
                ? 'picture_container_horizontal'
                : 'picture_container_vertical';
        };

        container.appendChild(img);
        container.appendChild(caption);
        gallery.appendChild(container);
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
