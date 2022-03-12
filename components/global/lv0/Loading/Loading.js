// @ts-check
import LinearProgress from "@mui/material/LinearProgress";

export function Loading() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        zIndex: 100,
        width: "100%",
        maxWidth: "430px",
      }}
    >
      <LinearProgress />
    </div>
  );
}
