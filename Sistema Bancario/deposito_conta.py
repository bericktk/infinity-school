from listar_por_numero import buscarPorNumero

def realizarDeposito(numero: int, valor: float):
    conta = buscarPorNumero(numero)
    if conta is None:
        print('Conta não encontrada!')
        return

    if valor < 0:
        print('Valor Inválido!')
        return
    
    conta['saldo'] += valor
    print('Deposito realizado com sucesso!')