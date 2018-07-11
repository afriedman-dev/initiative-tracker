import React from 'react';
import ReactDOM from 'react-dom';
import InitiativeList from './InitiativeList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InitiativeList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Testing', () => {
  it('some text', () => {
    expect(true).toEqual(true);
  });
});