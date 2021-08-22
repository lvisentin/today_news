const NewsController = require("./NewsController")
// @ponicode
describe("NewsController.default.getSources", () => {
    test("0", async () => {
        await NewsController.default.getSources()
    })
})

// @ponicode
describe("NewsController.default.getSearch", () => {
    test("0", async () => {
        await NewsController.default.getSearch("DELETE FROM Projects WHERE pid = %s")
    })

    test("1", async () => {
        await NewsController.default.getSearch("UPDATE Projects SET pname = %s WHERE pid = %s")
    })

    test("2", async () => {
        await NewsController.default.getSearch("UNLOCK TABLES;")
    })

    test("3", async () => {
        await NewsController.default.getSearch("DROP TABLE tmp;")
    })

    test("4", async () => {
        await NewsController.default.getSearch("SELECT * FROM Movies WHERE Title=’Jurassic Park’ AND Director='Steven Spielberg';")
    })

    test("5", async () => {
        await NewsController.default.getSearch(undefined)
    })
})
