const terminal = document.querySelector('.terminal');
const commandInput = document.querySelector('#command');

commandInput.addEventListener('keydown', function(event) {
	if (event.key === 'Enter') {
		event.preventDefault();
		let command = commandInput.value;
		commandInput.value = '';
		terminal.innerHTML += `<div>${command}</div>`;
		fetch(`/run?command=${encodeURIComponent(command)}`)
			.then(response => response.text())
			.then(output => {
				terminal.innerHTML += `<div>${output}</div>`;
				terminal.scrollTop = terminal.scrollHeight;
			})
			.catch(error => {
				terminal.innerHTML += `<div>Error: ${error}</div>`;
				terminal.scrollTop = terminal.scrollHeight;
			});
	}
});
