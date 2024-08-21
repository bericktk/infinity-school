from conta_repositorio import bd

def listarContas():
    print('--------- CONTAS CADASTRADAS -----------')
    for conta in bd:
        print(f"Número: {conta['numero']}")
        print(f"Cliente: {conta['cliente']}")
        print(f"Saldo: {conta['saldo']}")
        print(f"Ativo: {conta['ativo']}")
        print(f"Tipo: {conta['tipo']}")
        print(f"Limite: {conta['limite']}")
        print('-' * 100)