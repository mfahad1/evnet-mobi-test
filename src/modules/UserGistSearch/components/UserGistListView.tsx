import { WithLoader } from '../../../components/WithLoader';
import { UserGistWithForkUsers } from '../../../hooks/services/useFetchUserGists';
import './UserGistListView.scss';

type UserGistListViewProps = {
  gists: UserGistWithForkUsers[] | undefined;
  loading: boolean;
  error: boolean;
};

export default function UserGistListView(props: UserGistListViewProps) {
  const { gists, loading, error } = props;

  return (
    <div className="UserGistListView">
      <WithLoader loading={loading} error={error}>
        <>
          <h1>Number of gist for searched user: {gists?.length || 0}</h1>
          {gists && gists.map((gist) => <UserGistListItem gist={gist} key={gist.id} />)}
        </>
      </WithLoader>
    </div>
  );
}

export function UserGistListItem({ gist }: { gist: UserGistWithForkUsers }) {
  const tags = [...new Set(Object.values(gist.files).map((file) => file.type))];

  return (
    <div className="UserGistListView_Item">
      <a href={gist.html_url} target="_blank" rel="noreferrer">
        {gist.description ? gist.description : gist.id}
      </a>
      <div className="AlignItemsCenter">
        {tags.length > 0 && <h3>TAGS:</h3>}
        {tags.map((tag) => (
          <span key={tag} className="badge">
            {tag}
          </span>
        ))}
      </div>

      <div className="UserGistListView_AvatarList AlignItemsCenter">
        {gist.forkedUsers.length > 0 && <h3>FORKED BY:</h3>}
        {gist.forkedUsers.map(({ html_url, avatar_url, login }) => (
          <a key={login} href={html_url} className="Avatar" target="_blank" rel="noreferrer">
            <img src={avatar_url} alt="avatar" />
          </a>
        ))}
      </div>
    </div>
  );
}
