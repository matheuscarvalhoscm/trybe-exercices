window.onload = function () {
  const NEXT_COLOR = 'NEXT_COLOR'
  const PREVIOUS_COLOR = 'PREVIOUS_COLOR'
  const RANDOM_COLOR = 'RANDOM_COLOR'
  
  const ESTADO_INICIAL = {
    colors: ["white", "black", "red", "green", "blue", "yellow"],
    index: 0,
  };

  const reducer = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {
      case NEXT_COLOR:
        return {...state, index: action.payload.index
        } 
      case PREVIOUS_COLOR:
        return {...state, index: action.payload.index
        }
        case RANDOM_COLOR:
          return {...state, index: action.payload.index
        }
      default:
        return state;
    }
  }

  const store = Redux.createStore(reducer);

  const previousColorButton = document.querySelector('#previous')
  const nextColorButton = document.querySelector('#next');
  const randomColorButton = document.querySelector('#random');
  
  const randomColor = () => {
    return Math.floor(Math.random() * 6)
  }

  previousColorButton.addEventListener('click', () => {
    store.dispatch({ type: PREVIOUS_COLOR, payload: { index: 
      store.getState().index <= 0
        ? store.getState().index = 5
        : store.getState().index - 1 
    } })
  })

  nextColorButton.addEventListener('click', () => {
    store.dispatch({type: NEXT_COLOR, payload: { index: 
      store.getState().index >= 5
        ? store.getState().index = 0
        : store.getState().index + 1 } })
  })
  
  randomColorButton.addEventListener('click', () => {
    nextColorButton.addEventListener('click', () => {
      store.dispatch({type: RANDOM_COLOR, payload: { index: store.getState().index = randomColor() } })
    })
    console.log(randomColor())
  })

  store.subscribe(() => {
    const colorIndex = store.getState().index
    document.querySelector('#container').style.backgroundColor = store.getState().colors[colorIndex]
    document.querySelector('#value').innerHTML = store.getState().colors[colorIndex]
  })
};
