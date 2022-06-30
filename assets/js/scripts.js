//Função criada para checar e criar elementos dentro de uma lista.
function buttonAdd()/* buttonAdd é o nome para essa função */ {
  const txtTasks = document.getElementById("txtTasks");
  /* Definida com o nome de "txtTasks", a constante para tarefa é chamada no html "document" a partir da função "getElementById" */


  const listItem = document.createElement("li");
  const input = document.createElement("input");
  /* Criada a constante "listItem", que recebe o valor da função "createElement", que por sua vez está criando o elemento "li" de lista*/
  input.setAttribute("type", "checkbox");
  /* A função "setAttribute" adiciona um atributo ao elemento encontrato dentro do html*/
  const listText = document.createElement("p");
  listText.innerText = txtTasks.value;
  /* A propriedade "innerText" representa o texto da lista; e "value" é a string que é digitada dentro do input*/

  listItem.appendChild(input);
  listItem.appendChild(listText);
  /* "listItem" contem o checkbox e o paragrafo
  <li>
       <check>
       <p> oko </p>
  </li>
  */

  /* Neste momento, com a função "appenChild" coloca-se todos os elementos embaixo da lista*/
  document.getElementById("myList").appendChild(listItem);
  /**
   <ul>
    ...
    listItem
   </ul>
   */
}
