describe('dashboardController', function() {
  var $controller, dashboardController;

  beforeEach(angular.mock.module('stockPriceApp'));

  // Inject the $controller service to create instances of the controller (UsersController) we want to test
  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
    dashboardController = $controller('dashboardController', {});
  }));

  // Verify our controller exists
  it('should be defined', function() {
    expect(dashboardController).toBeDefined();
  });

  it('setSortBy should set sortBy and sortReverse', function() {
    dashboardController.sortBy = "";
    dashboardController.sortReverse = false;
    dashboardController.setSortBy("symbol", true);
    expect(dashboardController.sortBy).toEqual("symbol");
    expect(dashboardController.sortReverse).toEqual(true);
  });

  it('setActivePage should set active Page', function() {
    dashboardController.activePage = 0;
    dashboardController.setActivePage(1);
    expect(dashboardController.activePage).toEqual(1);
  });

  it('should update pages based on the stocksymbols if stock symbols length greater than or equal to maxStockSymbols', function() {
    dashboardController.pages = null;
    dashboardController.activePage = 2;
    dashboardController.updatePages([1,2,3,4,5]);
    expect(dashboardController.pages).toEqual([0])
    expect(dashboardController.activePage).toEqual(0);
  });

  it('should update pages based on the stocksymbols if stock symbols length less than maxStockSymbols', function() {
    dashboardController.pages = null;
    dashboardController.activePage = 2;
    dashboardController.updatePages([1,2,3]);
    expect(dashboardController.pages).toEqual([0])
    expect(dashboardController.activePage).toEqual(0);
  });

  it('should populate last price of all stock symbols', function() {
    spyOn(Math, 'random').and.returnValue(0.1);
    dashboardController.stockSymbols = [{lastPrice:0}];
    dashboardController.refreshLastPrice();
    expect(dashboardController.stockSymbols).toEqual([{lastPrice:"10.00"}]);
  });
});