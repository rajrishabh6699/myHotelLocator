
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Container = styled.div`
width:100%;
    height:55vh;
    display:flex;
    flex-direction:column;
    @media (max-width: 576px) {
        width:100vw;
    }
`;

const TabContainer = styled.div`
width:100%;

    display:flex;
    height:7vh;
    justify-content:space-around;
    border-bottom:1px solid #c8c8c8;
`;

const TabInfo = styled.button`
    width: 50%;
    color:#696969;
    height:100%;
    font-weight:500;
    border:none;
    background-color:white;
    &:hover{
        color:#318CE7;
        cursor:pointer;
    }
`;

const TabReview = styled.button`
    width: 50%;
    border:none;
    color:#696969;
    height:100%;
    font-weight:500;
    background-color:white;

    &:hover{
        color:#318CE7;
        cursor:pointer;
    }
`;



// ----------------Info Data---------------
const DataContainer = styled.div`
    margin-left:10px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`;

const HomeIconDiv = styled.div`
`;

const DetailDiv = styled.div`
    margin-left:15px;
    display:flex;
    flex-direction:column;
`;

const DetailHeading = styled.h5`
    color:#696969;
    font-weight:500;
    margin-bottom:-10px;
`;

const DetailDesc = styled.p`
    color:#696969;
    font-size:12px;
    word-spacing:5px;
`;

const Amenties = styled.div`
    border-top:1px solid #c8c8c8;
    
`
const AmentiesTitle = styled.h5`
    color:#696969;
    font-weight:500;
    margin-bottom:-10px;
    margin-left:10px;

`;
const AcDiv = styled.div`
    margin-top:10px;
    margin-bottom:-10px;
    display:flex;
    margin-left:10px;
`;

const Ac = styled.div`          
    margin-right:25px;
    display:flex;
    align-items:center;
`;

const AcText = styled.p`
    margin-left:10px;
    font-size:12px;
    color:#696969;
`;
// ----------------Info Data---------------

// -----------------Review Data---------------

const StarDiv = styled.div`
    width:100%;
    display: flex;
    align-items:center; 
    border-bottom:1px solid #c8c8c8;
`;

const StarTitleDiv = styled.div`
    margin-left:10px;
    margin-right:10px;
    `;

const StarTitle = styled.h5`
    color:#696969;
    font-weight:500;
`
const StarIconDiv = styled.div``;

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


// -----------------Review Data---------------

const DIV = styled.div`
display:flex;
width:100%;
`;

const TabDataInfo = styled.div`
    width:${(props) => props.theme.infoWidth};
    transition:${(props) => props.theme.infoTransition && props.theme.infoTransition};
    position:relative;
    height:48vh;
    display:flex;
    flex-direction:column;
    overflow:scroll;
    box-sizing:border-box;

`;

const TabDataReview = styled.div`
    width:${(props) => props.theme.reviewWidth};
    transition:${(props) => props.theme.reviewTransition && props.theme.reviewTransition};
    position:relative;
    height:48vh;
    display:flex;
    flex-direction:column;
    overflow:scroll;
    box-sizing:border-box;
`;

const BorderDiv = styled.div`
    position:relative;
    width: 50%;
    border-bottom: 3px solid #0097be;
    margin-top: -3px;
    left:${(props) => props.theme.left};
    transition: left 200ms;
`;

