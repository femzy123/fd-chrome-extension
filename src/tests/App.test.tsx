/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hi, User/i);
  expect(linkElement).toBeInTheDocument();
});

const mockData = [
  {
    _id: "1",
    highlightedText: "Highlighted text 1",
    summary: "Summary 1",
  },
  {
    _id: "2",
    highlightedText: "Highlighted text 2",
    summary: "Summary 2",
  },
];

describe("Home component", () => {
  test("renders without crashing", () => {
    render(<App />);
  });

   test("displays 'No Summaries added yet!' message when no summaries are fetched", async () => {
     // Mock the fetch function to return an empty array
     global.fetch = jest.fn().mockResolvedValue({
       json: jest.fn().mockResolvedValue([]),
     });

     render(<App />);

     // Wait for the component to fetch and render the summaries
     await waitFor(() => {
       expect(screen.getByText("No Summaries added yet!")).toBeInTheDocument();
     });
   });

  test("fetches and renders summaries", async () => {
    
    // Mock the fetch function
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    render(<App />);

    // Wait for the component to fetch and render the summaries
    await waitFor(() => {
      expect(screen.getByText("Highlighted text 1")).toBeInTheDocument();
      expect(screen.getByText("Summary 1")).toBeInTheDocument();
      expect(screen.getByText("Highlighted text 2")).toBeInTheDocument();
      expect(screen.getByText("Summary 2")).toBeInTheDocument();
    });
  });

  test("renders correct highlighted text and summary for each summary", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    render(<App />);

    await waitFor(() => {
      mockData.forEach((summary) => {
        expect(screen.getByText(summary.highlightedText)).toBeInTheDocument();
        expect(screen.getByText(summary.summary)).toBeInTheDocument();
      });
    });
  });
});
