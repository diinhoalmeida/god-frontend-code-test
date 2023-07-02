import { View } from "vcc-ui";

export default function HeaderOverlay() {
  return (
    <View
      extend={{
        backgroundColor: "RGBA(0, 0, 0, 0.45)",
        position: "fixed",
        zIndex: 10,
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
      }}
    ></View>
  );
}
