
const testData = {
    'login': {
        'GOTOURL': 'http://google.com',
        'SETTEXT': {
            'username': 'mgr123',
            'password': 'mgr!23'
        },
        'CLICK': {
            'LoginButton': true
        }
    }
}

describe('webdriver.io page', () => {
    it('login ', () => {
        browser.url(testData.login.GOTOURL);
        $(testData.login.SETTEXT.username).addValue(testData.login.SETTEXT.username);
        $('/html/body/app-root/app-login/div/div/div/div/div[2]/input').addValue('123456');
        $('/html/body/app-root/app-login/div/div/div/div/div[4]/div/button').click();
        expect(browser).toHaveUrl('http://go24.vn:5001/admin/dashboard');
    })
})

describe('webdriver.io page', () => {
    it('login admin', () => {
        browser.url('http://go24.vn:5001/authen/login');
        $('/html/body/app-root/app-login/div/div/div/div/div[1]/input').addValue('admin');
        $('/html/body/app-root/app-login/div/div/div/div/div[2]/input').addValue('123456');
        $('/html/body/app-root/app-login/div/div/div/div/div[4]/div/button').click();
        expect(browser).toHaveUrl('http://go24.vn:5001/admin/dashboard');
    })
})