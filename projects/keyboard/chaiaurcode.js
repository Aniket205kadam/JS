const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
        <div class='color'>
           <table>
            <tr>
                <th>Key</th>
                <th>Keycode</th>
                <th>code</th>
            </tr>
            <tr>
                <td>${event.key === " " ? "Space" : event.key}</td>
                <td>${event.keyCode}s</td>
                <td>${event.code}</td>
            </tr>
            </table> 
        </div>
    `
})