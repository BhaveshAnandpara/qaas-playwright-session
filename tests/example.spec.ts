import { test, expect } from '@playwright/test'

// test("Login", async ({ page }) => {

//   await page.goto("https://parabank.parasoft.com/parabank/index.htm")
//   await page.waitForTimeout(5000) //5 sec

//   let titleLocator = await page.locator("h2")
//   let usernameLocator = await page.locator("input[type='text']")
//   let passwordLocator = await page.locator("input[type='password']")
//   let loginLocator = await page.locator("input[type='submit']")

//   //assertion
//   await expect(titleLocator).toHaveText("Customer Login")

//   await usernameLocator.fill("BhaveshAnandpara")
//   await passwordLocator.fill("1234")

//   await page.waitForTimeout(5000)
//   await loginLocator.click()
//   await page.waitForTimeout(5000)

// })


// // test("Login", async ({page})=>{

// //   await page.goto("https://parabank.parasoft.com/parabank/index.htm")
// //   await page.waitForTimeout(5000) //5 sec

// //   // page.getByAltText()
// //   // page.getByLabel()
// //   // page.getByPlaceholder()
// //   // page.getByRole('heading','checkbox','button')
// //   // page.getByTestId()
// //   // page.getByTitle()

// //   // page.goto()
// //   // page.reload()
// //   // page.title()
// //   // page.url()
// //   // page.viewportSize()
// //   // page.screenshot()

// //   // page.locator()

// //   //page.locator().allTextContents()
// //   //page.locator().and(page.locator())
// //   //page.locator().check()
// //   //page.locator().clear()
// //   //page.locator().click()
// //   //page.locator().dblclick()
// //   //page.locator().fill()
// //   //page.locator().first()
// //   //page.locator().innerHTML()
// //   //page.locator().innerText()
// //   //page.locator().inputValue()
// //   //page.locator().isChecked()
// //   //page.locator().isDisabled()
// //   //page.locator().last()
// //   //page.locator().nth()
// //   //page.locator().or()
// //   //page.locator().slectOption()
// //   //page.locator().uncheck()

// //   //expect().toBeChecked()
// //   //expect().toBeDisabled()
// //   //expect().toBeEnabled()
// //   //expect().toBeVisible()
// //   //expect().toContainClass()
// //   //expect().toContainText()
// //   //expect().toHaveAttribute()
// //   //expect().toHaveCount()
// //   //expect().toHaveText()
// //   //expect().toHaveValue()
// //   //expect().not.toHaveValue()

// // })

// // test("", async ()=>{



// // })

// // test("page", async ({ page }) => {

// //   // //   // page.goto()
// //   // //   // page.reload()
// //   // //   // page.title()
// //   // //   // page.url()
// //   // //   // page.viewportSize()
// //   // //   // page.screenshot()

// //   await page.setViewportSize({ width: 500, height: 200 })

// //   await page.goto("https://demoqa.com/text-box") //url
// //   await page.waitForTimeout(3000)

// //   await page.reload()
// //   await page.waitForTimeout(3000)

// //   await page.screenshot({ path: './screeshots/image.png' })
// //   await page.waitForTimeout(3000)

// //   const title = await page.title()
// //   const url = await page.url()
// //   const vp = await page.viewportSize()

// //   console.log(title)
// //   console.log(url)
// //   console.log(vp)

// // })

// test("get", async ({ page }) => {

//   //   // page.getByAltText()
//   //   // page.getByLabel()
//   //   // page.getByPlaceholder()
//   //   // page.getByRole('heading','checkbox','button')
//   //   // page.getByTestId()
//   //   // page.getByTitle()

//   await page.goto("https://playwright.dev/docs/api/class-page#page-viewport-size") //url
//   await page.waitForTimeout(3000)

//   const imgLoc = await page.getByAltText('logo') //getByAltText -> returns elements that has alt key as provided
//   const url = await imgLoc.getAttribute('src') //getAttribute -> returns the value of provided attribute for that element

//   const githubIcon = await page.getByLabel("GitHub repository")
//   const githubURL = await githubIcon.getAttribute("href")

