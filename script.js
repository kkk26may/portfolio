document.querySelector('.cross').style.display = 'none';

document.querySelector('.hamburger').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of anchor links

    const sidebar = document.querySelector('.sidebar');
    const list = document.querySelector('.list');
    const cross = document.querySelector('.cross');

    sidebar.classList.toggle('sidebargo');

    if (sidebar.classList.contains('sidebargo')) {
        list.style.display = 'inline';
        cross.style.display = 'none';
    } else {
        list.style.display = 'none';

        // Add a delay before showing the cross
        setTimeout(() => {
            cross.style.display = 'inline';
        }, 300);
    }
});
