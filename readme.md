# Fundamentos de Angular: Arquitetura, Reatividade e Signals

>Aviso: Este projeto foi criado exclusivamente para fins de estudo, prática e documentação de aprendizado.

## Sobre o Projeto

Este repositório faz parte de um roadmap pessoal de nivelamento e aprofundamento técnico em desenvolvimento front-end moderno com Angular. O objetivo é consolidar os fundamentos da arquitetura baseada em componentes standalone, reatividade moderna com Signals e o fluxo de dados entre componentes.

Dominar a comunicação entre componentes (Inputs e Outputs), o gerenciamento de estado reativo, formulários reativos e roteamento é a etapa preparatória para compreender a arquitetura de aplicações de alta escalabilidade.

## O Que Foi Estudado

Os exercícios contidos aqui simulam cenários reais de interface para fixar conceitos essenciais do ecossistema Angular:

* **Arquitetura Standalone:** Estruturação de componentes modulares sem a necessidade de módulos tradicionais (NgModules).

* **Control Flow Moderno:** Uso das diretivas nativas de controle de fluxo `@for`, `@empty` e `@if`.

* **Comunicação de Cima para Baixo (Parent to Child):** Passagem de dados utilizando a nova API `input()`.

* **Comunicação de Baixo para Cima (Child to Parent):** Disparo de eventos e ações através da nova API `output()`.

* **Gerenciamento de Estado Reativo:** Manipulação de dados locais utilizando Signals, derivados com `computed` e efeitos colaterais com `effect`.

* **Formulários Reativos:** Captura de dados, validações customizadas e controle de estado de formulários.

* **Roteamento SPA:** Navegação entre páginas sem recarregamento e captura de parâmetros de rota.

* **Assincronismo e RxJS:** Consumo de APIs REST, operadores de transformação e interoprabilidade com Signals através de `toSignal` e `toObservable`.


## Lista de Exercícios Resolvidos

O projeto está dividido em blocos de complexidade progressiva:

### Bloco 1: Fundamentos de UI e Control Flow

* **O Cabeçalho do App:** Criação do componente `HeaderComponent` e exibição de dados utilizando interpolação.

* **A Lista de Tarefas:** Estruturação do `TaskListComponent` utilizando laços de repetição nativos `@for` e tratamento de listas vazias com `@empty`.

* **Pipes de Formatação:** Aplicação de `TitleCasePipe` para padronização de textos e `DatePipe` para datas sem alterar o objeto original.

* **Ciclo de Vida (ngOnInit):** Simulação de carregamento assíncrono de dados utilizando o hook de inicialização e `setTimeout`.


### Bloco 2: Arquitetura de Componentes e Comunicação

* **Extração de Componentes (Signal Inputs):** Criação do `TaskCardComponent` para isolar a responsabilidade de exibição de itens individuais utilizando a API `input()`.

* **Ações e Emissão de Eventos (Signal Outputs):** Implementação de botões de exclusão no componente filho utilizando `output()` para notificar o componente pai e atualizar o estado da lista.

* **Prevenção de Memory Leaks:** Uso do hook `ngOnDestroy` para limpeza de recursos e contadores assíncronos no ciclo de vida do componente.


### Bloco 3: O Poder dos Signals (Reatividade Moderna)

* **Migração de Estado:** Transformação de variáveis comuns em Signals e atualização imutável baseada no método `.update()`.

* **Dados Derivados (Computed):** Utilização de `computed()` para cálculo reativo e em cache de métricas e estados derivados.

* **Efeitos Colaterais (Effect):** Sincronização segura de estados reativos com APIs externas e persistência local no `localStorage`.


### Bloco 4: Interação com Formulários Reativos

* **Formulário de Criação:** Configuração de `ReactiveFormsModule` e estruturação de instâncias de `FormGroup` e `FormControl`.

* **Validações e Feedback:** Aplicação de regras estritas de validação (`Validators`) e controle visual de estados de toque e erro do usuário.

* **Integração Form e Lista:** Submissão de dados válidos do formulário para fechar o ciclo de operações de criação no componente pai.


### Bloco 5: Estrutura da Aplicação (Roteamento e Diretivas)

* **Roteamento SPA:** Configuração de rotas de navegação e renderização dinâmica com `<router-outlet>`.

* **Parâmetros de Rota:** Captura avançada de identificadores e propriedades da URL diretamente como `input()` no componente filho.


* **Diretivas Customizadas:** Manipulação avançada do DOM e escuta de eventos nativos com `@HostListener`.


### Bloco 6: Assincronismo com RxJS e Interoperabilidade

* **Consumo de API Real:** Injeção do `HttpClient` para requisições assíncronas em serviços dedicados.

* **Operadores RxJS:** Transformação e filtragem de fluxos de dados de forma imutável utilizando operadores como `map`.

* **Interoperabilidade (RxJS para Signals):** Conversão de fluxos assíncronos em estados síncronos reativos com `toSignal`.

* **Busca com Debounce:** Gerenciamento complexo de tempo, eventos e atrasos em fluxos reativos utilizando `toObservable`, `debounceTime` e `distinctUntilChanged`.
