const xhr = new XMLHttpRequest();
const poll = document.querySelector('.poll')
const pollAnswers = document.getElementById('poll__answers');
const title = document.getElementById('poll__title');

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === xhr.DONE) {
		const poll = JSON.parse(xhr.responseText);
		title.innerText = poll.data.title;

		let buttonsHTML = '';
		for (let i = 0; i < poll.data.answers.length; i++) {
			buttonsHTML += '<button class="poll__answer">' + poll.data.answers[i] + '</button>';
			pollAnswers.innerHTML = buttonsHTML;
		};
		const btns = document.querySelectorAll('.poll__answer')
		for (btn of btns) {
			btn.addEventListener('click', () => {
				alert('Спасибо, ваш голос засчитан!')
			})
		}
	}
})

xhr.send();