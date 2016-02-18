var Sortable = function (container) {

    this.container = container;
    this.items = this.container.getElementsByClassName(this.container.dataset.sortable);
    this.itemWidth = Math.floor(this.items[0].getBoundingClientRect().width);
    this.itemHeight = Math.floor(this.items[0].getBoundingClientRect().height);
    this.cols = Math.floor(this.container.offsetWidth / this.itemWidth);

    // Set manually the height of the container in case there are other elements on the page
    this.container.style.height = this.itemHeight * Math.ceil(this.items.length / this.cols) + 50 + 'px';

    for (var i = 0; i < this.items.length; i++) {
        var item = this.items[i];

        // Give to every element an attribute data-position which represents its position
        item.setAttribute('data-position', i);

        // Set every element position in absolute
        item.style.position = 'absolute';

        // Set correctly the position of every element
        var x = this.itemWidth * (i % this.cols);
        var y = this.itemHeight * Math.floor(i / this.cols);
        item.style.transform = 'translate3D(' + x + 'px, ' + y + 'px, 0)';

    }



};