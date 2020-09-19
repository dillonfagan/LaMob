const { listMobbers } = require('./mobbers');

test('One name', () => {
	const mobbers = listMobbers('Dillon');
	expect(mobbers).toStrictEqual(['Dillon']);
});

test('multiple names', () => {
	const mobbers = listMobbers('Dillon, Chris, Tina');
	expect(mobbers).toStrictEqual(['Dillon', 'Chris', 'Tina']);
});