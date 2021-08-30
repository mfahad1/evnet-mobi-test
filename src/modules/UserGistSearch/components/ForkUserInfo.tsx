import { WithLoader } from "../../../components/WithLoader";
import useFetchForkUser from "../../../hooks/services/useFetchForkUser";

import './ForkUserInfo.scss';

export function ForkUserInfo({ gistId }: { gistId: string }) {
  const { data: forkedUserInfo, isFetching, error } = useFetchForkUser(gistId);

  return (
    <WithLoader loading={isFetching} error={!!error}>
      <div className="ForkUserInfo_AvatarList AlignItemsCenter">
        {forkedUserInfo && forkedUserInfo.length > 0 && <h3>FORKED BY:</h3>}
        {forkedUserInfo?.slice(0, 3).map(({ html_url, owner: { avatar_url, login } }) => (
          <a key={login} href={html_url} className="Avatar" target="_blank" rel="noreferrer">
            <img src={avatar_url} alt="avatar" />
          </a>
        ))}
      </div>
    </WithLoader>
  )
}