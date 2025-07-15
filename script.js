let photos = {};
/*
const photos = {
    oregon: [
        { src: 'Pictures/Oregon/Blue_Mountains/anthony_lakes_snowshoeing.jpeg', group: 'Blue', caption: 'Nature 1' },
        { src: 'Pictures/Oregon/Blue_Mountains/anthony_lakes_snowshoeing.jpeg', group: 'Blue', caption: 'Nature 2' },
        { src: 'Pictures/Oregon/Blue_Mountains/anthony_lakes_snowshoeing.jpeg', group: 'Green', caption: 'Nature 2' }
    ],
    washington: [
        { src: 'Pictures/Oregon/Blue_Mountains/anthony_lakes_snowshoeing.jpeg', group: '', caption: '1' },
        { src: 'Pictures/Oregon/Blue_Mountains/anthony_lakes_snowshoeing.jpeg', group: '', caption: '2' }
    ],
    california: [
        { src: 'Pictures/Oregon/Blue_Mountains/anthony_lakes_snowshoeing.jpeg', group: '', caption: 'City 1' },
        { src: 'Pictures/Oregon/Blue_Mountains/anthony_lakes_snowshoeing.jpeg', group: '', caption: 'City 2' }
    ]
};
*/

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

        img.onclick = () => {
            window.location.href =
            `picture_page.html?photo=${encodeURIComponent(photo.src)}&caption=${encodeURIComponent(photo.caption)}&description=${encodeURIComponent(photo.description)}`;
        };
        
        const caption = document.createElement('h5');
        caption.textContent = photo.caption;
        
        container.appendChild(img);
        container.appendChild(caption);

        gallery.appendChild(container);
    });
}

/*
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
*/

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
