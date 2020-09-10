import styled from 'styled-components';

export const DetailWrapper = styled.div`
  width:730px;
  overflow:hidden;
  margin-left: auto;
  margin-right:auto;
  margin-top:30px;
  padding-bottom:100px;
`;

export const Header = styled.div`
  font-size:30px;
  font-weight:700;
  color:#404040;

`;

export const Content = styled.div`
  width:100%;
  img{
    margin-top:20px;
    width:100%;
    border-radius:5px;
  }

  p{
    margin-bottom:20px;
    font-size:16px;
    word-break:break-word;
    font-weight:bolder;//400 ->normal 700 ->bold
    line-height:1.5;
  }
  
`;

export const Author = styled.div`
  display:flex;
  margin-bottom:32px;
  margin-top:32px;
  font-size:13px;
  justify-content:left;
  align-item:center;
  img{
    border-radius:50%;
    border:1px solid #eee;
    width:48px;
    height:48px;
    min-width:48px;
    min-height:48px;
  }
`;

export const AuthorTextWrapper = styled.div`
  display:flex;
  flex-direction:column;
  margin-left:8px;
  justify-content:space-around;
  font-size:13px;
  align-items:left;

`;