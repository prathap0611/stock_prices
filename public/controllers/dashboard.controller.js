angular.module("stockPriceApp")
.controller("dashboardController", ["stockSymbolConstant", '$filter', '$interval', function(stockSymbolConstant, $filter, $interval) {
    this.stockSymbols = stockSymbolConstant.symbols;
    this.maxEntriesPerpage = stockSymbolConstant.maxEntriesPerpage;
    this.symbol = "";
    this.sortBy = "symbol";
    this.sortReverse = false;

    var self = this;

    this.updatePages = function(stockSymbols) {
        var noOfPages = stockSymbols.length/this.maxEntriesPerpage;
        noOfPages = noOfPages >= 1?noOfPages:1;
        this.pages = Array.apply(null, Array(noOfPages)).map(function(ele, index) {return index;});
        this.activePage = this.pages[0];
    };
    
    this.refreshLastPrice = function() {
        this.stockSymbols.forEach(function(obj) {
            obj.lastPrice = (Math.random() * 100).toPrecision(4);
        }, this);
    };

    this.setSortBy = function(sortBy, sortReverse) {
        this.sortBy = sortBy;
        this.sortReverse = sortReverse;
    };

    this.setActivePage = function(activePage) {
        this.activePage = activePage;
    };

    this.updatePagesOnSearch = function() {
        var filteredSymbols = $filter('filter')(this.stockSymbols, this.symbol);
        this.updatePages(filteredSymbols);
    };

    this.updatePages(this.stockSymbols);

    $interval(function() {
        self.refreshLastPrice();
    }, stockSymbolConstant.refreshTime);

}]);