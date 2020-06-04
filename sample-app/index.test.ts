describe("Sample Test Suite", () => {
    beforeAll(() => { })

    beforeEach(() => { })

    afterEach(() => { })

    afterAll(() => { })

    test("Valid Tests", () => {
        expect(2 + 2).toBe(4)
        expect(2 + 1).toEqual(3)

        expect({ one: 1, two: 2 }).toEqual({ one: 1, two: 2 })    //deep check
        expect({ one: 1, two: 2 }).not.toBe({ one: 1, two: 2 })

        expect(2 + 2).not.toBe(10)

        expect('Christopher').toMatch(/stop/)
        expect('Christopher').not.toMatch(/1234/)

        expect([1, 2, 4, 5]).toContain(4)
    })

    test('Exceptions', () => {
        expect.assertions(1)
        try {
            throw 'error'
        } catch (e) {
            expect(e).toMatch('error')
        }
    })
})