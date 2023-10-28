// import { Key } from 'webdriverio'

describe('Open Application',() => {
    it('should open apps', async() => {
        // selector = $("//android.widget.TextView[@resource-id=\"com.fghilmany.dietmealapp:id/header_welcome\"]");
        // var a = browser.getText(selector);
        // browser.log(a);
    })
})
describe('Fill Form',() => {
    it('should type field name', async() => {
        await $("//android.widget.LinearLayout[@resource-id=\"com.fghilmany.dietmealapp:id/til_name\"]").click();
        await browser.keys(["1","2","2","2","2"])
    })
    it('should type field weight', async() => {
        await $("//android.widget.LinearLayout[@resource-id=\"com.fghilmany.dietmealapp:id/til_weight\"]").click();
        await browser.keys(["1","2","3","2","2"])
    })
    it('should type field height', async() => {
        await $("//android.widget.LinearLayout[@resource-id=\"com.fghilmany.dietmealapp:id/til_height\"]").click();
        await browser.keys(["1","2","3","4","5"])
        // await browser.keys([""])
        await $("//android.widget.FrameLayout[@resource-id=\"com.fghilmany.dietmealapp:id/nav_host_fragment_activity_home\"]/android.view.ViewGroup]").click();
    })

    it('should type set gender to female', async() => {
        await $("//android.widget.RadioButton[@resource-id=\"com.fghilmany.dietmealapp:id/rb_female\"]").click();
    })

    it('should klik bt next', async() => {
        await $("//android.widget.TextView[@resource-id=\"com.fghilmany.dietmealapp:id/header_welcome\"]").click();
        await $("//android.widget.Button[@resource-id=\"com.fghilmany.dietmealapp:id/bt_next\"]").click();
    })

    
})