investment_in_bitcoin = 1.2
bitcoin_to_usd = 25000

def bitcoinToUSD(bitcoin_amount, bitcoin_value_usd):
  usd_value= bitcoin_amount * bitcoin_value_usd
  return usd_value
answer = bitcoinToUSD(1.2,40000)
if answer <= 30000:
  print(alert)