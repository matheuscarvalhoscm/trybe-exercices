window.onload = function () {
  const ESTADO_INICIAL_1 = {
      nome: 'Rodrigo',
      sobrenome: 'Santos da Silva',
      endereco: 'Rua Soldado Mathias, 765',
      cidade: 'Belo Horizonte',
    };
  
    const ESTADO_INICIAL_2 = {
      nome: 'Bruna',
      sobrenome: 'Santana Oliveira',
      endereco: 'Rua Holanda, 332',
      cidade: 'São Paulo',
    };
  
    const meuPrimeiroReducer = (state = ESTADO_INICIAL_1, action) => {
      switch (action.type) {
        case ESTADO_INICIAL_1:
          return { ...ESTADO_INICIAL_1, nome: 'Matheus', sobrenome: 'Carvalho dos Santos' }
        default:
          return state;
      }
    };
  
    const meuSegundoReducer = (state = ESTADO_INICIAL_2, action) => {
      switch (action.type) {
        case ESTADO_INICIAL_2:
          return { ...ESTADO_INICIAL_2, nome: 'Gustavo', sobrenome: 'de Brito Santos' }
        default:
          return state;
      }
    };

    const combinedReducers = Redux.combineReducers({ meuPrimeiroReducer, meuSegundoReducer });

    const store = Redux.createStore(combinedReducers);

    
    console.log(store.getState())

    setTimeout(() => {
      store.dispatch({ type: ESTADO_INICIAL_1 })
      store.dispatch({ type: ESTADO_INICIAL_2 })
    }, 3000);

    store.subscribe(() => {
      document.querySelector('#nome-1').innerHTML = store.getState().meuPrimeiroReducer.nome
      document.querySelector('#nome-2').innerHTML = store.getState().meuSegundoReducer.nome

      document.querySelector('#sobrenome-1').innerHTML = store.getState().meuPrimeiroReducer.sobrenome
      document.querySelector('#sobrenome-2').innerHTML = store.getState().meuSegundoReducer.sobrenome
    })
}