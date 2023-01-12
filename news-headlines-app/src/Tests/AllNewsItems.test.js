import { render, screen } from '@testing-library/react';
import AllNewsItems from '../Components/AllNewsItems';
import mockNewsData from '../mockNewsData.json';

//_____________________________________________________________________________________________________
//These are the initial tests for static data which all passed (see commits tests 1c and 2a)

test(`it should render the correct number of newsItem components based on the sample array supplied`, () => {

    const mockNewsDataLength = mockNewsData.length;
    render(<AllNewsItems data={{ newsItems: mockNewsData }} />);
    const numberOfRows = screen.findAllByRole('tr').length;
    expect(numberOfRows).toBe(mockNewsDataLength);
});

test(`it should render the correct number of images based on the sample data`, () => {

    const mockNewsImageLength = mockNewsData.length;
    render(<AllNewsItems data={{ newsItems: mockNewsData }} />);
    const numberOfRows = screen.findAllByRole('img').length;
    expect(numberOfRows).toBe(mockNewsImageLength);
});

