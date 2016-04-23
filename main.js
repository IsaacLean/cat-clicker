/* DATA */
var cat_data = {
    holly: {
        img_loc: '/img/holly.jpg',
        click_num: 0
    },
    floyd: {
        img_loc: '/img/floyd.jpg',
        click_num: 0
    },
    bud: {
        img_loc: '/img/bud.jpg',
        click_num: 0
    },
    nermal: {
        img_loc: '/img/nermal.jpg',
        click_num: 0
    },
    simba: {
        img_loc: '/img/simba.jpg',
        click_num: 0
    }
};

/* RENDER */
function render_cat(cat_name_str, cat_box) {
    cat_box.innerHTML = '';

    var cat_name_str_capital = capitalize_str(cat_name_str);

    var cat = document.createElement('div');
    cat.setAttribute('id', cat_name_str);

    var cat_name = document.createElement('h2');
    cat_name.innerHTML = cat_name_str_capital;

    var cat_img = document.createElement('img');
    cat_img.setAttribute('src', cat_data[cat_name_str].img_loc);
    cat_img.setAttribute('alt', cat_name_str_capital);

    var click_counter = document.createElement('p');
    click_counter.innerHTML = 'Clicks: ' + cat_data[cat_name_str].click_num;

    cat.appendChild(cat_name);
    cat.appendChild(cat_img);
    cat.appendChild(click_counter);
    cat_box.appendChild(cat);

    cat.addEventListener('click', (function(cat_name_str, click_counter) {
        return function() {
            ++cat_data[cat_name_str].click_num;
            click_counter.innerHTML = 'Clicks: ' + cat_data[cat_name_str].click_num;
        }
    })(cat_name_str, click_counter));
}

function init_cat_clicker() {
    var cat_menu = document.getElementById('cat_menu');
    var cat_box = document.getElementById('cat_box');

    for(var key in cat_data) {
        var cat_name_str_capital = capitalize_str(key);

        // create item for cat_menu
        var item = document.createElement('li');
        item.innerHTML = cat_name_str_capital;

        cat_menu.appendChild(item);

        item.addEventListener('click', (function(cat_name_str) {
            return function() {
                render_cat(cat_name_str, cat_box);
            }
        })(key));
    }
}

/* UTIL */
function capitalize_str(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

init_cat_clicker();
