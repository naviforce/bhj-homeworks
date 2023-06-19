const xhr = new XMLHttpRequest();
const listCurrency = document.getElementById('items');
const loader = document.querySelector('.loader')

const outputData = data => {
	if (data.length === 0)
		return;
	let itemsHTML = '';
	for (const item of data) {
		itemsHTML += `<div class="item"><div class="item__code">${item.name}</div><div class="item__value">${item.value}</div><div class="item__currency">руб.</div></div>`;
		listCurrency.innerHTML = itemsHTML;
	}
	loader.classList.remove('loader_active');
}

xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState !== xhr.DONE) {
		loader.classList.add('loader_active')
	} else {
		const loadCurrency = JSON.parse(xhr.responseText).response.Valute;
		const serverData = [];
		for (const key in loadCurrency) {
			serverData.push({
				name: loadCurrency[key].CharCode,
				value: loadCurrency[key].Value
			});
		}
		outputData(serverData);
	}
})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();