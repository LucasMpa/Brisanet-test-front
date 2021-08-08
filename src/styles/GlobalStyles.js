import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    background-color: #F5F7FA;
    height: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Poppins', sans-serif;
  }

  :root {
    --primary: #FFCB05;
    --secondary: #3B5CA8;

    //Alerts
    --danger: #FF3326;
    --success: #45B572;
    --warning: #F9AA35;
    
    //Grey Scale
    --gray-500: #1E1E1F;
    --gray-400: #4B4B4D;
    --gray-300: #7D7E80;
    --gray-200: #D2D4D6;
    --gray-100: #F5F7FA;
    --white: #FFFFFF;
  }
`;
