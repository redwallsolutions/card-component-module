import React, { FC, FormEvent, useState } from "react";
import { render } from "react-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { createThemeWithAppearance } from "@redwallsolutions/theming-component-module";
import Card from "./lib";
import { MdArchive } from "react-icons/md";

const theming = createThemeWithAppearance();

const Reset = createGlobalStyle<any>`
    body {
		font-family: Arial, Helvetica, Geneva, Tahoma, sans-serif;
        padding: 0;
        margin: 0;
        background-color: ${(props) => theming(props).contrast};
        color: ${(props) => theming(props).color};
        &, * {
            box-sizing: border-box;
            transition: .3s;
        }
    }
`;

Reset.defaultProps = {
  appearance: "default",
} as any;

const Container = styled.div`
  height: 100vw;
  padding: 10px;
  margin: 0;
`;

const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2em;
`;

const App: FC = () => {
  const [themeMode, setThemeMode] = useState("light");
  const [appearance, setAppearance] = useState("default");

  const onChange = (event: FormEvent) => {
    let currentTarget = event.currentTarget;
    let inputName = currentTarget.attributes.getNamedItem("name").nodeValue;
    if (inputName === "mode") {
      setThemeMode(currentTarget.id);
    } else {
      setAppearance(currentTarget.id);
    }
  };

  return (
    <ThemeProvider theme={{ mode: themeMode }}>
      <Container>
        <Reset appearance={appearance} />
        <InputsContainer>
          <InputItem>
            <label htmlFor="light">Mode Light</label>
            <input type="radio" id="light" onChange={onChange} name="mode" />
          </InputItem>
          <InputItem>
            <label htmlFor="dark">Mode Dark</label>
            <input type="radio" id="dark" onChange={onChange} name="mode" />
          </InputItem>
          <InputItem>
            <label htmlFor="default">Appearance Default</label>
            <input
              type="radio"
              id="default"
              onChange={onChange}
              name="appearance"
            />
          </InputItem>
          <InputItem>
            <label htmlFor="primary">Appearance Primary</label>
            <input
              type="radio"
              id="primary"
              onChange={onChange}
              name="appearance"
            />
          </InputItem>
          <InputItem>
            <label htmlFor="secondary">Appearance Secondary</label>
            <input
              type="radio"
              id="secondary"
              onChange={onChange}
              name="appearance"
            />
          </InputItem>
        </InputsContainer>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "5em",
          }}
        >
          <div style={{ margin: 5 }}>
            <Card media="https://picsum.photos/300?random=1" />
          </div>
          <div style={{ margin: 5 }}>
            <Card
              onClick={console.log}
              headerText="With onClick handler"
              menuOptions={[{ text: "Menu" }]}
              isReady
            />
          </div>
          <div style={{ margin: 5 }}>
            <Card
              media="https://picsum.photos/300?random=2"
              supportingText="I have a supporting text and a image!"
              isReady
            />
          </div>
          <div style={{ margin: 5 }}>
            <Card
              media="https://picsum.photos/300?random=3"
              headerText="Image Thumbnail."
              thumbnail={<img src="https://picsum.photos/300?random=12" />}
              isReady
              onClick={() => {
                console.log("ok");
              }}
            />
          </div>
          <div style={{ margin: 5 }}>
            <Card
              media="https://picsum.photos/300?random=3"
              headerText="Icon Thumbnail."
              thumbnail={<MdArchive />}
              isReady
            />
          </div>
          <div style={{ margin: 5 }}>
            <Card
              media="https://picsum.photos/300?random=10"
              headerText="Image Thumbnail."
              thumbnail={<img src="https://picsum.photos/300?random=11" />}
            />
          </div>
          <div style={{ margin: 5 }}>
            <Card
              media="https://picsum.photos/300?random=4"
              headerText="Header and Image"
              subHead="AWESOMEEE"
              isReady
            />
          </div>
          <div style={{ margin: 5 }}>
            <Card headerText="Only Header Text" isReady />
          </div>
          <div style={{ margin: 5 }}>
            <Card
              headerText="Long Header Text until it gets ellipsed by passing the max limit allowed."
              isReady
            />
          </div>
          <div style={{ margin: 5 }}>
            <Card
              headerText="Header and Subhead"
              subHead="I'm a subhead! It's awesome."
              isReady
            />
          </div>
          <div style={{ margin: 5 }}>
            <Card
              headerText="I love coding"
              subHead="This is a normal subhead"
              isReady
            />
          </div>
          <div style={{ margin: 5 }}>
            <Card
              headerText="Fitting my parent"
              subHead="shouldFitContainer prop is passed here."
              shouldFitContainer
              isReady
            />
          </div>
          <div style={{ margin: 5 }}>
            <Card
              headerText="Some Menu Options"
              menuOptions={[
                {
                  text: "Option One",
                },
                {
                  text: "Option Two",
                },
                {
                  text: "Option Three",
                },
              ]}
              isReady
            />
          </div>
          <div style={{ margin: 5 }}>
            <Card
              supportingText=" "
              actions={[
                {
                  text: "Detais",
                  appearance: "primary",
                },
                {
                  text: "Other Action",
                  appearance: "primary",
                  variant: "contained",
                },
              ]}
              isReady
            />
          </div>
          <div style={{ margin: 5 }}>
            <Card>
              <p>
                <strong>It's my children.</strong>
              </p>
              <article>
                Mussum Ipsum, cacilds vidis litro abertis. Viva Forevis aptent
                taciti sociosqu ad litora torquent. Suco de cevadiss deixa as
                pessoas mais interessantis. Si u mundo tá muito paradis? Toma um
                mé que o mundo vai girarzis! Delegadis gente finis, bibendum
                egestas augue arcu ut est. Mussum Ipsum, cacilds vidis litro
                abertis. Viva Forevis aptent taciti sociosqu ad litora torquent.
                Suco de cevadiss deixa as pessoas mais interessantis. Si u mundo
                tá muito paradis? Toma um mé que o mundo vai girarzis! Delegadis
                gente finis, bibendum egestas augue arcu ut est.
              </article>
            </Card>
          </div>
          <div style={{ margin: 5 }}>
            <Card
              menuOptions={[
                { text: "First Option" },
                { text: "Second Option" },
                { text: "Third Option" },
              ]}
              headerText="It's a material design card"
              subHead="Aimed to display important data."
              media="https://picsum.photos/300"
              actions={[
                { text: "Cancel" },
                { text: "Save", appearance: "default", variant: "contained" },
              ]}
              supportingText="You can do anything you want."
              isReady
            />
          </div>
          <div style={{ margin: 5 }}>
            <Card
              menuOptions={[
                { text: "First Option" },
                { text: "Second Option" },
                { text: "Third Option" },
              ]}
              headerText="It's a material design card"
              subHead="Aimed to display important data."
              media="a"
              actions={[
                { text: "Cancel" },
                { text: "Save", appearance: "default", variant: "contained" },
              ]}
              supportingText="You can do anything you want."
            />
          </div>
          <div style={{ margin: 5 }}>
            <Card
              headerText="Emoji thumbnail"
              subHead="Aimed to display important data."
              isReady
              thumbnail={
                <span role="img" aria-label="emoji">
                  🕹️
                </span>
              }
              actions={[
                { text: "Cancel" },
                { text: "Save", appearance: "default", variant: "contained" },
              ]}
              supportingText="You can do anything you want."
            />
          </div>
        </div>
      </Container>
    </ThemeProvider>
  );
};

render(<App />, document.querySelector("#app"));
