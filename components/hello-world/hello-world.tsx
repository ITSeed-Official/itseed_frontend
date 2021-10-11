export type Props = {
  name: string;
};

const HelloWorld = ({ name }: Props) => {
  return (
    <p style={{ padding: "24px", fontSize: "16px" }}>
      Hello {name}, how are you?
    </p>
  );
};

export default HelloWorld;
