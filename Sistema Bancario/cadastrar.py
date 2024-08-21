from conta_repositorio import bd, gerarNumeroConta

def cadastrarConta(cliente: str, tipo: str, limite: float = 0):
    conta = {
        'numero': gerarNumeroConta(),
        'cliente': cliente,
        'tipo': tipo,
        'saldo': 0,
        'ativo': True,
        'limite': limite
    }

    bd.append(conta)
    print('Conta cadastrada com sucesso')

# if __name__ == '__main__':
#     cadastrarConta('José', 'POUPANÇA')
#     print(bd)