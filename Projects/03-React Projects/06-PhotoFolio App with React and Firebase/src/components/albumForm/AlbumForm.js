import styles from "./albumForm.module.css";
import { useRef } from "react";

export const AlbumForm = ({ onAdd, loading }) => {
  const albumNameInput = useRef();

  const handleClear = () => (albumNameInput.current.value = "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const albumName = albumNameInput.current.value;
    onAdd(albumName);
    handleClear();
  };

  return (
    <div className={styles.albumForm}>
      <span>Create an album</span>
      <form onSubmit={handleSubmit}>
        <input required placeholder="Album Name" ref={albumNameInput} />
        <button type="button" onClick={handleClear} disabled={loading}>
          Clear
        </button>
        <button disabled={loading}>Create</button>
      </form>
    </div>
  );
};
