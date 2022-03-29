
inicio
	real vendas_jan, vendas_fev, vendas_mar, vendas_abr, total, media
      texto nome
      
      escrever "Digite o nome do cliente: "
      ler nome
      escrever "Insira o valor das vendas do mês de janeiro: R$"
      ler vendas_jan
      escrever "Insira o valor das vendas do mês de fevereiro: R$"
      ler vendas_fev
      escrever "Insira o valor das vendas do mês de março: R$"
      ler vendas_mar
      escrever "Insira o valor das vendas do mês de abril: R$"
      ler vendas_abr
      
      total <- vendas_jan + vendas_fev + vendas_mar + vendas_abr
      media <- total/4
      escrever "O valor total das vendas de " +nome+ " foi de R$"
      escrever total
      escrever " e a média de vendas foi de R$"
      escrever media
fim
