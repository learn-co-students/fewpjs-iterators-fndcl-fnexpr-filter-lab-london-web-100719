let findMatching = (driversArray, str) => {

	return driversArray.filter(element => element.toLowerCase() == str.toLowerCase());

}

let fuzzyMatch = (driversArray, str) => {

	return driversArray.filter(element => element.slice(0, str.length).toLowerCase() == str.toLowerCase());

}

let matchName = (driversArray, str) => {

	return driversArray.filter(element => element.name.toLowerCase() == str.toLowerCase());

}