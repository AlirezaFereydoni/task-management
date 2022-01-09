import styled from "styled-components";

const NotFoundWrapper = styled.div`
  position: relative;
  height: 100vh;

  .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    max-width: 520px;
    width: 100%;
    line-height: 1.4;
    text-align: center;

    .notfound-404 {
      position: relative;
      height: 240px;

      h2 {
        font-family: "Cabin", sans-serif;
        font-size: 20px;
        font-weight: 400;
        text-transform: uppercase;
        color: #000;
        margin-top: 0px;
        margin-bottom: 25px;
      }
      h1 {
        font-family: "Montserrat", sans-serif;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        font-size: 252px;
        font-weight: 900;
        margin: 0px;
        color: #262626;
        text-transform: uppercase;
        letter-spacing: -40px;
        margin-left: -20px;
      }
      h1 > span {
        text-shadow: -8px 0px 0px #fff;
      }
      h3 {
        font-family: "Cabin", sans-serif;
        position: relative;
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        color: #262626;
        margin: 0px;
        letter-spacing: 3px;
        padding-left: 6px;
        top: -50px;
      }
    }
  }

  @media only screen and(max-width: 767px) {
    .notfound.notfound-404 {
      height: 200px;
    }
    .notfound.notfound-404 h1 {
      font-size: 200px;
    }
  }

  @media only screen and(max-width: 480px) {
    .notfound.notfound-404 {
      height: 162px;
    }
    .notfound.notfound-404 h1 {
      font-size: 162px;
      height: 150px;
      line-height: 162px;
    }
    .notfound h2 {
      font-size: 16px;
    }
  }
`;

export { NotFoundWrapper };
