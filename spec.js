describe('sample test', function() {
  it('should disply the input values', function() {
 
    browser.get('http://127.0.0.1:5000');
    element(by.model('name')).sendKeys('Testing Electron');
    var txt = element(by.binding('name'));
    expect(txt.getText()).toEqual('Testing Electron');
  });
});
