/* MODEL */
var cat_model = [
    {
        name: 'holly',
        img_loc: '/img/holly.jpg',
        click_num: 0
    },
    {
        name: 'floyd',
        img_loc: '/img/floyd.jpg',
        click_num: 0
    },
    {
        name: 'bud',
        img_loc: '/img/bud.jpg',
        click_num: 0
    },
    {
        name: 'nermal',
        img_loc: '/img/nermal.jpg',
        click_num: 0
    },
    {
        name: 'simba',
        img_loc: '/img/simba.jpg',
        click_num: 0
    }
];

var cat_box_view_model = {
    currCat: null,
    adminMode: false,
    name: null,
    img_loc: null,
    click_num: null
};

/* VIEW */
function render_cat_menu() {
    var cat_menu = document.getElementById('cat_menu');

    cat_menu.innerHTML = '';

    for(var i in cat_model) {
        // create item for cat_menu
        var item = document.createElement('li');
        item.innerHTML = cat_model[i].name;

        cat_menu.appendChild(item);

        item.addEventListener('click', (function(cat_name) {
            return function() {
                set_cat(cat_name);
                render_cat_box();
                render_admin_button();
            }
        })(cat_model[i].name));
    }

    return cat_menu;
}

function render_cat_box() {
    var currCat = cat_box_view_model.currCat;

    var cat_box = document.getElementById('cat_box');

    cat_box.innerHTML = '';

    var cat = document.createElement('div');
    cat.setAttribute('id', currCat.name);

    var cat_header = document.createElement('h2');
    cat_header.innerHTML = currCat.name;

    var cat_img = document.createElement('img');
    cat_img.setAttribute('src', currCat.img_loc);
    cat_img.setAttribute('alt', currCat.name);

    var counter = document.createElement('p');
    counter.setAttribute('id', 'counter');

    cat.appendChild(cat_header);
    cat.appendChild(cat_img);
    cat.appendChild(counter);

    cat.addEventListener('click', function() {
        count_click();
        render_counter();
    });

    cat_box.appendChild(cat);

    render_counter();

    return cat_box;
}

function render_counter() {
    var currCat = cat_box_view_model.currCat;

    var counter = document.getElementById('counter');
    counter.innerHTML = 'Clicks: ' + currCat.click_num;

    return counter;
}

function render_admin_button() {
    var admin_button = document.getElementById('admin_button');

    if(cat_box_view_model.currCat === null || cat_box_view_model.adminMode) {
        admin_button.style.display = 'none';
    } else {
        admin_button.style.display = '';
    }

    return admin_button;
}

function render_save_cancel_buttons() {
    var save_button = document.getElementById('save_button');
    var cancel_button = document.getElementById('cancel_button');

    if(cat_box_view_model.adminMode) {
        save_button.style.display = '';
        cancel_button.style.display = '';
    } else {
        save_button.style.display = 'none';
        cancel_button.style.display = 'none';
    }

    return [save_button, cancel_button];
}

function render_admin_form() {
    var admin_form = document.getElementById('admin_form');

    if(cat_box_view_model.adminMode) {
        admin_form.style.display = '';
    } else {
        admin_form.style.display = 'none';
    }

    return admin_form;
}

/* OCTOPUS */
function set_cat(cat_name) {
    for(var i in cat_model) {
        if(cat_model[i].name === cat_name) {
            cat_box_view_model.currCat = cat_model[i];
        }
    }

    init_admin_form();
}

function count_click() {
    var currCat = cat_box_view_model.currCat;

    ++currCat.click_num;
}

function enter_admin_mode() {
    cat_box_view_model.adminMode = true;
    init_admin_form();
    render_admin_form();
    render_admin_button();
    render_save_cancel_buttons();
}

function exit_admin_mode() {
    cat_box_view_model.adminMode = false;
    render_admin_form();
    render_admin_button();
    render_save_cancel_buttons();
}

function save_admin_data() {
    var currCat = cat_box_view_model.currCat;

    currCat.name = document.getElementById('name').value;
    currCat.img_loc = document.getElementById('img_loc').value;
    currCat.click_num = document.getElementById('click_num').value
    exit_admin_mode();

    render_cat_menu();
    render_cat_box();
}

function init_admin_form() {
    var currCat = cat_box_view_model.currCat;

    document.getElementById('name').value = currCat.name;
    document.getElementById('img_loc').value = currCat.img_loc;
    document.getElementById('click_num').value = currCat.click_num;
}

function setup() {
    render_cat_menu();
    render_admin_form();

    var admin_button = render_admin_button();
    admin_button.addEventListener('click', function() {
        enter_admin_mode();
    });

    var save_cancel_buttons = render_save_cancel_buttons();
    save_cancel_buttons[0].addEventListener('click', function() {
        save_admin_data();
    });
    save_cancel_buttons[1].addEventListener('click', function() {
        exit_admin_mode();
    });
}

setup();
