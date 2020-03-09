import styled from 'styled-components';

export const Container = styled.div`
  display: -webkit-box;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 80px;
  background: #80daf2;
  justify-content: center;
  margin-bottom: 60px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: 18px;
`;

export const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8px;

  color: white;
  font-size: 14px;

  span:first-of-type {
    color: white;
    font-weight: 700;
    font-size: 14px;
  }
`;
