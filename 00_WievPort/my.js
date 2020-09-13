Linea();

function Linea(){
    // return

    let szoveg = `
    <table>
    <tr>
    `
    for (let i = 1; i <= 20; i++) {
        szoveg +=`
        <td>${50*i}</td>
        `
    }
    szoveg += `
    <tr>
    </table>    
    `;
    
    document.getElementById("linea").innerHTML = szoveg;
}