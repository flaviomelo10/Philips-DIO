/*
Crie uma função que retorne o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.
    1. Crie uma função getAdmin que recebe um Map.
    2. Crie um Map e popule-o com nomes de usuário e seus papéis no sistema (Ex: 'Luiz' => 'Admin').
    3. Dentro getAdmin, utilize o loop for...of para retornar uma lista com os nomes dos usuários que são administradores.
*/

function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios));