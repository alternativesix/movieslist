import * as React from 'react';
import Movies from './index';
import { mount, shallow } from 'enzyme';

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

describe('<Movies>', () => {
  it('renders ok', () => {
    let props = { loading: false, error: undefined, movies: movies };

    expect(mount(<Movies {...props} />).find('.Movie')).toHaveLength(2);
  });

  it('shows loading while loading', () => {
    let props = { loading: true, error: undefined, movies: [] };

    expect(shallow(<Movies {...props} />).text()).toContain('loading');
  });

  it('shows error when provided', () => {
    let props = { loading: false, error: { message: 'something' }, movies: [] };

    expect(shallow(<Movies {...props} />).text()).toContain('something');
  });
});
