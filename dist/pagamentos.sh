curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"transacao": 30001,"valor": 300.33,"cliente": 1,"nome": "Cliente Amex","cartao": "312312345678901"}' 'http://demo.techstage.io/pagamentos'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"transacao": 40001,"valor": 400.44,"cliente": 1,"nome": "Cliente Visa","cartao": "409876543213211"}' 'http://demo.techstage.io/pagamentos'
curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{"transacao": 50001,"valor": 500.55,"cliente": 1,"nome": "Cliente Master","cartao": "501209876543211"}' 'http://demo.techstage.io/pagamentos'