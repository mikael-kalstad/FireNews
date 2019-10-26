const hello = () => 'Hello'

describe('test', () => {
    it('should output hello', () => {
        expect(hello()).toBe('Hello')
    })
})