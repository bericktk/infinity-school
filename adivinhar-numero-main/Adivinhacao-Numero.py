import random

print('------- Adivinhe o Número----------')
numero = random.randint(1, 20)

while True:
    
    op = int(input('Digite um numero: '))
    if op > numero:
        print('O numero digitado é mais alto que o numero escolhido!')
        continue
    elif op < numero:
        print('O numero digitado é mais baixo que o numero escolhido!')
        continue
    else:
        print('Parabéns, você acertou o número!')
        
    print('--------- Escolha 1 para jogar novamente e 2 para parar! --------------')
    escolha = int(input('Quer jogar novamente? '))
    if escolha == 1:
        numero = random.randint(1, 20)
        continue
    else:
        break