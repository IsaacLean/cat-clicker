var clickNum = 0;
var cat_pic = document.getElementById('cat_pic');
var counter = document.getElementById('counter');

cat_pic.addEventListener('click', function() {
    ++clickNum;
    counter.innerHTML = clickNum;
});
