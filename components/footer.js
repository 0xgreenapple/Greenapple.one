import Link from "next/link";
import styled from "styled-components";

export default function Footer({compacted}){
    return (
      <section className="fotter_section">
        <div className="container footer">
          {!compacted ? (
            <Wrapper compact>
                <LeftWrap>©greenapple 2022</LeftWrap>
                <RightWrap>
                  <a href='mailto:0xgreenapple@gmail.com?subject="saying hello"'>say hello</a>
                </RightWrap>
            </Wrapper>
          ) : (
            <Compacted>©greenapple 2022</Compacted>
          )}
        </div>
      </section>
    );
}

const Wrapper = styled.div`
  display: flex;
  background: var(--gray);
  height: 60px;
  border-radius: 20px 20px 0 0;
  justify-content: space-between;
  align-items: center;
  border: 2px solid black;
  border-bottom: 0;
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  div {
    transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  }
  a {
    color: var(--yellow);
    text-decoration: none;
  }
  &:hover {
    padding-bottom:10px;
  }
`;

const LeftWrap = styled.div`
  color: white;
  display: flex;
  margin: 20px;
  font-size: 18px;
`;
const RightWrap = styled.div`
  display: flex;
  margin: 20px;
  font-size: 24px;
  font-weight: bold;
  color: var(--yellow);
  text-decoration: none;
`;


const Compacted = styled.div`

`