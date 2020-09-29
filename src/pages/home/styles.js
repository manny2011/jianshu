import styled from 'styled-components';

export const HomeWrapper  = styled.div`
  width:960px;
  margin:0 auto;
  overflow:hidden;
`;

export const HomeLeft  = styled.div`
  width:625px;
  float:left;
  margin-left:15px;
  margin-top:30px;
  .banner-img {
    width:625px;
    height:270px;
  }
`;

export const HomeRight  = styled.div`
  // background-color:red;
  width:280px;
  float:right;
  padding:30px 0 0;
`;

export const TopicWrapper  = styled.div`
  overflow:hidden;
  margin-top:20px;
  margin-left:-10px;
`;

export const TopicItem  = styled.div`
  float:left;
  line-height:32px;
  height:32px;
  margin-left:10px;
  margin-bottom:18px;
  background:#f7f7f7;
  color:#000;
  padding-right:10px;
  font-size:14px;
  border:1px solid #dcdcdc;
  border-radius:4px;
  .topic-item-img{
    float:left;
    width:32px;
    height:32px;
    padding-right:10px;
  }
`;

export const ListWrapper = styled.div`
  padding-top:15px;
  padding-bottom:20px;
  border-bottom:1px solid #f0f0f0;
  overflow:hidden;
  .pic{
    display:block;
    float:right;
    width:150px;
    height:100px;
    barder-radius:4px;
    border:1px solid #f0f0f0;
  }
`;

export const ListInfo = styled.div.attrs(props=>{
  console.log('test...');
  console.log(props.children);
})`
  width:475px;

  .title{
    font-size:18px;
    font-weight:700;
    line-height:1.5;
    margin:-7px 0 4px;
  }
  .desc{
    margin:0 0 8px;
    font-size:13px;
    line-height:24px;
    color:#999;
  }
  
`;

export const LoadMoreFooter = styled.div`
  background:#a5a5a5;
  border-radius:20px;
  margin-bottom:60px;
  width:100%;
  height:40px;
  text-align:center;
  font-size:15px;
  color:#fff;
  margin-top:30px;
  cursor:pointer;
  padding:12.5px 15px;
  box-sizing:border-box;
  line-height:15px;
`;

export const RecommendWrapper = styled.div`
  width:280px;
  min-height:228px;
  padding-bottom:4px;

`;

export const RecommendItem = styled.div`
  width:280px;
  height:50px;
  background:url(${(props)=>props.imgUrl});//分号不加，图片显示不出来呢竟然
  background-size:contain;//控制背景图的大小
`;

export const Back2Top = styled.div`
  width:100px;
  height:100px;
  position:fixed;
  right:100px;
  bottom:100px;
  text-align:center;
  line-height:100px;
  border:1px solid #999;
  color:red;
  font-size:14px;
  font-style:bold;
`;


