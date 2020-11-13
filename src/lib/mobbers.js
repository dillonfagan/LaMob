function listMobbers(rawMobbersInput) {
	if (!rawMobbersInput.includes(','))
		return [rawMobbersInput.trim()]
	return rawMobbersInput
		.replace(/\s/g,'')
		.split(',');
}

function sortMobbers(mobberList) {
	return mobberList.sort((a, b) => 0.5 - Math.random())
}

module.exports = { listMobbers, sortMobbers }