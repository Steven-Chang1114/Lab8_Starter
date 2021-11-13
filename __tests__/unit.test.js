// unit.test.js
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('isPhoneNumber T1', () => {
    ans = functions.isPhoneNumber('909-516-1819');
    expect(ans).toBe(true);
});

test('isPhoneNumber T2', () => {
    ans = functions.isPhoneNumber('(909)516-1819');
    expect(ans).toBe(true);
});

test('isPhoneNumber F1', () => {
    ans = functions.isPhoneNumber('909516181');
    expect(ans).toBe(false);
});

test('isPhoneNumber F2', () => {
    ans = functions.isPhoneNumber('9095161819');
    expect(ans).toBe(false);
});

test('isEmail T1', () => {
    ans = functions.isEmail('abc@gmail.com');
    expect(ans).toBe(true);
});

test('isEmail T2', () => {
    ans = functions.isEmail('abc123_3@gmail.com');
    expect(ans).toBe(true);
});

test('isEmail F1', () => {
    ans = functions.isEmail('abc@gg@ucsd');
    expect(ans).toBe(false);
});

test('isEmail F2', () => {
    ans = functions.isEmail('abc@gf.comm');
    expect(ans).toBe(false);
});

test('isStrongPassword T1', () => {
    ans = functions.isStrongPassword('aaafv');
    expect(ans).toBe(true);
});

test('isStrongPassword T2', () => {
    ans = functions.isStrongPassword('aaa111__12');
    expect(ans).toBe(true);
});

test('isStrongPassword F1', () => {
    ans = functions.isStrongPassword('sgrdsrgdfgdthfhghgyghyghyygg');
    expect(ans).toBe(false);
});

test('isStrongPassword F2', () => {
    ans = functions.isStrongPassword('1AAAA');
    expect(ans).toBe(false);
});

test('isDate T1', () => {
    ans = functions.isDate('31/1/2016');
    expect(ans).toBe(true);
});

test('isDate T2', () => {
    ans = functions.isDate('1/1/2023');
    expect(ans).toBe(true);
});

test('isDate F1', () => {
    ans = functions.isDate('23/11/19');
    expect(ans).toBe(false);
});

test('isDate F2', () => {
    ans = functions.isDate('6/6/221');
    expect(ans).toBe(false);
});

test('isHexColor T1', () => {
    ans = functions.isHexColor('#AAA');
    expect(ans).toBe(true);
});

test('isHexColor T2', () => {
    ans = functions.isHexColor('#AAA123');
    expect(ans).toBe(true);
});

test('isHexColor F1', () => {
    ans = functions.isHexColor('#');
    expect(ans).toBe(false);
});

test('isHexColor F2', () => {
    ans = functions.isHexColor('#11');
    expect(ans).toBe(false);
});