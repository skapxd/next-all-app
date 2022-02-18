import { ArrowDirection, ArrowIcon } from "components/lv0/Icon/ArrowIcon";

/**
 * @param {Object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {() => void} [props.onClick]
 * @returns
 */
export function Metadata(props) {
  const {
    description = "default description",
    onClick = () => console.log("default onClick"),
    title = "default title",
  } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h2>{title}</h2>

        <ArrowIcon direction={ArrowDirection.right} />
      </div>

      <p>{description}</p>
    </div>
  );
}
