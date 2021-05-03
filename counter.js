const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/weatherly/counts/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}