const BtnStandard = ({ title, action }) => {
  return (
    <div>
      <button style={{ margin: "0px 5px" }} onClick={action}>
        {title}
      </button>
    </div>
  );
};

export default BtnStandard;
