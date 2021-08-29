import renderer from 'react-test-renderer';
import UserGistSearcher from './UserGistSearcher';

describe('WithLoader', () => {
  it('should match snapshot', () => {
    const elem = renderer.create(<UserGistSearcher onComplete={jest.fn} />).toJSON();

    expect(elem).toMatchSnapshot();
  });
});
