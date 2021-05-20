import React from 'react';
import styled from 'styled-components';
import { images } from '../../../assets';

const ReviewContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    margin-left:10px;
`;

const PersonDiv = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
`;

const AccountIcon = styled.img`
    height:50px;
    width:50px;
`;

const PersonIconDiv = styled.div`
    margin-top:13px;
`;

const PersonDetailDiv = styled.div`
    margin-left:10px;
`;

const PersonName = styled.h5`
    color:#696969;
    font-weight:500;
`;

const Date = styled.p`
    margin-top:-15px;
    font-size:10px;
    color:#696969;
`;

const CommentDiv = styled.div`
    line-height:20px;
    width:270px;
    margin-left:5px;
    margin-top:-10px;
`;

const Comment = styled.p`
    color:#696969;
    font-size:12px;
    word-spacing:3px;
`;

const Review:React.FC = () => {
    return(
        <ReviewContainer>
            <PersonDiv>
                <PersonIconDiv>
                    <AccountIcon src={images.accountIcon} />
                </PersonIconDiv>
                <PersonDetailDiv>
                    <PersonName>Person</PersonName>
                    <Date>May 2021</Date>
                </PersonDetailDiv>
            </PersonDiv>
            <CommentDiv>
                <Comment>This place was maintained extremely well! Akhilesh is a great host ans had a short but very intersting conversation with him. Was always availbale to assist and the Breakfast was also good.</Comment>
            </CommentDiv>
        </ReviewContainer>
    );
}

export default Review;