//   console.log(url)
//   console.log(githubURL)

//   await page.goto("https://demoqa.com/text-box") //url
//   await page.waitForTimeout(3000)

//   const emailInput = page.getByPlaceholder("name@example.com")
//   await emailInput.fill("bhavesh@gmail.com")
//   await page.waitForTimeout(3000)

//   const headingLoc = await page.getByRole('heading', { name: "Text Box" }).isVisible()
//   const buttonLoc = await page.getByRole('button', { name: "Submit" }).isVisible()
//   console.log(headingLoc)
//   console.log(buttonLoc)

// })

// // test("actions", async ({ page }) => {

// //   //   //page.locator()
// //   //   //page.locator().allTextContents()
// //   //   //page.locator().innerText()
// //   //   //page.locator().fill()
// //   //   //page.locator().inputValue()
// //   //   //page.locator().clear()

// //   //   //page.locator().first()
// //   //   //page.locator().last()
// //   //   //page.locator().nth()

// //   //   //page.locator().and(page.locator())
// //   //   //page.locator().or()

// //   //   //page.locator().click()
// //   //   //page.locator().dblclick()

// //   //   //page.locator().check()
// //   //   //page.locator().uncheck()

// //   //   //page.locator().isChecked()
// //   //   //page.locator().isDisabled()
// //   //   //page.locator().slectOption()

// //   await page.goto("https://demoqa.com/login") //url
// //   await page.waitForTimeout(3000)

// //   // const loc1 = await page.getByPlaceholder("UserName")
// //   // console.log( await loc.count() )

// //   // const loc2 = await page.locator("input") // this will resolve 2 locators -> 1 input for username and 1 input for password
// //   // await loc2.fill("BhaveshAnandpara") // this will throw error as it is not clear which input to fill

// //   const loc3 = await page.locator("input[id='userName']") // this is why we need to provide unique and specific locators
// //   // const loc4 = await page.locator("input#userName") // this is why we need to provide unique and specific locators
// //   await loc3.fill("BhaveshAnandpara")


// //   await page.goto("https://demoqa.com/automation-practice-form") //url
// //   await page.waitForTimeout(3000)

// //   // const texts = await page.locator('label').allTextContents() //allTextContents() -> returns the text inside the all element (for one or multiple elements)
// //   // const text = await page.locator('label').textContent() //textContent() -> returns the text inside the locator (works for only single locator)
// //   // console.log(text)

// //   // const nameLoc = await page.getByPlaceholder("First Name")
// //   // await nameLoc.fill("Bhavesh")

// //   // await page.waitForTimeout(2000)

// //   // const value = await nameLoc.inputValue() //inputValue() -> returns the value inside the input field 
// //   // console.log(value)

// //   // await nameLoc.clear() //clear() -> clears the text inside the input field

// //   // await page.waitForTimeout(2000)

// //   // const labels = await page.locator('label')
// //   // const labelsText = await labels.allTextContents()

// //   // const text1 = await labels.first().textContent() //first() -> returns the first element from the locator
// //   // const textlast = await labels.last().textContent() //last() -> returns the last element from the locator
// //   // const text2 = await labels.nth(5).textContent() //last() -> returns the last element from the locator

// //   // console.log(labelsText)
// //   // console.log(text1)
// //   // console.log(textlast)
// //   // console.log(text2)

// //   const btn = await page.locator("button[id='submit']")
// //   const checkbox = await page.locator("input[id='hobbies-checkbox-1']")

// //   await btn.click() //click() -> clicks the element
// //   await btn.dblclick() //dblclick() -> double-clicks the element

// //   await checkbox.check() //check() -> checks the checkbox or radio button

// //   await page.waitForTimeout(2000)

// //   await checkbox.uncheck() //uncheck() -> unchecks the checkbox or radio button
// //   await page.waitForTimeout(20000)

// // })



//Assertions

