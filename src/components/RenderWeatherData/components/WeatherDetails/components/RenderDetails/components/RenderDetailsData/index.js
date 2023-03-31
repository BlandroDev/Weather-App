const RenderDetailsData = ({ value, name }) => {
  return (
    <div>
      <p className="RenderDetails__p--content">{name}</p>
      <p className="RenderDetails__p--content strong">{value}</p>
    </div>
  );
};

export default RenderDetailsData;
