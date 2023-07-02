import "../public/css/styles.css";
import React, { useState } from "react";
import { StyleProvider, ThemePicker, View } from "vcc-ui";
import Header from "../src/components/Header/header";
import Home from "../src/components/Home/home";

function HomePage() {
  const [nav, setNav] = useState<boolean>(false);

  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <React.StrictMode>
          <View>
            <Header nav={nav} setNav={setNav} />
            <Home />
          </View>
        </React.StrictMode>
      </ThemePicker>
    </StyleProvider>
  );
}

export default HomePage;
