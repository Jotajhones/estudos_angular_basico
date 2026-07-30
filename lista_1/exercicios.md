### Setup Inicial Recomendado

Crie um projeto novo para começar: `ng new task-flow --standalone` (no Angular 21+, standalone é o padrão).
**Mock Central (use nos primeiros blocos):**

```typescript
const MOCK_TASKS = [
  { id: 1, title: 'Aprender Control Flow', status: 'pendente', priority: 'alta', assigneeId: 1 },
  { id: 2, title: 'Configurar Roteador', status: 'concluida', priority: 'media', assigneeId: 2 }
];

```

---

## 🧱 Bloco 1: Fundamentos de UI e Control Flow (Renderização)

*Foco: Construir a interface básica e exibir dados.*

### 1. O Cabeçalho do App (Componentes e Interpolação)

* **Descrição:** Crie um componente `HeaderComponent`. Nele, exiba o nome do app ("TaskFlow") e a data atual usando interpolação simples `{{ }}`. Adicione-o ao `AppComponent`.
* **Objetivo de aprendizado:** Estruturar um componente standalone e renderizá-lo dentro de outro.

### 2. A Lista de Tarefas (Renderização Condicional e Laços)

* **Descrição:** Crie o `TaskListComponent`. Importe o `MOCK_TASKS`. Use o control flow `@for` para renderizar uma lista em HTML. Use o `@empty` (ou `@if`) para mostrar "Nenhuma tarefa" caso o array seja esvaziado.
* **Objetivo de aprendizado:** Dominar `@for` e estruturação de listas no template moderno.

### 3. Melhorando o Visual com Pipes

* **Descrição:** Na sua lista, a prioridade está em minúsculo. Use o `TitleCasePipe`. Adicione uma propriedade `createdAt: new Date()` no mock e exiba usando o `DatePipe` com o formato `'dd/MM/yyyy'`.
* **Objetivo de aprendizado:** Formatação de dados no template sem alterar o objeto original.

### 4. Ciclo de Vida: Simulando o Carregamento

* **Descrição:** No `TaskListComponent`, comece com um array vazio. Use o hook `ngOnInit` para preencher o array com o `MOCK_TASKS` após um `setTimeout` de 2 segundos. Use `@if` para mostrar "Carregando..." enquanto estiver vazio.
* **Objetivo de aprendizado:** Entender a inicialização do componente via `ngOnInit`.

---

## 📡 Bloco 2: Arquitetura de Componentes e Comunicação

*Foco: Quebrar a interface em pedaços menores e fazê-los conversar.*

### 5. Extraindo o Card (Signal Inputs)

* **Descrição:** A lista ficou muito grande. Crie um `TaskCardComponent`. Ele deve receber uma única tarefa vinda do pai (`TaskList`) através da nova API `input()`. Passe os dados do pai para o filho no HTML: `<app-task-card [task]="item" />`.
* **Objetivo de aprendizado:** Comunicação de Cima para Baixo (Parent -> Child) com Signals.

### 6. Ações do Card (Signal Outputs)

* **Descrição:** Adicione um botão "Deletar" no `TaskCardComponent`. Quando clicado, ele deve usar a API `output()` para emitir o ID da tarefa. O componente pai (`TaskList`) deve ouvir esse evento e remover a tarefa do array.
* **Objetivo de aprendizado:** Comunicação de Baixo para Cima (Child -> Parent).

### 7. Evitando Memory Leaks (ngOnDestroy)

* **Descrição:** Crie um `ClockComponent` para ficar no Header, mostrando a hora atualizada a cada segundo via `setInterval` no `ngOnInit`. Utilize o `ngOnDestroy` para disparar um `clearInterval` quando o componente for destruído (simule removendo o header da tela com um `@if`).
* **Objetivo de aprendizado:** Prevenção de vazamento de memória e limpeza de recursos.

---

## ⚡ Bloco 3: O Poder dos Signals (Reatividade Moderna)

*Foco: Gerenciamento de estado local sem dor de cabeça.*

### 8. Migrando Estado para Signals

* **Descrição:** No `TaskListComponent`, transforme a variável do array de tarefas em um Signal: `tasks = signal(MOCK_TASKS)`. Atualize a função de deletar do Exercício 6 para usar o método `.update()` do Signal.
* **Objetivo de aprendizado:** Mudança do modelo mental de variáveis comuns para reatividade baseada em Signals.

### 9. Dados Derivados (Computed)

* **Descrição:** Crie um componente `TaskStatsComponent` que fica acima da lista. No `TaskList` (pai), crie um `computed()` que calcula automaticamente o total de tarefas pendentes: `computed(() => this.tasks().filter(t => t.status === 'pendente').length)`. Passe isso como input para o Stats.
* **Objetivo de aprendizado:** Derivação síncrona e em cache de estado reativo.

### 10. Efeitos Colaterais (Effect)

* **Descrição:** No componente pai, crie um `effect()` no construtor. Toda vez que o Signal `tasks` mudar (ao deletar ou adicionar), o `effect` deve pegar a lista atual e salvar no `localStorage` do navegador.
* **Objetivo de aprendizado:** Uso seguro de `effect` para sincronização com APIs fora do framework (DOM/Storage).

