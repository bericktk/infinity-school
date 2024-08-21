from conta_repositorio import bd
from listar_por_numero import buscarPorNumero

def deletarConta(numero: int):
    conta = buscarPorNumero(numero)
    
    if conta:
        bd.remove(conta)
        print('Conta removida com sucesso!')
    else:
        print('Conta não encontrada!')

# if __name__ == '__main__':
#     deletarConta(2)
#     print(bd)