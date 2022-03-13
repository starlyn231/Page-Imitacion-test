import { useState, useEffect } from "react";
import { EdeesteLogoimage, AuthBackgroundImage } from "./LoginConstants";
import {
  LogoImage,
  Image,
  LoginContainer,
  LeftPanelContainer,
  Title,
  FlexStartContainer,
  LinkText,
  BodyText,
  FooterContainer,
  TextFieldContainer,
  TextError,
  ImageLogo,
} from "./styles/LoginStyles";
import {
  StyledButton,
  Row,
  SmallHeightDivider,
  MediumHeightDivider,
} from "../../../theme/Styles";
import COLORS from "../../../theme/Colors";
import TextField from "../../../component/TextField/TextField";

function Login() {
  return (
    <Image
      style={{
        backgroundImage: `url(${AuthBackgroundImage})`,
      }}
    >
      <div
        style={{
          // position: "absolute",

          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          width: "40%",
          height: "300px",

          //boxShadow:
        }}
      >
        {" "}
        <ImageLogo src={EdeesteLogoimage} />
        <div
          style={{
            backgroundColor: "#002272",
            alignItems: "center",
            opacity: "0.6",

            left: 0,
            top: 0,
            margin: "2px",
            padding: "2px",
            //boxShadow:
          }}
        >
          <div>
            <h3>INICIAR SESIóN</h3>
          </div>
          <div style={{ height: "25px" }}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "85%",
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
            }}
            className='centerContainer'
          >
            <TextField title='Correo electronico' type='text' id='id' />
            <TextField title='Contraseña' type='password' id='id' />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              reiciendis quia, hic enim ab ea aliquam velit nulla libero eum
              commodi voluptas veritatis. Architecto, nihil? Quia nam minima
              quae cupiditate.
            </p>
          </div>
        </div>
      </div>
      <Image />
    </Image>
  );
}

export default Login;
