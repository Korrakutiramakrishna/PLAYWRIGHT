const { test, expect, request } = require('@playwright/test');

const payload = {
    userEmail: "anshika@gmail.com",
    userPassword: "Iamking@000"
};

let token;

test.beforeAll(async () => {

    const apiContext = await request.newContext();

    const loginResponse = await apiContext.post(
        "https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: payload
        }
    );

    expect(loginResponse.ok()).toBeTruthy();

    const loginResponseJson = await loginResponse.json();

    token = loginResponseJson.token;

    console.log("Token:", token);
});

test('API test', async () => {

    // Your remaining API steps go here

    console.log("Test is running");
    console.log("Token:", token);

});