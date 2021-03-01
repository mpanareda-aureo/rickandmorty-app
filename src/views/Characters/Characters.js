import "./Character.css";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List } from "../../components/List";
import { Item } from "../../components/Item";
import fetchCharacters from "../../store/actions/characters";
import { fetchFavs, updateFav } from "../../store/actions/favs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import useToken from "../../hooks/useToken";

export const Characters = () => {
  // Hooks from redux store
  const characters = useSelector((state) => state.characters);
  const favs = useSelector((state) => state.favs);
  const dispatch = useDispatch();

  // Authentication token
  const { token } = useToken();

  // Pagination
  const [page, setPage] = useState(1);

  // Load characters on start and change page
  useEffect(() => {
    dispatch(fetchCharacters(token, page));
  }, [token, page, dispatch]);

  // load favs on start
  useEffect(() => {
    dispatch(fetchFavs(token));
  }, [token, dispatch]);

  // next/prev buttons
  const next = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const prev = () => {
    setPage((prevPage) => prevPage - 1);
  };

  // Add/Remove favourites
  const setFav = () => {
    dispatch(updateFav(token, selected.id, true));
  };
  const unsetFav = () => {
    dispatch(updateFav(token, selected.id, false));
  };

  // Selected
  const [selected, setSelected] = useState({});

  const selectCharacter = (id) => {
    setSelected(characters.data.find((item) => item.id === id));
    window.scrollTo(0, 0);
  };
  const handleClose = () => {
    setSelected({});
  };

  // Favs
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(selected && favs ? favs.data.includes(selected.id) : false);
  }, [selected, favs]);

  if (characters.loading) {
    return <div>Loading</div>;
  }
  if (characters.error) {
    return <div>{characters.error}</div>;
  }
  return (
    <>
      <Item
        item={selected}
        fav={isFav}
        onClose={handleClose}
        onSetFav={setFav}
        onUnsetFav={unsetFav}
      />
      <List
        items={characters.data}
        favs={favs.data}
        onClick={selectCharacter}
      />
      <button onClick={() => prev()} disabled={page === 1} className="Nav">
        <FontAwesomeIcon icon={faAngleLeft} /> Prev
      </button>
      <button onClick={() => next()} disabled={characters.last} className="Nav">
        Next <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </>
  );
};

export default Characters;
