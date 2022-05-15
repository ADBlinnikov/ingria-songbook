import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const SongInput = ({ onSubmit }) => {
  const [value, updateValue] = React.useState("");
  const inputEl = React.useRef(null);

  const handleChange = (e) => {
    updateValue(e.target.value);
  };

  const handleSubmit = (e) => {
    updateValue("");
    onSubmit(value);
    inputEl.current.focus();
  };

  return (
    <div className="field is-grouped">
      <div className="control is-expanded">
        <input
          ref={inputEl}
          className="input"
          type="text"
          placeholder="Номер гимна"
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className="control">
        <button className="button is-primary" onClick={handleSubmit}>
          Добавить
        </button>
      </div>
    </div>
  );
};

const SongRow = ({ song, onRemove }) => {
  return (
    <li className="block">
      <span className="tag is-medium">
        {song}
        <button
          className="delete is-medium"
          onClick={() => onRemove(song)}
          aria-label="Delete"
        />
      </span>
    </li>
  );
};

const CreatePlaybook = () => {
  const [songs, updateSongs] = React.useState([]);

  const addSong = (newSong) => {
    updateSongs([...songs, newSong]);
  };

  const deleteSong = (deleted) => {
    const newList = songs.filter((song) => song !== deleted);
    updateSongs(newList);
  };

  return (
    <Layout>
      <div className="title">Какие песни поем?</div>
      <div className="box p-5 m-5">
        <ul>
          {songs.map((song) => (
            <SongRow key={song} song={song} onRemove={deleteSong} />
          ))}
        </ul>
      </div>
      <SongInput onSubmit={addSong} />
      <div className="block">
        <Link to={`/hymns/${songs[0]}#0`} state={{ songs: songs }}>
          <button
            className="button is-link is-medium is-fullwidth"
            disabled={songs.length === 0}
          >
            Поехали
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default CreatePlaybook;
