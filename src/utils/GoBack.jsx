import { useNavigate } from "react-router-dom";

export const GoBack = () => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate(-1);
  };
  return (
    <div className="go-back">
      <button onClick={navigateBack}>{`<- Go Back`}</button>
    </div>
  );
};
