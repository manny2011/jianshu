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
  background-color:red;
  width:240px;
  float:right;
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