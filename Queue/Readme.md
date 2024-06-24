Fila (Queue).

Estrutura baseada no principio de FIFO (First in First out), onde o primeiro elemento inserido é o primeiro a ser removido. Opera enfileirando os elementos (enqueue), e desenfileira (dequeue) removendo os primeiros elementos que foram inseridos.

![Execução queue e dequeue da estrutura Fila](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fifo_queue.png/350px-Fifo_queue.png)

Nessa estrutura todos os processos tendem a ser atendidos, evitando o fenomeno Starvation, a menos que o processo entre em looping.

Aplicação:
- Sistemas que basicamente utilizam fila de espera, sendo colocados na fila e retirados (ou processados) pela ordem de chegada.
- Sistema de bilheteria na aquisição de ingresso.