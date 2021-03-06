import styled from 'styled-components';

export const ContainerCard = styled.div`
  width: 400px;
  height: 470px;
  position: relative;

  background: rgba(250, 250, 250, 0.1);
  backdrop-filter: blur(25px);
  border: 2px solid #FAFAFA;
  box-sizing: border-box;
  border-radius: 38px;
  padding: 28px;
  transition: .5s ease;

  &:hover {
    transform: scale(1.03);
  }

  header {
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #fafafa;
    padding-bottom: 8px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 12px;

    li {
      margin: 8px 0px;
    }

    img {
      width: 18px;
      margin-right: 10px;
    }
  }

  span {
    text-align: start;
  }

  a {
    display: inline-block;
    position: absolute;
    width: 100%;
    cursor: pointer;
    color: #CE79EF;
    transition: 0.2s ease;
    text-align: center;
    margin-top: 18px;
    left: 0px;
    bottom: 24px;

    &:hover {
      filter: brightness(1.3);
    }

    > img {
      margin-right: 8px;
    }

  }
  `;

export const UserProfile = styled.div`
    background: ${({ photoUser }) => `url(${photoUser}) no-repeat center`};
    background-size: cover;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 16px;
  `;

export const TitleRepo = styled.div`
    text-align: center;
    transition: 0.5s ease;
    cursor: pointer;

    &:hover {
      filter: brightness(0.6);
    }
  `;

export const Label = styled.p`
  text-align: start;
`;

export const ContainerDescription = styled.div`
 width: 100%;
 height: 108px;
 text-align: start;
 white-space: pre-line;
 word-wrap: break-word;
 hyphens: auto;
 overflow: hidden;
 text-overflow: ellipsis;

 p {
   margin-top: 8px;
   font-weight: 400;
  }
`;
