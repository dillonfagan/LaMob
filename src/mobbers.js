function listMobbers(rawMobbersInput) {
	if (!rawMobbersInput.includes(','))
		return [rawMobbersInput.trim()]
	return rawMobbersInput
		.replace(/\s/g,'')
		.split(',');
}

module.exports = { listMobbers }