const DataTabs: React.FC = () => {
    const [infoActive, setInfoActive] = useState(true);

    const info = {
        infoWidth: "100%",
        reviewWidth: "0",
        reviewTransition: "width 200ms",
        infoTransition: "width 200ms",
        left: "0",
    }

    const review = {
        infoWidth: "0",
        reviewWidth: "100%",
        infoTransition: "width 200ms",
        reviewTransition: "width 200ms",
        left: "50%",
    }

    return (
        <ThemeProvider theme={infoActive ? info : review}>
            <Container>
                <TabContainer>
                    <TabInfo onClick={() => setInfoActive(true)}>Info</TabInfo>
                    <TabReview onClick={() => setInfoActive(false)}> Reviews</TabReview>
                </TabContainer>
                <BorderDiv />
                <DIV>
                    <TabDataInfo>
                        <DataContainer>
                            <HomeIconDiv><HomeIcon style={{ color: "#318CE7" }} /> </HomeIconDiv>
                            <DetailDiv>
                                <DetailHeading>Entire Apartment</DetailHeading>
                                <DetailDesc>4 Guests 1 bedroom 4 Guests 1 bedroom</DetailDesc>
                            </DetailDiv>
                        </DataContainer>
                        <DataContainer>
                            <HomeIconDiv><HomeIcon style={{ color: "#318CE7" }} /> </HomeIconDiv>
                            <DetailDiv>
                                <DetailHeading>Entire Apartment</DetailHeading>
                                <DetailDesc>4 Guests 1 bedroom 4 Guests 1 bedroom</DetailDesc>
                            </DetailDiv>
                        </DataContainer>
                        <DataContainer>
                            <HomeIconDiv><HomeIcon style={{ color: "#318CE7" }} /> </HomeIconDiv>
                            <DetailDiv>
                                <DetailHeading>Entire Apartment</DetailHeading>
                                <DetailDesc>4 Guests 1 bedroom 4 Guests 1 bedroom</DetailDesc>
                            </DetailDiv>
                        </DataContainer>
                        <Amenties>
                            <AmentiesTitle>Amenities</AmentiesTitle>
                            <AcDiv>
                                <Ac>
                                    <AcUnitIcon style={{ color: "black" }} />
                                    <AcText>Air condition</AcText>
                                </Ac>
                                <Ac>
                                    <AcUnitIcon style={{ color: "black" }} />
                                    <AcText>Air condition</AcText>
                                </Ac>
                            </AcDiv>
                            <AcDiv>
                                <Ac>
                                    <AcUnitIcon style={{ color: "black" }} />
                                    <AcText>Air condition</AcText>
                                </Ac>
                                <Ac>
                                    <AcUnitIcon style={{ color: "black" }} />
                                    <AcText>Air condition</AcText>
                                </Ac>
                            </AcDiv>
                        </Amenties>
                    </TabDataInfo>
                    <TabDataReview>
                        <StarDiv>
                            <StarTitleDiv>
                                <StarTitle>4 Reviews</StarTitle>
                            </StarTitleDiv>
                            <StarIconDiv>
                                <StarIcon style={{ color: "gold", marginLeft: "5px" }} />
                                <StarIcon style={{ color: "gold", marginLeft: "5px" }} />
                                <StarHalfIcon style={{ color: "gold", marginLeft: "5px" }} />
                                <StarIcon style={{ color: "#c8c8c8", marginLeft: "5px" }} />
                                <StarIcon style={{ color: "#c8c8c8", marginLeft: "5px" }} />
                            </StarIconDiv>
                        </StarDiv>
                        <ReviewContainer>
                            <PersonDiv>
                                <PersonIconDiv>
                                    <AccountCircleIcon style={{ color: "gray", fontSize: "50px" }} />
                                </PersonIconDiv>
                                <PersonDetailDiv>
                                    <PersonName>Person</PersonName>
                                    <Date>May 2021</Date>
                                </PersonDetailDiv>
                            </PersonDiv>
                            <CommentDiv>
                                <Comment>
                                    This place was maintained extremely well! Akhilesh is a great host ans had a short but very intersting conversation with him. Was always availbale to assist and the Breakfast was also good.
                        </Comment>
                            </CommentDiv>
                        </ReviewContainer>
                        <ReviewContainer>
                            <PersonDiv>
                                <PersonIconDiv>
                                    <AccountCircleIcon style={{ color: "gray", fontSize: "50px" }} />
                                </PersonIconDiv>
                                <PersonDetailDiv>
                                    <PersonName>Person</PersonName>
                                    <Date>May 2021</Date>
                                </PersonDetailDiv>
                            </PersonDiv>
                            <CommentDiv>
                                <Comment>
                                    This place was maintained extremely well! Akhilesh is a great host ans had a short but very intersting conversation with him. Was always availbale to assist and the Breakfast was also good.
                        </Comment>
                            </CommentDiv>
                        </ReviewContainer>
                        <ReviewContainer>
                            <PersonDiv>
                                <PersonIconDiv>
                                    <AccountCircleIcon style={{ color: "gray", fontSize: "50px" }} />
                                </PersonIconDiv>
                                <PersonDetailDiv>
                                    <PersonName>Person</PersonName>
                                    <Date>May 2021</Date>
                                </PersonDetailDiv>
                            </PersonDiv>
                            <CommentDiv>
                                <Comment>
                                    This place was maintained extremely well! Akhilesh is a great host ans had a short but very intersting conversation with him. Was always availbale to assist and the Breakfast was also good.
                        </Comment>
                            </CommentDiv>
                        </ReviewContainer>
                        <ReviewContainer>
                            <PersonDiv>
                                <PersonIconDiv>
                                    <AccountCircleIcon style={{ color: "gray", fontSize: "50px" }} />
                                </PersonIconDiv>
                                <PersonDetailDiv>
                                    <PersonName>Person</PersonName>
                                    <Date>May 2021</Date>
                                </PersonDetailDiv>
                            </PersonDiv>
                            <CommentDiv>
                                <Comment>
                                    This place was maintained extremely well! Akhilesh is a great host ans had a short but very intersting conversation with him. Was always availbale to assist and the Breakfast was also good.
                        </Comment>
                            </CommentDiv>
                        </ReviewContainer>
                    </TabDataReview>
                </DIV>
            </Container>
        </ThemeProvider>
    )
}

export default DataTabs;