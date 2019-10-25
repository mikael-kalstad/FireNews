const hello = () => 'hello'

describe('test', () => {
    it('should output hello', () => {
        expect(hello()).toBe('Hello')
    })
})