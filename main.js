/* MODEL */
var cat_model = {
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

/* VIEW */
function render_cat_menu() {
    var cat_menu = document.getElementById('cat_menu');

    for(var key in cat_model) {
        // create item for cat_menu
        var item = document.createElement('li');
        item.innerHTML = key;

        cat_menu.appendChild(item);

        item.addEventListener('click', (function(key) {
            return function() {
                render_cat_box(key);
            }
        })(key));
    }

    return cat_menu;
}

function render_cat_box(cat_name) {
    var cat_box = document.getElementById('cat_box');

    cat_box.innerHTML = '';

    var cat = document.createElement('div');
    cat.setAttribute('id', cat_name);

    var cat_header = document.createElement('h2');
    cat_header.innerHTML = cat_name;

    var cat_img = document.createElement('img');
    cat_img.setAttribute('src', cat_model[cat_name].img_loc);
    cat_img.setAttribute('alt', cat_name);

    var counter = document.createElement('p');
    counter.setAttribute('id', 'counter');

    cat.appendChild(cat_header);
    cat.appendChild(cat_img);
    cat.appendChild(counter);

    cat.addEventListener('click', function() {
        count_click(cat_name);
        render_counter(cat_name);
    });

    cat_box.appendChild(cat);

    render_counter(cat_name);

    return cat_box;
}

function render_counter(cat_name) {
    var counter = document.getElementById('counter');
    counter.innerHTML = 'Clicks: ' + cat_model[cat_name].click_num;

    return counter;
}

/* OCTOPUS */
function change_cat(cat_name) {
    render_cat(cat_name);
}

function count_click(cat_name) {
    ++cat_model[cat_name].click_num;
}

render_cat_menu();
