import { UIEvent } from 'react';
import { WithLoader } from '../../../components/WithLoader';
import { UserGist } from '../../../hooks/services/useFetchUserGists';
import { ForkUserInfo } from './ForkUserInfo';
import './UserGistListView.scss';

type UserGistListViewProps = {
  gists: UserGist[] | undefined;
  loading: boolean;
  error: boolean;
  onScrollEnd?: () => void;
  onScrollStart?: () => void;
};

export default function UserGistListView(props: UserGistListViewProps) {
  const { gists, loading, error, onScrollEnd, onScrollStart } = props;

  const handleScroll = ({ currentTarget }: UIEvent<HTMLElement>) => {
    const bottom = currentTarget.scrollHeight - currentTarget.scrollTop === currentTarget.clientHeight;
    const top = currentTarget.scrollTop === 0;
    if (bottom && onScrollEnd) {
      onScrollEnd();
    }

    if (top && onScrollStart) {
      onScrollStart();
    }
  };

  return (
    <div className="UserGistListView" onScroll={handleScroll}>
      <WithLoader loading={loading} error={error}>
        <>{gists && gists.map((gist) => <UserGistListItem gist={gist} key={gist.id} />)}</>
      </WithLoader>
    </div>
  );
}

export function UserGistListItem({ gist }: { gist: UserGist }) {
  const tags = [...new Set(Object.values(gist.files).map((file) => file.language))].filter((tag) => tag);

  return (
    <div className="UserGistListView_Item">
      <a href={gist.html_url} target="_blank" rel="noreferrer">
        {gist.description ? gist.description : gist.id}
      </a>
      <div className="AlignItemsCenter">
        {tags.length > 0 && <h3>TAGS:</h3>}
        {tags.map((tag, index) => (
          <span key={tag + index} className="badge">
            {tag}
          </span>
        ))}
      </div>

      <ForkUserInfo gistId={gist.id} />
    </div>
  );
}
