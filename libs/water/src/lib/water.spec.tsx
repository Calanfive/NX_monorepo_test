import { render } from '@testing-library/react';

import Water from './water';

describe('Water', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Water />);
    expect(baseElement).toBeTruthy();
  });
});
