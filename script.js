function makeGrid(numOfCellsPerSide) {
	const canvas = document.querySelector('.canvas');

	for (let i = 0; i < numOfCellsPerSide; i++) {
		const row = document.createElement('div');
		row.className = 'row';

		canvas.appendChild(row);

		for (let j = 0; j < numOfCellsPerSide; j++) {
			const cell = document.createElement('div');
			cell.className = 'cell';

			row.appendChild(cell);
		}
	}

	document.querySelectorAll('.cell').forEach((cell) =>
		cell.addEventListener('mouseover', (e) => {
			e.target.style.backgroundColor = '#000';
		})
	);
}

makeGrid(100);
