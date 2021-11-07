1. PRIMEIRO CONTATO COM O PROJETO.
Algumas considerações antes de comentar minha experiência. Usei o emulador do Android Studio. Não tenho MacBook para gerar um IPA,
mas gerei um APK para quem quiser rodar em seu próprio celular android. Ele se encontra tanto no arquivo principal com o nome "app-release.apk" como 
no caminho "./android/app/build/outputs/apk/release/app-release.apk"

Quando li o projeto e vi que não poderia fazer em expo, tive que instalar uma versão mais recente do Node e do React-Native, pois a 
empresa anterior que eu trabalhava usava versões antigas e não fizeram uma atualização até o momento em que fiquei lá. Isso  me fez 
perder algumas horas com erros de versionamento, CLI, conflitos etc. Foi resolvido em 2 horas.

2. CRIAÇÃO DA TELA DE SIGNUP
A primeira tela que criei foi a de Login, não foi demorada, já que não precisava consultar a API. Porém não fiz a autenticação do usuário ainda,
deixei para o final, porque não tive como alta prioridade. O tempo que demorei foi 1 hora.

3. CRIAÇÃO DA DASHBOARD, COMPONENTES E MENU
Primeiro componentizei todas a minha aplicação com exceção dos cards de pokemon. O que fiquei na dúvida foi se usava Drawer-Navigation (que
abre uma janela de menu latera), ou usava um modal. Optei pelo modal já que o menu só ficaria em dashboard.

Deixei dinâmico os botões do menu, fazendo com que mais opções futuras pudessem ser facilmente implementadas. O processo todo levou cerca de 3 horas 
(especialmente por causa da dinamicidade e das escolhas de filtros).

4. CRIAÇÃO DOS CARDS E ESTUDO DA API
Eu já tinha "lido por cima" a documentação da API, mas na hora de criar os cards, onde mostram os pokemons, recorri a alguns vídeos, e olhei ela mais 
detalhadamente (utilizando especialmente o INSOMNIA e o console.log). Nesse período também criei a tela de Details, o Scroll infinito e fiz toda a conexão 
necessária com essa API. Esse processo levou cerca de 8 horas.

5. AUTENTICAÇÃO DE LOGIN E CAIXA DE PESQUISA
As últimas funcionalidades. Como não queria focar no frontend (e também tenho uma boa base de backend), sei que essas partes de pesquisa e autenticação dependem
mais de como o backend foi estruturado. As pesquisas criadas através de Controllers dedicados e o Login sendo modelado especificamente para tal. Logicamente os dois 
podem ser feitos através do frontend, apesar de não ser a melhor forma de fazê-los.

Na autenticação de login, usei o AsyncStorage para guardar os dados do usuário. Quando ele abrie novamente o app, o storage redireciona-o para a 
Dashboard, ao invés da tela de Signup/Signin.

Para a pesquisa, percebi que a API só me traz um resultado específico, isso é, se eu "acertar todas as letras". Não existe um comando que seja parecido
como o "LIKE" do SQL, por exmeplo. Isso também tornou difícil a pesquisa por "tipo" de pokemon (água, terra etc).

O tempo que levei para esse processo foi de 1 hora.

6. FUNCIONALIDADES PENDENTES
Algumas coisas ficaram pendentes:
  6.1 Background dos cards:
    A maneira que encontrei de mudar dinamicamente o background dos cards faz com que a API pesasse muito na hora da rederização do react. Resolvi então deixar um 
    background padrão na cor azul (apesar de a lógica ainda estar lá);
  6.2 Filtrar pesquisas por tipo de pockemon:
    Apesar do frontend estar dinâmico e funcionando os cliques de botões, limpeza da pesquisa etc, não tive tempo suficiente para descobrir uma boa maneira de filtrar 
    por "tipos" de pokemons;
  6.3 Linguagem da API para Português:
    Vi em algumas partes que a API é distribuída para várias línguas. Porém não tive tempo suficiente para explorar mais ess opção;
  6.4 Banco de dados em nuvem para autenticação do usuário:
    Não usei um banco em nuvens, pois os que já trabalhei e os servidores que já subi (como Firebase, AWS e Umbler), todos eram pagos. Optei por fazer uma "autenticação"
    via AsyncStorage, que é nativo do React-Native.
  6.5 Utilização de Redux:
    Não tive contato ainda com REDUX, estudei durante o processo seletivo, entendi as bases (já trabalhei com contextos e achei parecido), mas não tive a segurança de 
    implementar, por isso deixe-o por último, mas o tempo não me foi propício.

7. TEMPO TOTAL: Cerca de 15 horas.



