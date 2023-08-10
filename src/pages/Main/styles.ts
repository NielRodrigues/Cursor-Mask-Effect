import styled from 'styled-components'
import mask from "../../assets/images/mask.svg"


export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #0F0F0F;
  color: #f8f6fA;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  div.body, div.mask {
    font-size: 32px;
    margin: 0;
    font-weight: 600;
    color: #f8f6fA;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    span{
      color: #415AF6;
    }

    p{
      width: 95%;
      max-width: 800px;
      padding: 12px;
    }
  }
  div.mask {
    position: absolute;
    mask-image: url(${mask});
    background-color: #415AF6;
    color: #0F0F0F;
    mask-repeat: no-repeat;
    mask-size: 20px;
  }
`;

export const Title = styled.div`
  font-size: 32px;
  margin: 0;
  font-weight: 600;
  color: #f8f6fA;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span{
    color: #415AF6;
  }

  p{
    width: 95%;
    max-width: 800px;
  }

  &.mask {
    position: absolute;
    mask-image: url(${mask});
    background-color: #415AF6;
    color: #0F0F0F;
    mask-repeat: no-repeat;
    mask-size: 20px;
  }
`;
