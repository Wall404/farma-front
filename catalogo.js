const $valueSpan =  document.getElementsByClassName('valueSpan')
const $value = document.getElementById('slider11')
$valueSpan.html($value.val());
$value.on('input change', () => {

    $valueSpan.html($value.val());
});


function changeIcon(elem) {
    console.log(elem.firstElementChild.innerHTML)
    if (elem.firstElementChild.innerHTML === "+") {
        elem.firstElementChild.innerHTML = "-"
    }
    else {
        elem.firstElementChild.innerHTML = "+"
    }
}