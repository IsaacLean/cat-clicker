/* DATA */
var cat_data = {
    holly: {
        img_loc: '/img/holly.jpg',
        click_num: 0
    },
    floyd: {
        img_loc: '/img/floyd.jpg',
        click_num: 0
    }
};

/* RENDER */
function init_cats() {
    var cat_box = document.getElementById('cat_box');

    for(var key in cat_data) {
        var cat = document.createElement('div');
        cat.setAttribute('id', key);

        var cat_name = document.createElement('h2');
        var cat_name_str_capital = capitalize_str(key);
        cat_name.innerHTML = cat_name_str_capital;

        var cat_img = document.createElement('img');
        cat_img.setAttribute('src', cat_data[key].img_loc);
        cat_img.setAttribute('alt', cat_name_str_capital);

        var click_counter = document.createElement('p');
        click_counter.innerHTML = cat_data[key].click_num;

        cat.appendChild(cat_name);
        cat.appendChild(cat_img);
        cat.appendChild(click_counter);
        cat_box.appendChild(cat);

        cat.addEventListener('click', function(evt) {
            var cat_name_str_lowercase = evt.target.alt.toLowerCase();
            ++cat_data[cat_name_str_lowercase].click_num;
            document.querySelector('#' + cat_name_str_lowercase + ' p').innerHTML = cat_data[cat_name_str_lowercase].click_num;
        });
    }
}

/* UTIL */
function capitalize_str(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

init_cats();
