const color = document.querySelector('#color');
color.addEventListener('change', e => {
    document.documentElement.style.setProperty("--main-color", color.value)
});