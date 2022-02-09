var menutoggle = document.querySelector('.toggle')
menutoggle.onclick = function () {
    menutoggle.classlist.toggle('active')
}



// add active class in selected list item
var list = document.querySelectorAll('.list');
for (let i = 0; i < list.lenght; i++) {
    list[i].onclick = function () {
        let j = 0;
        while (j < list.lenght) {
            list[j++].className = 'list';
        }
        list[i].className = 'list active';
    }
}