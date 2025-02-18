var $select = document.querySelector('#type');
var $etc1 = document.querySelector('#etc1');
var $etc2 = document.querySelector('#etc2');
var $divService = document.querySelector('#div-service');

const $confirmreserve = document.querySelector('#confirm_reserve');
const $step01 = document.querySelector('#step01');
const $step02 = document.querySelector('#step02');


$select.addEventListener('change', function (e) {
    if (e.target.value === 'jim-keep') {
        $etc1.classList.remove('hidden');
        $etc2.classList.add('hidden');
    }
    else if (e.target.value === 'jim-move') {
        $etc2.classList.remove('hidden');
        $etc1.classList.add('hidden');
    }
    else {
        $etc1.classList.add('hidden');
        $etc2.classList.add('hidden');
    }
});

$confirmreserve.addEventListener('click', function (e) {
    $step01.classList.add('hidden');
    $step02.classList.remove('hidden');
})