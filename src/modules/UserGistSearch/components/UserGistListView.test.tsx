import * as faker from 'faker';
import renderer from 'react-test-renderer';
import UserGistListView, { UserGistListItem } from './UserGistListView';

export const fakerUser = () => ({
  id: faker.datatype.uuid(),
  description: faker.random.words(5),
  html_url: faker.datatype.string(5),
  files: { file: { type: 'application/json' } },
  forks_url: faker.datatype.string(5),
  login: faker.datatype.string(5),
  avatar_url: faker.datatype.string(5),
  forkedUsers: [
    {
      login: faker.datatype.string(5),
      avatar_url: faker.datatype.string(5),
      html_url: faker.datatype.string(5),
    },
  ],
});

const staticFakeUser = {
  id: 'testing',
  html_url: 'testing',
  files: { file: { type: 'application/json' } },
  forks_url: 'testing',
  forkedUsers: [
    {
      login: 'testing',
      avatar_url: 'testing',
      html_url: 'testing',
    },
  ],
};

describe('UserGistListItem', () => {
  it('should match UserGistListItem', () => {
    const elem = renderer.create(<UserGistListItem gist={staticFakeUser} />).toJSON();

    expect(elem).toMatchSnapshot();
  });

  it('should match UserGistListItem gist id', () => {
    const elem = renderer.create(<UserGistListItem gist={staticFakeUser} />).toJSON();

    expect(elem).toMatchSnapshot();
  });
});

describe('UserGistListView', () => {
  it('should match UserGistListView', () => {
    const elem = renderer.create(<UserGistListView gists={[staticFakeUser]} loading={false} error={false} />).toJSON();

    expect(elem).toMatchSnapshot();
  });
});
