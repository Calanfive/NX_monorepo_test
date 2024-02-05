import { render } from '@testing-library/react';

import Air from './air';

describe('Air', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Air />);
    expect(baseElement).toBeTruthy();
  });
});
