# SVOLGIMENTO
Descrizione:
Implementiamo una todolist.
Ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all'interno di una lista, un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista (cercate nella documentazione l'evento che vi serve per questo bonus)
2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente ed eventuale icona (se done era uguale a false, impostare true e viceversa)
3- visualizzare a fianco ad ogni item una "x": cliccando su di essa, il todo viene rimosso dalla lista
4- implementare la persistenza di dati tramite local storage, quindi all'avvio dell'applicazione prendere i dati salvati per renderizzarli in pagina e ad ogni cambiamento aggiornare i dati salvati.

<!-- TODOLIST 2 -->
## INPUT
- creo lo stile della pagina su html e collego il vari link e file
- creo un array di oggetti con chiavi text e done  ( descrizione del task  e variabible flag true o false)
- creo un oggetto per il nuovo elemento "newTodo"

## LOGICA E OUTPUT
- alla casella di input do un evento "@keyup.enter" per ascoltare il click della tastiera enter invoco  la funzione "addTodo"
- alla casella di input assegno l'attributo v-model e gli assegno come valore "newTodo.text" (la key text dell'oggetto newTodo)
- al click sul bottone invoco  la funzione "addTodo"
- prima di visualizzare la lista creo un tag h2 con scritto "la tua lista è vuota" e lo gestisco tramite v-show con la condizione: "todolist.length === 0"
- nell "li" creo un ciclo v-for in cui faccio ciclare gli elementi della todoList prendendomi elemento e index per ogni ciclo
- nel tag span all'interno di "li" gestisco 3 classi dinamiche
    1. do la classe done (testo sbarrato) se la key "done" dell'elemento corrente è uguale a true
    2. do la classe checked (cerchio verde con V) se la key "done" dell'elemento corrente è uguale a true
    3. do la classe delete (cerchio rosso con X) se la key "done" dell'elemento corrente è uguale a false
- nel tag span all'interno di "li" gestisco l'elemento click
    - se  la key done dell'elemento corrente è true diventa false e viceversa.
- gestisco il div "deleteBtn" con v-show, mostrandolo solo  se il done dell'elemento corrente è true
- al click del div "deleteBtn" invoco la funzione deleteTodo passandogli come parametro l'indice



## RETURN
    - object "newTodo" con key "text"(stringa) e "done"(booleano)
    - array "todoList" vuoto

## CREATED
- creo una variabile "localTodo" a cui passo la stringa salvata nella memoria locale sotto l'etichetta "task" ( la mia todoList)
- se nella variabile "localTodo" non ho valore null(non ho nulla salvato nulla sotto quell'etichetta "task")
    - salvo nell'array todoList il valore della variabile "localTodo" ritrasformato in un array di oggetti.

## METHODS

1. ### addTodo
- controllo che la key text di newTodo non sia vuota
    - se non è vuota copio l'oggetto newTodo in una variabile "newObject"
    - inserisco dentro l'array todoList il nuovo todo "newObject"
    - svuoto l'input svuotanto il valore della key text di newTodo
    - creo una variabile "jasonTodo" a cui passo tutto l'array todolist trasformandolo in stringa
    - salvo nella memoria locale la variabile "jasonTodo" che contiene tutto todoList

2. ### deleteTodo
- prendo l'elemento corrente della todolist e tramite il suo indice lo elimino
- creo una variabile "jasonTodo" a cui passo tutto l'array todolist trasformandolo in stringa
- salvo nella memoria locale la variabile "jasonTodo" che contiene tutto todoList con un etichetta "task"
