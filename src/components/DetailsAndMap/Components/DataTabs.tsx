import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Review from './Review';
import InfoData from './InfoData';
import AmentiesAC from './AmentiesAC';
import StarIconComp from './StarIconComp';

const Container = styled.div`
    width:100%;
    height:55vh;
    display:flex;
    flex-direction:column;

    @media (max-width: 576px) {
        width:100vw;
    };
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
    };
`;

const TabReview = styled.button`
    width:50%;
    border:none;
    color:#696969;
    height:100%;
    font-weight:500;
    background-color:white;

    &:hover{
        color:#318CE7;
        cursor:pointer;
    };
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
`;

const DIV = styled.div`
    display:flex;
    width:100%;
`;

const TabDataInfo = styled.div`
    width:${(props) => props.theme.infoWidth};
    transition:${props => props.theme?.infoTransition};
    position:relative;
    height:48vh;
    display:flex;
    flex-direction:column;
    overflow:scroll;
    box-sizing:border-box;

`;

const TabDataReview = styled.div`
    width:${(props) => props.theme.reviewWidth};
    transition:${props => props.theme?.reviewTransition};
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
                        <InfoData />
                        <InfoData />
                        <InfoData />
                        <Amenties>
                            <AmentiesTitle>Amenities</AmentiesTitle>
                            <AmentiesAC />
                            <AmentiesAC />
                        </Amenties>
                    </TabDataInfo>
                    <TabDataReview>
                        <StarDiv>
                            <StarTitleDiv>
                                <StarTitle>4 Reviews</StarTitle>
                            </StarTitleDiv>
                            <StarIconComp />
                        </StarDiv>
                        <Review />
                        <Review />
                        <Review />
                        <Review />
                    </TabDataReview>
                </DIV>
            </Container>
        </ThemeProvider>
    )
}

export default DataTabs;