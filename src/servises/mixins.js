import {css} from 'styled-components';
import {SIZES} from '../consts/sizes';

/**
 * Миксин для smaller queries
 * @type {{}}
 */
export const smaller = Object.keys(SIZES).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${SIZES[label]}px) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export const bigger = Object.keys(SIZES).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${SIZES[label]}px) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
