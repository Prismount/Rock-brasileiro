function pesquisar() {

    let section = document.getElementById("resultados-pesquisa"); // Obtém a seção HTML onde os resultados serão exibidos
    let resultados = ""; // Inicializa uma string vazia para armazenar os resultados HTML
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    let titulo = "";
    let descricao = "";
    let tags = "";
    console.log(campoPesquisa);

    if (!campoPesquisa) {
        section.innerHTML  = "<p>Nenhum Resultado Encontrado. Voce precisa digitar o nome de alguma musica</p>"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Itera sobre cada música na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento
            resultados += `
            <div class="item-resultado">
                 <h2>${dado.titulo}</h2>
                     <p class="descricao-meta">${dado.descricao}</p>
                        <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
`;
             }      
       
      
    }

    if (!resultados) {
        resultados = "<p>Nenhum Resultado Encontrado<p/>"
    }
  
    // Atribui a string com os resultados HTML para o conteúdo da seção
    section.innerHTML = resultados;
  }




   