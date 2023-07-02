import { useState } from "react";
import { Button, Flex, Icon, Text, View } from "vcc-ui";

export default function Home() {
  const [playVideo, setPlayVideo] = useState<boolean>(true);

  function playPause() {
    var myVideo = document.getElementById("video_ex30");
    if (myVideo?.paused) {
      myVideo?.play();
      setPlayVideo(true);
    } else {
      myVideo?.pause();
      setPlayVideo(false);
    }
  }

  return (
    <>
      <Flex
        extend={{
          width: "100vw",
          height: "600px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Flex
          extend={{
            position: "absolute",
            flexDirection: "column",
            zIndex: 10,
            gap: 18,
            textAlign: "center",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
            top: 50,
          }}
        >
          <Text extend={{ color: "white" }} subStyle="emphasis">
            A grandiosidade do nosso menos SUV
          </Text>
          <Text
            variant={{ default: "ootah" }}
            extend={{ color: "white" }}
            subStyle="emphasis"
          >
            EX30
          </Text>
          <View
            extend={{
              maxWidth: "200px",
              "@media (max-width: 1000px)": { display: "none" },
            }}
          >
            <Button variant="default">SAIBA MAIS</Button>
          </View>
        </Flex>
        <video
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          id="video_ex30"
          onClick={playPause}
          autoPlay
          muted
        >
          <source src="/ex30_recharge.mp4" type="video/mp4" />
          Desculpe, seu navegador não suporta vídeos.
        </video>
        <View
          onClick={playPause}
          extend={{
            display: "flex",
            position: "absolute",
            bottom: 0,
            width: "100%",
            padding: 10,
            alignItems: "flex-end",
          }}
        >
          {playVideo ? (
            <Icon type="mediacircled-play-48" />
          ) : (
            <Icon type="mediacircled-pause-48" />
          )}
        </View>
      </Flex>
      <Flex
        extend={{
          width: "100vw",
          height: "80px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          extend={{
            maxWidth: "200px",
            "@media (min-width: 1000px)": { display: "none" },
          }}
        >
          <Button variant="default">SAIBA MAIS</Button>
        </View>
      </Flex>
    </>
  );
}
