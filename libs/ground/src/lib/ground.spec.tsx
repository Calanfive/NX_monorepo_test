import { render } from '@testing-library/react';

import Ground from './ground';

describe('Ground', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ground />);
    expect(baseElement).toBeTruthy();
  });
});
