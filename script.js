const items = document.querySelectorAll('.card');

document.querySelector('#startertBtn').addEventListener('click', function() {
    items.forEach(item => {
        if (item.id != 'starter') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#lunchBtn').addEventListener('click', function() {
    items.forEach(item => {
        if (item.id != 'lunch') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#sandBtn').addEventListener('click', function() {
    items.forEach(item => {
        if (item.id != 'sand') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#dinnerBtn').addEventListener('click', function() {
    items.forEach(item => {
        if (item.id != 'dinner') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});

document.querySelector('#allBtn').addEventListener('click', function() {
    items.forEach(element => {
        element.style.display = 'grid';
    });
})