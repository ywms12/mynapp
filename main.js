const opn = document.getElementById('show');
const cls = document.getElementById('hide');
const ul = document.getElementById('u1');
opn.addEventListener('click', function() {
    opn.style.display = 'none';
    ul.style.display = 'block';
});
cls.addEventListener('click', function() {
    ul.style.display = 'block';
    opn.style.display = 'none';
});