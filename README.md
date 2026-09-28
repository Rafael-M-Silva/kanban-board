# Kanban Board

Quadro de tarefas em React com três colunas: Pendente, Fazendo e Completa.

**Projeto desenvolvido para fins educacionais.**

## O que o projeto demonstra

É possível adicionar tarefas, editar o título, mover uma tarefa pelo seletor de estado e removê-la ao apagar o título durante a edição. As tarefas vivem no estado do React e são perdidas ao atualizar a página. Não há arrastar e soltar, backend ou banco de dados.

## Tecnologias e estrutura

React 18, JavaScript, Vite e CSS. Os componentes ficam em <code>src/components/</code>; <code>src/App.jsx</code> mantém a lista de tarefas e as funções de inclusão, atualização e remoção.

## Como executar

~~~bash
git clone https://github.com/Rafael-M-Silva/kanban-board.git
cd kanban-board
npm ci
npm run dev
~~~

Abra o endereço exibido pelo Vite, normalmente [http://localhost:5173](http://localhost:5173).

## Aprendizados

O exercício pratica estado com <code>useState</code>, passagem de funções por propriedades, atualização imutável de arrays e renderização condicional.

## Autor

**Rafael Mauricio (Bigode)** · [GitHub](https://github.com/Rafael-M-Silva) · [LinkedIn](https://linkedin.com/in/rafael-mauricio-dev/) · [Bigode Ensina](https://bigodeensina.com.br/)
