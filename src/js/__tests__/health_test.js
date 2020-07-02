import health from '../health';

test('health = 90', () => {
    expect(health({'name': 'Tatiana', 'health': 90})).toBe('healthy');
});

test('health = 51', () => {
    expect(health({'name': 'Tatiana', 'health': 51})).toBe('healthy');
});

test('health = 50', () => {
    expect(health({'name': 'Tatiana', 'health': 50})).toBe('wounded');
});

test('health = 49', () => {
    expect(health({'name': 'Tatiana', 'health': 49})).toBe('wounded');
});

test('health = 30', () => {
    expect(health({'name': 'Tatiana', 'health': 30})).toBe('wounded');
});

test('health = 16', () => {
    expect(health({'name': 'Tatiana', 'health': 16})).toBe('wounded');
});

test('health = 15', () => {
    expect(health({'name': 'Tatiana', 'health': 15})).toBe('wounded');
});

test('health = 14', () => {
    expect(health({'name': 'Tatiana', 'health': 14})).toBe('critical');
});

test('health = 8', () => {
    expect(health({'name': 'Tatiana', 'health': 8})).toBe('critical');
});

test('health = 0', () => {
    expect(health({'name': 'Tatiana', 'health': 0})).toBe('critical');
});