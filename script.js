let photos = {};
/*
const photos = {
    oregon: [
        { src: 'Pictures/Oregon/Blue_Mountains/anthony_lakes_snowshoeing.jpeg', caption: 'Nature 1' },
        { src: 'Pictures/Oregon/Blue_Mountains/anthony_lakes_snowshoeing.jpeg', caption: 'Nature 2' },
        { src: 'Pictures/Oregon/Blue_Mountains/anthony_lakes_snowshoeing.jpeg', caption: 'Nature 2' }
    ],
    washington: [
        { src: 'Pictures/Oregon/Blue_Mountains/anthony_lakes_snowshoeing.jpeg', caption: '1' },
        { src: 'Pictures/Oregon/Blue_Mountains/anthony_lakes_snowshoeing.jpeg', caption: '2' }
    ],
    california: [
        { src: 'Pictures/Oregon/Blue_Mountains/anthony_lakes_snowshoeing.jpeg', caption: 'City 1' },
        { src: 'Pictures/Oregon/Blue_Mountains/anthony_lakes_snowshoeing.jpeg', caption: 'City 2' }
    ]
};
*/
let currentState = 'oregon';

function showPhotos(state) {
    currentState = state;

    const gallery = document.getElementById('grid_content');
    gallery.innerHTML = '';

    photos[state].forEach(photo => {
        const container = document.createElement('div');
        container.className = 'picture_container';

        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.caption;
        img.style.cursor = 'pointer';

        img.onclick = () => {
            showFullImage(photo);
            window.location.hash = `#photo_${photo.src}`;
        };

        const caption = document.createElement('h5');
        caption.textContent = photo.caption;
        
        container.appendChild(img);
        container.appendChild(caption);

        gallery.appendChild(container);
    });
}

function showFullImage(photo) {
    const content = document.getElementById('main_content');
    content.innerHTML = `
        <div class="full_image">
            <img src="${photo.src}" alt="${photo.caption}">
        </div>
    `;

    const gallery = document.getElementById('grid_content');
    gallery.innerHTML = '';
}

window.onload = () => {
    fetch('pictures.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            photos = data;

            showPhotos(currentState);
        })
};
