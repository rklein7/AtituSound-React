export const Spacer = ({ size = 1 }) => {
  const sizes = {
    1: "20px",
    2: "48px",
    3: "130px"
  };

  return <div style={{ height: sizes[size] }}></div>;
};
