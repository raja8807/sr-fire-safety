const PageHeading = (props) => {
  const { heading,color='black' } = props;

  return (
    <h2
      style={{
        textAlign: "center",
        marginBottom: "20px",
        fontWeight: "600",
        fontSize: "30px",
        color
      }}
    >
      {heading?.toUpperCase()}
    </h2>
  );
};

export default PageHeading;
