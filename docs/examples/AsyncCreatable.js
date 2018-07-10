import React, { Component } from 'react';

import AsyncCreatableSelect from '../../src/AsyncCreatable';
import { colourOptions } from '../data';

const filterColors = (inputValue: string) =>
  colourOptions.filter(i =>
    i.label.toLowerCase().indexOf(inputValue.toLowerCase() > -1)
  );

const promiseOptions = inputValue =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(filterColors(inputValue));
    }, 1000);
  });

export default class WithPromises extends Component<*, State> {
  render() {
    return (
      <AsyncCreatableSelect
        cacheOptions
        defaultOptions
        loadOptions={promiseOptions}
      />
    );
  }
}
