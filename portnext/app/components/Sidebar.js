"use client";

// import { useContext } from "react";
import { MdLightbulbOutline, MdDarkMode } from "react-icons/md";
// import { Context } from "../App";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import classes from "./Sidebar.module.css";
import { toggleTheme } from "../redux/themeSlice";
import { setLang } from "../redux/langSlice";


export default function Sidebar() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const lang = useSelector((state) => state.lang.lang);

  const themeHandler = (e) => {
    e.preventDefault();
    dispatch(toggleTheme());
  };

//   const toggleLang = (e) => {
//     e.preventDefault();
//     dispatch(setLang(e));
//   };

    const langHandlerDe = (e) => {
      e.preventDefault;
      console.log('clicked de');
      dispatch(setLang('en'))

    }
    const langHandlerEn = (e) => {
      e.preventDefault;
      console.log('clicked de');
      dispatch(setLang('de'))
    }
  return (
    <aside
      className={`${classes.sidebar} d-flex flex-column justify-content-center`}
    >
      {theme === "light" ? (
        <MdDarkMode onClick={themeHandler} className={classes.lightdarkicon} />
      ) : (
        <MdLightbulbOutline
          onClick={themeHandler}
          className={classes.lightdarkicon}
        />
      )}
      {lang === "en" ? (
        <button className={classes.langselect} onClick={langHandlerEn}>
          DE
        </button>
      ) : (
        <button className={classes.langselect} onClick={langHandlerDe}>
          EN
        </button>
      )}
    </aside>
  );
}
