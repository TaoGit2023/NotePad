import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
export const Note = () => {
  return (
    <div className="note">
      <div className="note__body"></div>
      <div className="note__footer" style={{justifyContent:'flex-end'}}>
        <DeleteForeverIcon
          className="note__delete"
          aria-hidden="true"
          onClick=''
          ></DeleteForeverIcon>
      </div>
    </div>
  );
};
