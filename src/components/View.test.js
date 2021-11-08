import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import View from './View';


test("renders zero articles without errors", async () => {
  render (<View articles={[]}/>)
});

test("renders three (4?) articles without errors", async ()=> {
  render (<View />)
  const allArticles = screen.getAllByTestId("article");
    await waitFor(() => {
      expect(allArticles).toHaveLength(4)
    })

});


//Task List
//1. Complete the above two tests. Make sure to mocking the articleService call before rendering.