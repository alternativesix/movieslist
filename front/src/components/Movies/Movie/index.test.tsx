import * as React from 'react';
import Movie from './index';
import { shallow } from 'enzyme';

const getMovie = (props: Pick<Movie, 'title' | 'description'>) => shallow(<Movie {...props} />);

describe('<Movie>', () => {
  it('renders ok', () => {
    let props = {
      title: 'Annihilation',
      description: 'Best sci fi youll ever see'
    };

    expect(getMovie(props).find('.Movie-title').text()).toContain(props.title);
    expect(getMovie(props).find('.Movie-description').text()).toContain(props.description);
  });

  it('doesn\'t render description when not provided', () => {
    let props = {
      title: 'Annihilation'
    };

    expect(getMovie(props).find('.Movie-description').isEmpty()).toBeTruthy();
  });
});