test("Fill form", async ({ page }) => {

  await page.goto('https://demoqa.com/automation-practice-form');

  await page.getByRole('textbox', { name: 'First Name' }).fill('Bhavesh');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Anandpara');
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('bhavesh@gmail.com');
  
  await page.getByRole('radio', { name: 'Male', exact: true }).check();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('7498621846');

  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('gridcell', { name: 'Choose Wednesday, June 10th,' }).click();

  await page.locator('.subjects-auto-complete__input-container').click();
  await page.locator('#subjectsInput').fill('MA');

  await page.getByRole('option', { name: 'Maths' }).click();
  await page.getByRole('checkbox', { name: 'Sports' }).check();

  await page.getByRole('button', { name: 'Choose File' }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('./screeshots/image.png');

  await page.getByRole('textbox', { name: 'Current Address' }).fill('adscsdcvsdvsdfv');

  await page.locator('div').filter({ hasText: /^Select State$/ }).nth(3).click();
  await page.getByRole('option', { name: 'NCR' }).click();

  await page.locator('div').filter({ hasText: /^Select City$/ }).nth(3).click();

  await page.getByRole('option', { name: 'Delhi' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();

  const modalTitle = await page.locator('#example-modal-sizes-title-lg');
  await expect(modalTitle).toContainText('submitting the form');
  await expect(modalTitle).toHaveText('Thanks for submitting the form');

})

test('Verify if login error appears when no creds are provided', async ({ page }) => {

  await page.goto('https://parabank.parasoft.com/parabank/login.html');

  const loginButton = await page.getByRole('button', { name: 'Log In' });
  const errorMessage = await page.locator('p[class="error"]');

  await loginButton.click();
  await expect(errorMessage).toHaveText("Please enter a username and password.")
});


test('Verify if login error appears when invalid creds are provided', async ({ page }) => {

  await page.goto('https://parabank.parasoft.com/parabank/login.html');

  const username = await page.locator('input[name="username"]')
  const password = await page.locator('input[name="password"]')
  const loginButton = await page.getByRole('button', { name: 'Log In' });
  const errorMessage = await page.locator('p[class="error"]');

  await username.fill("dcihgdsihcgdc")
  await password.fill("ASDASDC")

  await loginButton.click();
  await expect(errorMessage).toHaveText("The username and password could not be verified.")

});


test('Verify if login is successful with valid credentials', async ({ page }) => {

  await page.goto('https://parabank.parasoft.com/parabank/login.html');

  const username = await page.locator('input[name="username"]')
  const password = await page.locator('input[name="login-password"]')
  const loginButton = await page.getByRole('button', { name: 'Log In' });

  await username.fill("BhaveshAnandpara")
  await password.fill("12345")

  await loginButton.click();
  await expect(page.url()).toBe("https://parabank.parasoft.com/parabank/overview.htm")

  await page.waitForTimeout(5000) // Wait for 5 seconds to observe the successful login

});


test('Assertions', async ({ page }) => {

  await page.goto('https://demoqa.com/automation-practice-form');

  const checkbox = await page.locator("input[id='hobbies-checkbox-1']")
  const selectCity = await page.locator("input[id='react-select-4-input']")
  const submitButton = await page.getByRole('button', { name: 'Submit' });
  const successTitle = await page.locator('#example-modal-sizes-title-lg');

  await checkbox.check() // Check the checkbox
  await expect(checkbox).toBeChecked() // Assert that the checkbox is checked

  await expect(selectCity).toBeDisabled() // Assert that the select city dropdown is disabled

  await page.locator('div').filter({ hasText: /^Select State$/ }).nth(3).click();
  await page.getByRole('option', { name: 'NCR' }).click();

  await expect(selectCity).toBeEnabled() // Assert that the select city dropdown is enabled 
  await expect(submitButton).toBeVisible() // Assert that the submit button is visible
  await expect(successTitle).not.toBeVisible()

  await expect(page.locator('label')).toHaveCount(15)
  await expect(4).toBeGreaterThan(3)

  const status = 200
  await expect(status).not.toBeNull()
  await expect(status).not.toBeUndefined()

  await page.waitForTimeout(4000)

});