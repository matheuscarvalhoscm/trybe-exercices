import React from 'react';
import { Provider } from 'react-redux';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import App from './App';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={ store }> { component } </Provider>)
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  it('test clique aqui button with text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const button = queryByText('Clique aqui');

    expect(button).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });
})

describe('mocking initial state', () => {
  beforeEach(cleanup);
  it('test clique aqui button with text 5', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });
    const button = queryByText('Clique aqui');

    expect(button).toBeInTheDocument();
    expect(queryByText('5')).toBeInTheDocument();
  });
})

describe('testing clicks increase', () => {
  beforeEach(cleanup);
  it('testing if a click increases the counter', () => {
    const { queryByText } = renderWithRedux(<App />);
    const button = queryByText('Clique aqui');

    expect(button).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
    userEvent.click(button);
    expect(queryByText('1')).toBeInTheDocument();
    
  });
})

describe('testing click moking initial state', () => {
  beforeEach(cleanup);
  it('clicking the button should increase counter from 10 to 11', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } });
    const button = queryByText('Clique aqui');

    expect(button).toBeInTheDocument();
    expect(queryByText('10')).toBeInTheDocument();
    userEvent.click(button);
    expect(queryByText('11')).toBeInTheDocument();
  });
})
