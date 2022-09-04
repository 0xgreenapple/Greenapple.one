import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  .playground_btn{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    .plbtn{
      margin-left: 20px;
      color: #000;
      background-color: #79B5E1;
      display: inline-flex;
      border: 1px solid black;
      border-radius: 16px;
      box-shadow: 3px 3px 0px #000000;
      font-size: 11px;
      letter-spacing: 1px;
      font-weight: 900;
      line-height: 32px;
      padding-left: 12px;
      padding-right: 12px;
      transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
      &:hover {
          box-shadow: rgb(0 0 0) 1px 1px 0px;
        }

    }
  }
  .themeselector {
    display: inline-flex;
    border: 1px solid black;
    border-radius: 16px;
    box-shadow: 3px 3px 0px #000000;
     @media screen and (max-width: 768px) {
            margin-left: 24px;
        }
        
    .activecolor {
        background: ${({ theme }) => theme.toggleBG};
     
        cursor: pointer;
        transition: all .2s ease;
        border-radius: 16px;
        display: flex;
        align-items: center;
       
        h4{
          font-size: 11px;
          font-weight: 900;
          line-height: 32px;
          padding-left: 12px;
          padding-right: 12px;
          letter-spacing: 1px;

        }

        .btngroup {
          display: flex;
          flex-direction: row;
         transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s;
          visibility: hidden;
          position: absolute;
          opacity: 0;   
          left: -2px;
          transition-delay: 0s, 0s, 0.3s;
          &:first-child{
                margin-left: 0!important;
            }       
          button {
              display: block;
              line-height: 0px;
              height: 30px;
              width: 30px;
              border-radius: 16px;
              border: 1px solid black;
                margin-left: 2px;

              &.light {
                  background: #BADFC0;
                  margin-right: 2px;
              }
              &.red {
                  background: #FF6868;
              }

              &.blue {
                  background: #5250DE;
              }

              &.dark {
                  background: #101213;
                  border-color: white;
              }
              &.yellow {
                  background: #ECB831;
              }
              &.pink {
                  background: #FD92FF;
              }

          }
      }
      &:hover{
          transition: all 1s cubic-bezier(0.75, 0, 0.03, 0.9) 0s;
          .btngroup{
            visibility: visible;
            display: flex;
            position: relative;
            margin-left: 2px;
            opacity: 1;
          }
        }
    }
     &:hover {
                box-shadow: rgb(0 0 0) 1px 1px 0px;
            }

    
    
  }
  `;
