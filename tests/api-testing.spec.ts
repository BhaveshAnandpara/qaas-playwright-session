
// import { test, expect } from "@playwright/test";

// test.describe("API Testing", () => {

//     test("validating GET API", async ({ request }) => {

//         const response = await request.get('https://jsonplaceholder.typicode.com/posts')
//         const data = await response.json()
//         const staus = await response.status()
//         const isStatusOk = await response.ok()

//         await expect(staus).toBe(200)
//         await expect(isStatusOk).toBeTruthy()
//         await expect(data).toHaveLength(100)


//     })

//     test("validating POST API", async ({ request }) => {

//         const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
//             data: {
//                 "title": "Playwright Testing",
//                 "body": "Learning API testing with Playwright",
//                 "userId": 10
//             }
//         })

//         const staus = await response.status()
//         const isStatusOk = await response.ok()

//         await expect(staus).toBe(201)
//         await expect(isStatusOk).toBeTruthy()


//     })

//     //also use PUT and DELETE APIs 
//     // PUT https://jsonplaceholder.typicode.com/posts/1
//     // DELETE https://jsonplaceholder.typicode.com/posts/1

// })