export const weatherIcon = (code, n = '') => {
	if (code == 200 || code == 201 || code == 202) {
		return `thunderRain.svg`;
	} else if (code == 230 || code == 231 || code == 232 || code == 233) {
		return `thunderstorm.svg`;
	} else if (code >= 300 && code <= 600) {
		return `rain.svg`;
	} else if (code == 611 || code == 612) {
		return `sleet.svg`;
	} else if (code === 621 || code == 622 || code == 623) {
		return `snow.svg`;
	} else if (
		code == 700 ||
		code == 711 ||
		code == 721 ||
		code == 731 ||
		code == 741 ||
		code == 751
	) {
		return `overcast.svg`;
	} else if (code == 800) {
		return n.includes('n') ? `moon.svg` : `sun.svg`;
	} else if (code == 801 || code == 802 || code == 803) {
		return `fewsky.svg`;
	} else if (code == 804 || code == 900) {
		return `overcast.svg`;
	} else {
		return `overcast.svg`;
	}
};
