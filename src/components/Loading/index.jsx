import styled, { keyframes } from "styled-components";
import imgLoading from "assets/imgs/ant-design_loading-3-quarters-outlined.png";

const rotateLoadingAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }
`

const LoadingStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 24px;
    color: white;
`

const ImgLoadingStyled = styled.img`
    animation: ${rotateLoadingAnimation} 1s linear infinite;
`

const Loading = (props) => {

    return(
        <LoadingStyled>
            <ImgLoadingStyled src={imgLoading} alt="Loading imagem" />
            <h3>Loading</h3>
        </LoadingStyled>
    )

}

export default Loading 