---

## 📝 Bloco 4: Interação com Formulários Reativos

*Foco: Captura e validação de inputs do usuário.*

### 11. O Formulário de Criação

* **Descrição:** Crie um `TaskFormComponent`. Importe `ReactiveFormsModule`. Crie um `FormGroup` com os campos `title` e `priority`. Crie a estrutura HTML e faça o binding com `[formGroup]` e `formControlName`.
* **Objetivo de aprendizado:** Setup de Reactive Forms moderno.
 
### 12. Validações e Feedback

* **Descrição:** Adicione `Validators.required` e `Validators.minLength(5)` ao campo `title`. No HTML, exiba uma tag `<small>` vermelha com a mensagem "Título muito curto" apenas se o campo estiver inválido **e** "sujo" (`touched`). Desabilite o botão de submit se `form.invalid`.
* **Objetivo de aprendizado:** Validação visual e controle de estado do formulário.

### 13. Integração Form e Lista

* **Descrição:** Ao realizar um submit válido no form, emita um evento com o objeto da nova tarefa para o pai (`TaskListComponent`). O pai deve receber e usar `.update()` no Signal de tarefas para anexar o novo item na tela.
* **Objetivo de aprendizado:** Fechar o ciclo de CRUD local (Create e Read) unindo componentes distintos.

---

## 🧭 Bloco 5: Estrutura da Aplicação (Roteamento e Diretivas)

*Foco: Transformar a view em um App de múltiplas páginas (SPA).*

### 14. Roteamento SPA

* **Descrição:** No `app.routes.ts`, configure a rota `/dashboard` para carregar tudo o que você fez até agora e a rota `/about` (crie um componente simples de Sobre). Adicione um menu com `routerLink` no `HeaderComponent` e um `<router-outlet>` no `AppComponent`.
* **Objetivo de aprendizado:** Navegação básica sem reload.

### 15. Acessando Parâmetros de Rota

* **Descrição:** Crie uma rota `/task/:id` que carrega um `TaskDetailComponent`. Use a função `withComponentInputBinding()` no router para capturar o `:id` da URL diretamente como um `input()` no componente filho. Exiba "Detalhes da Tarefa [ID]" na tela.
* **Objetivo de aprendizado:** Leitura moderna de parâmetros de rota sem necessidade de injetar o `ActivatedRoute`.

### 16. Diretiva Customizada de Interação

* **Descrição:** Crie uma diretiva `HighlightPriorityDirective`. Coloque-a nos Cards. Se a prioridade for 'alta', ao passar o mouse (`@HostListener('mouseenter')`), a borda do card deve ficar vermelha. Ao sair (`mouseleave`), deve voltar ao normal.
* **Objetivo de aprendizado:** Manipulação avançada do DOM sem misturar lógica visual no componente.

---

## 🚀 Bloco 6: Assincronismo com RxJS e Interoperabilidade

*Foco: Integrar APIs, explorar RxJS e conectá-lo ao mundo dos Signals.*

### 17. Consumindo uma API Real (RxJS Básico)

* **Descrição:** Queremos atribuir as tarefas a usuários reais. Crie um `UserService` injetando o `HttpClient`. Crie um método `getUsers()` que retorna um Observable buscando dados de `[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)`. Exiba esses usuários num `<select>` no formulário de criação (usando pipe `async` ou subscrevendo).
* **Objetivo de aprendizado:** Injeção do HttpClient e consumo de API REST.

### 18. Manipulando Dados (RxJS Operators)

* **Descrição:** A API de usuários traz muitos dados (telefone, endereço). Modifique o serviço usando o operador `pipe(map(...))` do RxJS para transformar o retorno da API, entregando ao componente um array contendo apenas `{ id, nome_formatado }`.
* **Objetivo de aprendizado:** Transformação de fluxos assíncronos de forma pura e imutável.

### 19. A Ponte Mágica (Observable para Signal)

* **Descrição:** Esqueça o `subscribe` e o pipe `async` no seu formulário. No componente, utilize a função `toSignal(userService.getUsers())` para converter o retorno HTTP em um Signal. Atualize seu template `@for` para ler diretamente desse Signal.
* **Objetivo de aprendizado:** Como trazer o RxJS (Assíncrono) para o mundo dos Signals (Síncrono/Template) de forma reativa e moderna.

### 20. O Confronto Prático: Busca com Debounce (Signal -> Observable)

* **Descrição:** Crie uma barra de pesquisa textual no `TaskListComponent`. O estado do texto digitado deve ser um Signal: `searchTerm = signal('')`.
Para evitar pesquisas a cada letra digitada, converta esse signal de volta para RxJS usando `toObservable(this.searchTerm)`. Aplique os operadores `debounceTime(500)` e `distinctUntilChanged()`, e dentro do `subscribe()`, atualize a lista exibida.
* **Objetivo de aprendizado:** Entender a diferença prática: **Signals** são excelentes para manter o *estado atual* (o texto da busca), mas o **RxJS** continua sendo o rei absoluto para lidar com o *tempo e fluxo de eventos* (esperar 500ms para pesquisar).

--- 