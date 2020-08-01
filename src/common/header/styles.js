import styled from 'styled-components';
import logo from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  height:56px;
  border-bottom: 1px solid #f0f0f0;

`;

export const Logo = styled.a`
  position:absolute;
  top:0;
  left:0;
  // display:block;
  width:100px;
  height:56px;
  background:url(${logo});
  background-size:contain;
`;
export const Nav = styled.div`
  width:960px;
  height:100%;
  box-sizing:border-box;
  padding-right:120px;
  margin:0 auto;//水平居中
`;

export const NavItem = styled.div`
  line-height:56px;
  font-size:16px;
  padding:0px 15px;
  color:#333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  width:160px;
  height:38px;
  margin:9px 0px;
  margin-left:20px;
  border:none;
  border-radius:19px;
  outline:none;
  padding:0 20px;
  box-sizing:border-box;//宽度不让加上padding值
  background:#eee;
  font-size:14px;
  &::placeholder {
    color:#999;
  }
`;

export const Addition = styled.div`
  position:absolute;
  top:0;
  right:0;
`;

export const Button = styled.div`
  float:right;
  border:1px solid rgba(236,97,73,.7);
  line-height:38px;
  padding:0 25px;
  border-radius:19px;
  margin-top:9px;
  margin-right:20px;
  font-size:15px;
  color:#ea6f5a;
  &.reg{
    background:transparent;
  }
  &.writting{
    background:#ea6f5a;
    color:white;
  }
`;
