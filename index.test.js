require('./index.js');
test('0.1 + 0.2 to equal 0.3', () => {
    expect((0.1 + 0.2).toFixed(2)).toBe("0.30");
});
test('(0.815 + 0.1).toFixed(2) to equal 0.92', () => {
    expect((0.815 + 0.1).toFixed(2)).toBe("0.92");
});
test('(0.225).toFixed(2) to equal 0.23', () => {
    expect((0.225).toFixed(2)).toBe("0.23");
});
test('(0.235).toFixed(2) to equal 0.24', () => {
    expect((0.235).toFixed(2)).toBe("0.24");
});
test('1.35.toFixed(1) to equal 1.4', () => {
    expect(1.35.toFixed(1)).toBe("1.4");
});
test('1.335.toFixed(2) to equal 1.34', () => {
    expect(1.335.toFixed(2)).toBe("1.34");
});
test('1.3335.toFixed(3) to equal 1.334', () => {
    expect(1.3335.toFixed(3)).toBe("1.334");
});
test('1.33335.toFixed(4) to equal 1.3334', () => {
    expect(1.33335.toFixed(4)).toBe("1.3334");
});
test('1.3333335.toFixed(6) to equal 1.333334', () => {
    expect(1.3333335.toFixed(6)).toBe("1.333334");
});
test('(2.115 * 100).toFixed(2) to equal 211.50', () => {
    expect((2.115 * 100).toFixed(2)).toBe("211.50");
});