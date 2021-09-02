import { WithLoader } from '../../../components/WithLoader';
import useFetchForkUser, { UserInfo } from '../../../hooks/services/useFetchForkUser';

import './ForkUserInfo.scss';

const sortByUpdatedAt = (previous: UserInfo, current: UserInfo) =>
  new Date(previous.updated_at).getTime() - new Date(current.updated_at).getTime();

export function ForkUserInfo({ gistId }: { gistId: string }) {
  const { data: forkedUserInfo, isFetching, error } = useFetchForkUser(gistId);

  return (
    <WithLoader loading={isFetching} error={!!error}>
      <div className="ForkUserInfo_AvatarList AlignItemsCenter">
        {forkedUserInfo && forkedUserInfo.length > 0 && <h3>FORKED BY:</h3>}
        {forkedUserInfo
          ?.sort(sortByUpdatedAt)
          .slice(0, 3)
          .map(({ html_url, owner: { avatar_url, login } }) => (
            <a key={html_url} href={html_url} className="Avatar" target="_blank" rel="noreferrer">
              <img src={avatar_url} alt="avatar" />
            </a>
          ))}
      </div>
    </WithLoader>
  );
}
