import { render } from '@testing-library/react';
import NotFound from '../Components/utils/NotFound';

test(`NotFound matches snapshot`, () => {
    const notFoundComponent = render(<NotFound />);

    expect(notFoundComponent).toMatchSnapshot();
});