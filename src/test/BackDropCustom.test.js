import react from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import Header from '../components/Header';
import BackDropCustom   from "../components/utils/BackDropCustom";
test('renders learn react link', () => {
   const {debug}= render(<BackDropCustom />);
    // eslint-disable-next-line testing-library/no-debugging-utils
  debug();
})