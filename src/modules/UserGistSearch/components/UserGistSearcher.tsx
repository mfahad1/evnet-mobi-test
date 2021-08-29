import InputField from '../../../components/InputField';
import { ReactComponent as SearchSVG } from '../../../resources/icons/search.svg';
import './UserGistSearcher.scss';

type UserGistSearcherProps = {
  onComplete: (val: string) => void;
};

export default function UserGistSearcher({ onComplete }: UserGistSearcherProps) {
  return (
    <div className="UserGistSearcher">
      <h1>Search Git Gist By User Name</h1>
      <div className="UserGistSearcher_Form">
        <InputField
          onComplete={onComplete}
          debounce={1000}
          onEnter={onComplete}
          className="Input"
          placeholder="Enter Username"
        />

        <button className="UserGistSearcher_Button">
          <SearchSVG />
        </button>
      </div>
    </div>
  );
}
