import * as React from 'react';
import Movies from './index';
import { mount } from 'enzyme';

describe('<Movies>', () => {
  let movies = [
      {
        id: 1,
        title: 'Annihilation',
        description: 'Best sci fi youll ever see'
      },
      {
        id: 2,
        title: 'Lady bird',
        description: 'This stuff is for girls'
      }
    ];
  it('renders ok', () => {

    expect(mount(<Movies movies={movies} />).find('.Movie')).toHaveLength(2);
  });
});
