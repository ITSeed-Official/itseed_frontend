type Props = {
  name: string;
};

const HelloWorld = ({ name }: Props) => {
  return <p style={{ padding: "24px", fontSize: "12px" }}>Hello {name}</p>;
};

export default HelloWorld;
