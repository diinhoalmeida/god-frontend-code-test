import { useState } from "react";
import { Button, Flex, Logo, Text, View } from "vcc-ui";
import HeaderOverlay from "./HeaderOverlay/headerOverlay";
import HeaderSideDrawer from "./HeaderSideDrawer/headerSideDrawer";

interface HeaderProps {
  nav: boolean;
  setNav: (arg: boolean) => void;
}

export default function Header({ nav, setNav }: HeaderProps) {
  return (
    <Flex
      extend={{
        width: "100vw",
        height: "70px",
        backgroundColor: "#FAFAFA",
        justifyContent: "center",
        position: "fixed",
        alignItems: "center",
        zIndex: 10,
        flexDirection: "row",
      }}
    >
      <Flex
        extend={{
          width: "95%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo type="spreadmark" height={8} />
        <Flex
          extend={{
            flexDirection: "row",
            height: "100%",
            alignItems: "center",
            gap: "20",
          }}
        >
          <View
            onClick={() => setNav(true)}
            extend={{
              display: "flex",
              ":hover": { borderBottomColor: "black", cursor: "pointer" },
              borderBottom: "2px solid transparent",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Text>Nossos carros</Text>
          </View>
          <View
            onClick={() => setNav(true)}
            extend={{
              display: "flex",
              ":hover": { borderBottomColor: "black", cursor: "pointer" },
              borderBottom: "2px solid transparent",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Text>Menu</Text>
          </View>
        </Flex>
      </Flex>
      {nav && <HeaderOverlay />}
      <HeaderSideDrawer nav={nav} setNav={setNav} />
    </Flex>
  );
}
