name=input('Введите имя ')
win=0
los=0
while win+los<3:
  import random
  user1=random.randint(1,3)
  user2=input('Введите: "камень", "ножницы" или "бумага" ')
  if user2.upper()=='КАМЕНЬ':
    u2=1
  elif user2.upper()=='НОЖНИЦЫ':
    u2=2
  elif user2.upper()=='БУМАГА':
    u2=3
  else:
    print('Хуйня какая-то, не хочу с вами играть')
    break
  if user1==1:
    u1='камень'
  elif user1==2:
    u1='ножницы'
  elif user1==3:
    u1='бумага'
  if (user1==1 and u2==2) or (user1==2 and u2==3) or (user1==3 and u2==1):
    los+=1
    print('Вы проиграли: компьютер сказал "{}", а вы сказали "{}"'.format(u1, user2))
  elif user1==u2:
    print('Ничья! Давайте повторим')
  elif (u2==1 and user1==2) or (u2==2 and user1==3) or (u2==3 and user1==1):
    win+=1
    print('Вы выиграли: компьютер сказал "{}", а вы сказали "{}"'.format(u1, user2))
print('Счет матча: {} - {}, компьютер - {}'.format(name, win, los))







