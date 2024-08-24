import { validateUrl } from './apiHandler';

test('validates correct URLs', () => {
    expect(validateUrl('https://www.example.com')).toBe(true);
    expect(validateUrl('http://example.com')).toBe(true);
    expect(validateUrl('example.com')).toBe(false);
});
