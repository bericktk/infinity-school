from conta_repositorio import bd

def buscarPorNumero(numero: int):
    for conta in bd:
        if conta['numero'] == numero:
            return conta
    return None

# if __name__ == '__main__':
#     print(buscarPorNumero(1))
#     print(buscarPorNumero(10))