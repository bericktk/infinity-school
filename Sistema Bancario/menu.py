from cadastrar import cadastrarConta
from deletar_conta import deletarConta
from editar_conta import editarConta
from listar_contas import listarContas
from listar_por_numero import buscarPorNumero
from saque_conta import realizarSaque
from deposito_conta import realizarDeposito

def cadastrar_conta():
    cliente = input('Digite o nome do cliente: ')
    tipo = input('Digite o tipo da conta: ')
    limite = float(input('Digite o limite da conta: '))
    cadastrarConta(cliente, tipo, limite)

def editar_conta():
    numero = int(input('Digite o numero da conta: '))
    cliente = input('Digite o nome do cliente: ')
    limite = float(input('Digite o limite da conta: '))
    editarConta(numero, cliente, limite)

def deletar_conta():
    numero = int(input('Digite o numero da conta: '))
    deletarConta(numero)

def buscar_conta():
    numero = int(input('Digite o numero da conta: '))
    conta = buscarPorNumero(numero)
    if conta:
        print(conta)
    else:
        print('Conta não encontrada!')

def sair():
    print('Saindo....!')
    exit()

def mostrarOpcoes():
    print('--------------- MENU ---------------')
    print('1 - Cadastrar Conta')
    print('2 - Editar Conta')
    print('3 - Deletar Conta')
    print('4 - Listar Todas as Conta')
    print('5 - Buscar Conta')
    print('6 - Realizar Saque')
    print('7 - Realizar Depósito')
    print('0 - Sair')
