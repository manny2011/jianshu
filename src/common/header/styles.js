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

export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    margin-left:20px;//nice
    .zoom{
      position:absolute;
      background:#eee;
      width:30px;
      height:30px;
      border-radius:15px;
      line-height:30px;
      text-align:center;
      right:5px;
      bottom:13px;
      &.focused{
        color:white;
        background:#999;
      }
    }
    .slide-enter{
      transition:all .3s ease-out
    }
    .slide-enter-active{
      width:260px;
    }
    .slide-exit{
      transition:all .3s ease-out;
    }
    .slide-exit-active{
      width:160px;
    }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width:160px;
  height:38px;
  margin:9px 0px;
  border:none;
  border-radius:19px;
  outline:none;
  padding:0 40px 0 20px;
  box-sizing:border-box;//宽度不让加上padding值
  background:#eee;
  font-size:14px;
  &::placeholder {
    color:#999;
  }
  &.focused{
    width:260px;
  }
`;

export const SearchInfo = styled.div`
  position:absolute;
  left:0;
  top:56px;
  padding:20px 5px;
  // height:100px;
  width:220px;
  box-shadow:0 0 8px rgba(0,0,0,.2);
`;

export const SearchInfoList = styled.div`
  margin-top:10px;
  overflow:hidden;//外层父容器不能指定高度，让其自适应子元素的高度，还得熟悉这个特性
`;

export const SearchInfoTitle = styled.span`
  font-size:14px;
  color:#969696;
`;

export const SearchInfoSwitch = styled.span`
  float:right;//?由inline变成了inline-block？
  font-size:14px;
  color:#969696;
  .spin{
    float:left;
    // display:block;//只有block才能进行transform变换？！
    margin-right:10px;
    transition:all .5s ease-in 0s;//定义过渡动画的参数，即如何动 delay必须有单位，即使是0; 0s
    // transform:rotate(30deg); //定义动哪里
  }
`;

export const SearchInfoItem = styled.a`
  display:block;
  float:left;
  font-size:14px;
  // width:20%;
  color:#969696;
  border:1px solid #999;
  margin:5px 5px;
  padding:10px 5px;
  border-radius:3px;
  &:hover{
    background:green;
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
  padding:0 30px;
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
