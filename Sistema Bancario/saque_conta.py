from listar_por_numero import buscarPorNumero

def realizarSaque(numero: int, valor: float):
    conta = buscarPorNumero(numero)
    if conta is None:
        print('Conta não encontrada!')
        return

    if valor > conta['saldo']:
        print('Saldo insuficiente!')
        return
    
    conta['saldo'] -= valor
    print('Saque realizado com sucesso!')