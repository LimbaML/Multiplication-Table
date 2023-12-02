 function Table() {
            const ChosenNumber = document.getElementById('number').value;
            const tables = document.getElementById('table');

            // Clear existing table rows
            tables.innerHTML = '';

            // Generate new table rows
            for (let i = 1; i <= 15; i++) {
                const result = ChosenNumber * i;
                const row = `<tr><td>${i}x${ChosenNumber}</td><td>${result}</td></tr>`;
                tables.innerHTML += row;
            }
        }