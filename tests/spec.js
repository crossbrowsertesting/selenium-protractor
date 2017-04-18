// spec.js
describe('Protractor Demo App', function() {
  it('handle our ToDos', function() {
    browser.get('http://crossbrowsertesting.github.io/todo-app.html');
    expect(browser.getTitle()).toEqual('Todo App - CrossBrowserTesting.com');
    
    var todo = element(By.name('todo-4'))
    todo.click();

    todo = element(by.name('todo-5'))
    todo.click();

    var textbox = element(By.id("todotext"));

    textbox.sendKeys("Get started with Protractor!");
    
    var addButton = element(By.id("addbutton"));
    addButton.click();

    var archive = element(By.linkText('archive'));
    archive.click();
  });
});
