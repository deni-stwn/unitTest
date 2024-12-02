import 'react-native';
import {it, describe, expect, test} from '@jest/globals';
import {kurang, tambah} from '../src';

describe('Matematika fungsi', () => {
  it('Penambahan 2 bilangan', () => {
    expect(tambah(1, 2)).toBe(3);
  });

  it('Pengurangan 2 bilangan', () => {
    expect(kurang(1, 2)).toBe(-1);
  });
});

// import React from 'react';
// import {fireEvent, render} from '@testing-library/react-native';
// import App from '../App';

// test('navigates to next screen on button press', () => {
//   const {getByText} = render(<App />);
//   const button = getByText('Next');
//   fireEvent.press(button);
//   expect(getByText('Next Screen')).toBeTruthy();
// });
