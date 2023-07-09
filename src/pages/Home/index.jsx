import React from "react";
import TypingEffect from "../../components/effects/typingEffect";
import Image from "../../components/Image";
import curriculo from "../../assets/Curriculo.pdf";
import { MainContainer, Cols, Cols0, Text } from "./style";
import Button from "../../components/Button";

const Home = () => {
  return (
    <>
      <MainContainer id="Home">
        <Cols0>
          <Text>
            <span className="topline">Hello</span>
            <h1>
              I'm
              <span>
                <TypingEffect />
              </span>
            </h1>
          </Text>
          <div className="btns">
            <Button
              color="#3d535f"
              backgroundColor="#7f00ff"
              download="Curriculo.pdf"
              href={curriculo}
              name="Download CV"
            />
            <Button
              color="#3d535f"
              backgroundColor="#7f00ff"
              name="Hire Me"
              href="https://wa.me/qr/WXL5LUDOYNQXC1"
            />
          </div>
        </Cols0>
        <Cols>
          <Image />
        </Cols>
      </MainContainer>
    </>
  );
};

export default Home;
