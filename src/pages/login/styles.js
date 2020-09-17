import styled from 'styled-components';

export const LoginBox = styled.div`
  position:absolute;
  top:56px;
  left:0;
  z-index:0;
  width:100%;
  height:100%;
  min-height:750px;
  text-align:center;
  background-color:#f1f1f1;
`;

export const LoginWrapper = styled.div`
  width:400px;
  margin:60px auto 0;
  border-radius:4px;
  padding:50px 50px 30px;
  box-sizing:border-box;
  background-color:#fff;
  box-shadow:1px 1px 5px rgba(0,0,0,1);
`;

export const Account = styled.input`
  width:100%;
  height:50px;
  box-sizing:border-box;
  border-radius:4px 4px 0 0 ;
  border:1px solid #c8c8c8;
  background-color:hsla(0,0%,71.5,.1)
  padding:4px 12px 4px 35px;
  cursor:text;
  type:text;
  text-align:start;
  text-indent:8px;
`;

export const PWD = styled.input`
  width:100%;
  height:50px;
  line-height:50px;
  box-sizing:border-box;
  border-radius: 0 0 4px 4px ;
  border:1px solid #c8c8c8;
  background-color:hsla(0,0%,71.5,.1)
  padding:4px 12px 4px 35px;
  text-indent:8px;
`;

export const SubmitButton = styled.div`
  width:100%;
  margin-top:20px;
  color:#fff;
  font-size:18px;
  background-color:#3194d0;
  padding:9px 0px;
  border-radius:25px;
  cursor:pointer;
  box-sizing:content-box;
`;