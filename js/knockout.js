var initialCats = [
    {
        clickCount: 0,
        name: 'Floyd',
        imgSrc: '/img/floyd.jpg',
        nicknames: ['Selfish', 'Orange', 'Whatever']
    },
    {
        clickCount: 0,
        name: 'Holly',
        imgSrc: '/img/holly.jpg',
        nicknames: ['Dumb', 'Poop', 'Fat']
    }
];

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.levels = ['Newborn', 'Infant', 'Teen'];
    this.nicknames = data.nicknames;

    this.level = ko.computed(function() {
        if(this.clickCount() < 10) {
            return this.levels[0];
        } else if(this.clickCount() < 20) {
            return this.levels[1];
        } else {
            return this.levels[2];
        }
    }, this);
}

var ViewModel = function() {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push(new Cat(catItem));
    });

    this.currentCat = ko.observable(this.catList()[0]);

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    }

    this.setCat = function(name) {
        for(var i=0; i < this.catList().length; ++i) {
            if(name === this.catList()[i].name) {
                this.currentCat(this.catList()[i]);
                break;
            }
        }
    }
}

ko.applyBindings(new ViewModel());
