const login = require('../pageobjects/loginwsbc.page')

describe('Sign In Flow ', () => {
    before( async () => {

        await browser.maximizeWindow();

      });

    it(`fills out Sign In Form and Is Able to Sign In`, async () => {
        // open wsbc qa page
        await browser.url("https://sportsbook.qa-pub.worldsbc.net/")

        //check for the age verificaition box and click it
        await expect($('div=Are you over 18?')).toBeExisting()
        await (await ($('div=✔'))).click()

        //click on confirm on age verification
        await (await ($(".MuiButton-label"))).click()

        //click on the login button
        await (await ($("=Log In"))).click()

        //click on continue with email
        await (await ($("p=Continue with Email"))).click()

        //fill sign in form
        await login.fillSignInForm("utsav.deep@igsindia.net","IGS@2050@ud");

        //check if it worked
        await (await ($("button=Accept All Cookies"))).click()

        //check if it worked
        await expect($(".MuiAvatar-img")).toBeExisting()

        await browser.pause(1000)
        //Wait and click on avatar
        await (await $(".MuiAvatar-img")).click()

        //Wait and click on wallet
        await browser.pause(1500)
        await (await ($("=Wallet"))).waitForDisplayed()
        await (await ($("=Wallet"))).click()
        await (expect($("div=Available Balance"))).toBeDisplayed()

        //Wait and click on avatar
        await (await $(".MuiAvatar-img")).click()
        await browser.pause(1500)

        await (await $("=Log Out")).scrollIntoView()

        //Wait and click on avatar
        await (await $("=Log Out")).click()


    });
});