from conta_repositorio import bd
from listar_por_numero import buscarPorNumero

def editarConta(numero, cliente, limite):
    conta = buscarPorNumero(numero)
    if conta:
        conta['cliente'] = cliente
        conta['limite'] = limite
        print('Dados alterados com sucesso!')
    else:
        print('Conta não encontrada!')

# if __name__ == '__main__':
#     editarConta(1, 'Bruno', 2000)
#     print(bd)