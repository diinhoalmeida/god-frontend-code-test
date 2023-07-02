import { Flex, Icon, View, Text, Logo } from "vcc-ui";

interface HeaderSideDrawerProps {
  nav: boolean;
  setNav: (arg: boolean) => void;
}

export default function HeaderSideDrawer({
  nav,
  setNav,
}: HeaderSideDrawerProps) {
  return (
    <View
      extend={{
        position: "fixed",
        top: 0,
        right: nav ? 0 : "-100%",
        width: "400px",
        height: "100vh",
        backgroundColor: "white",
        zIndex: 10,
        transition: "right 0.3s",
      }}
    >
      <Flex
        extend={{
          height: "50px",
          borderBottom: "1px solid black",
          width: "100%",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <View
          onClick={() => setNav(false)}
          extend={{
            position: "absolute",
            right: 25,
            top: 25,
            cursor: "pointer",
          }}
        >
          <Icon type="navigation-close-24" />
        </View>
        <Logo type="spreadmark" height={8} />
      </Flex>
      <Flex>
        <nav>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              listStyle: "none",
              padding: 4,
              color: "gray",
            }}
          >
            <li
              style={{
                paddingBottom: 4,
              }}
            >
              <View
                extend={{
                  ":hover": {
                    backgroundColor: "RGBA(0, 0, 0, 0.10)",
                    cursor: "pointer",
                  },
                  padding: "8px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text variant="hillary" subStyle="emphasis">
                  Iniciar sessão com o Volvo ID
                </Text>
              </View>
            </li>
            <li
              style={{
                fontSize: "24px",

                paddingTop: 4,
                paddingBottom: 4,
              }}
            >
              <View
                extend={{
                  ":hover": {
                    backgroundColor: "RGBA(0, 0, 0, 0.10)",
                    cursor: "pointer",
                  },
                  padding: "8px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Text variant="hillary" subStyle="emphasis">
                  Configurador de carro
                </Text>
              </View>
            </li>
            <li
              style={{
                fontSize: "24px",

                paddingTop: 4,
                paddingBottom: 4,
              }}
            >
              <View
                extend={{
                  ":hover": {
                    backgroundColor: "RGBA(0, 0, 0, 0.10)",
                    cursor: "pointer",
                  },
                  padding: "8px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="hillary" subStyle="emphasis">
                  Comprar
                </Text>
                <Icon type="navigation-chevronforward-24" />
              </View>
            </li>
            <li
              style={{
                fontSize: "24px",

                paddingTop: 4,
                paddingBottom: 4,
              }}
            >
              <View
                extend={{
                  ":hover": {
                    backgroundColor: "RGBA(0, 0, 0, 0.10)",
                    cursor: "pointer",
                  },
                  padding: "8px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text variant="hillary" subStyle="emphasis">
                  Proprietário
                </Text>
                <Icon type="navigation-chevronforward-24" />
              </View>
            </li>
            <li
              style={{
                fontSize: "24px",

                paddingTop: 4,
                paddingBottom: 4,
              }}
            >
              <View
                extend={{
                  ":hover": {
                    backgroundColor: "RGBA(0, 0, 0, 0.10)",
                    cursor: "pointer",
                  },
                  padding: "8px",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text variant="hillary" subStyle="emphasis">
                  Parque Volvo
                </Text>
                <Icon type="navigation-chevronforward-24" />
              </View>
            </li>
            <li
              style={{
                fontSize: "24px",
                paddingTop: 4,
                paddingBottom: 4,
              }}
            >
              <View
                extend={{
                  ":hover": {
                    backgroundColor: "RGBA(0, 0, 0, 0.10)",
                    cursor: "pointer",
                  },
                  padding: "8px",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text variant="hillary" subStyle="emphasis">
                  Mais
                </Text>
                <Icon type="navigation-chevronforward-24" />
              </View>
            </li>
          </ul>
        </nav>
        <View
          extend={{
            ":hover": {
              backgroundColor: "RGBA(0, 0, 0, 0.10)",
              cursor: "pointer",
            },
            padding: "15px",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            borderTop: "1px solid RGBA(0,0,0,0.25)",
            borderBottom: "1px solid RGBA(0,0,0,0.25)",
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Text subStyle="inline-link">Brasil</Text>
          <Icon type="navigation-chevronforward-24" />
        </View>
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            listStyle: "none",
            padding: 4,
            color: "gray",
            paddingLeft: 20,
            gap: 20,
          }}
        >
          <li style={{ cursor: "pointer" }}>
            <Icon type="thirdparty-facebook-24" />
          </li>
          <li style={{ cursor: "pointer" }}>
            <Icon type="thirdparty-instagram-24" />
          </li>
          <li style={{ cursor: "pointer" }}>
            <Icon type="thirdparty-youtube-24" />
          </li>
          <li style={{ cursor: "pointer" }}>
            <Icon type="thirdparty-linkedin-24" />
          </li>
        </ul>
      </Flex>
    </View>
  );
}
