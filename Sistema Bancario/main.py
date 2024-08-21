from menu import *

opcoes = {
    '1': cadastrar_conta,
    '2': editar_conta,
    '3': deletar_conta,
    '4': listarContas,
    '5': buscar_conta,
    '6': realizarSaque,
    '7': realizarDeposito,
    '0': sair
}

while True:
    mostrarOpcoes()
    opcao = input('Selecione uma opção: ')

    if opcao in opcoes:
        opcoes[opcao]()
    else:
        print('Opção Invalida!!!')