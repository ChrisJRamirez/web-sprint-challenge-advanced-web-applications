import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { screen } from '@testing-library/dom';

const articles = [
  {
    id: Date.now(),
    headline: "Less than half of Seattle homes have air conditioning",
    createdOn: moment().subtract(Math.random()*10, "days").format(),
    author:"Chris",
    image: 134,
    summary: "Triple digit temperatures",
    body: "Inside the attic of a one-story gray house",
},
]
test('renders component without errors', ()=> {
  render (<Article/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render (<Article articles={articles}/>);

    let headlineElement = screen.queryByTestId("headline");
    let authorElement = screen.queryByTestId("author");

    expect(headlineElement).toContain("Less than half of Seattle homes have air conditioning");
    expect(authorElement).toContain("Chris");
});

test('renders "Associated Press" when no author is given', ()=> {
  render (<Article articles={[]}/>)

  let authorElement = screen.queryByTestId("author");

  expect(authorElement). toContain("Associated Press")

});

test('executes handleDelete when the delete button is pressed', ()=> {
  render (<Article/>)

  let deleteBtn = screen.getByTestId("deleteButton")

  setTimeout(() => userEvent.click(deleteBtn))
});

//Task List:
//1. Complete all above tests. Create test article data when needed.