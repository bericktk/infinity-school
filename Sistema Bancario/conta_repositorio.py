bd = [{
    'numero': 1,
    'cliente': 'Jonas',
    'saldo': 1000,
    'ativo': True,
    'tipo': 'CORRENTE',
    'limite': 150
}]

conta_atual = 1

def gerarNumeroConta():
    global conta_atual
    conta_atual += 1
    return conta_atual

# if __name__ == '__main__':
#     print(gerarNumeroConta())