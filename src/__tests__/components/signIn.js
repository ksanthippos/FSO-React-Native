import React from 'react';
import { render, fireEvent, waitFor, act } from '@testing-library/react-native';
import { SignInContainer} from '../../components/SignIn'

/* 
NOTE: Tests pass, but with warning:
"You called act(async () => ...) without await. This could lead to unexpected testing behaviour, 
interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
*/

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSubmit = jest.fn();
      const { getByTestId } = render(<SignInContainer onSubmit={onSubmit} />);

      await act(async () => {
        fireEvent.changeText(getByTestId('usernameField'), 'testaaja');
      });

      await act(async () => {
        fireEvent.changeText(getByTestId('passwordField'), 'salainen');
      });

      await act(async () => {
        fireEvent.press(getByTestId('submitButton'));
      });

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'testaaja',
          password: 'salainen',
        });
      });

    });
  });
});