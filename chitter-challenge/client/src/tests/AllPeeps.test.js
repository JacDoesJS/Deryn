import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AllPeeps from '../components/AllPeeps';
import peepData from '../components/utils/peepData.json';

describe('AllPeeps tests', () => {

    test(`it should render the correct number of Peep components based on the peep array supplied`, () => {

        const peepDataLength = peepData.length;

        render(<MemoryRouter><AllPeeps data={{ peeps: peepData }} /></MemoryRouter>);

        // Test relies on all sample todo descriptions containing `sample` and it not appearing in any other text
        // May be better to use a unique string in test data!
        const numberOfRows = screen.getAllByText(/sample/i).length;

        expect(numberOfRows).toBe(peepDataLength);
    });



});