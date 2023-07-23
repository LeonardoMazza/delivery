export interface User {
    id: string; // ID do usuário gerado pelo Firebase
    email: string; // Email do usuário
    name: string; // Nome do usuário
    address: string; // Endereço do usuário
    phoneNumbers: string[]; // Números de telefone do usuário
}  