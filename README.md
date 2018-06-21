<p align="center"> 
  <a href="http://www.procob.com"> 
      <img src="https://i.imgur.com/vsdxA6H.jpg" alt="Procob S.A" width="300px"/> 
  </a> 
</p> 
 
___ 
 
 
## Processo seletivo para vaga desenvolvedor front-end 
 
### Sobre a Vaga 
 
- Empresa: Procob S.A 
- Cargo: Desenvolvedor 
- Remunera��o: R$ 4.500,00 
- Benef�cios: Plano de Sa�de (Unimed), Plano Odontol�gico (Dentaluni), Seguro de vida, Vale Transporte, Vale Refei��o (R$ 19,00 dia), 14� Sal�rio; 
- Vaga presencial - Curitiba-PR; 
 
### Requisitos 
 
Requisitos para a vaga: 
 
- Javascript (ES5, 6, 7...) 
- React 
- Webpack 
- Git 
- HTML5 
- CSS 
- Integra��o com RESTful API 
- GIT 
 
### Desej�veis 
 
- Design Patterns 
- Testes (Mocha, Jasmine, Karma, Chai) 
- Pr�-processador (Sass, Less) 
- GitLab 
- Git flow 
 
 
### O teste 
 
O desenvolvedor ir� ter que criar uma aplica��o ***SPA*** responsiva usando React onde ir� ter 2 rotas principais: 
 
- Buscar uma empresa pelo CNPJ. Antes de buscar verifica se essa empresa est� salva no local storage, caso sim a retorna, caso contr�rio busca na API; 
- Listar as empresas salvas no local storage e dar a op��o de alterar e de deletar as mesmas do local storage; 
 
O endpoint a ser consultado ser� o: 
 
- https://5ab2810762a6ae001408c26e.mockapi.io/api/dados-empresa/empresa?search={cnpj} 
 
Os CNPJ que podem ser utilizados para busca s�o: 
 
| CNPJ de teste     | 
| ------------------| 
| `11111111111111`  | 
| `22222222222222`  | 
| `33333333333333`  | 
| `44444444444444`  | 
| `55555555555555`  | 
| `66666666666666`  | 
| `77777777777777`  | 
| `88888888888888`  | 
| `99999999999999`  | 
 
� resposta da API ser� um JSON contendo: 
 
```javascript 
[ 
  { 
  "id": 1, 
  "cnpj": "11111111111111", 
  "nome": "EMPRESA TESTE", 
  "data_fundacao": "01/12/1979", 
  "situacao_receita": "REGULAR", 
  "situacao_receita_data": "2016-10-17" 
  } 
] 
``` 
 
 
### Como participar 
 
1. Fa�a o fork do desafio. 
 
2. Voc� ter� **2 dias** para desenvolver a partir da data do envio do teste.  
 
3. Crie um **PROJECT.md** com a explica��o de como executar e com o m�ximo de detalhes de como o teste foi feito como: tecnologia, framework etc. 
 
4. Ap�s concluir fa�a um pull request. 
 
5. Envie um e-mail para joseroberto@procob.com com seu **curriculo e o link do seu pull request**. 