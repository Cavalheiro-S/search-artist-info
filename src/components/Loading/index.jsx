import imgLoading from "assets/imgs/ant-design_loading-3-quarters-outlined.png";
import { LoadingStyled, ImgLoadingStyled } from "./styled";

const Loading = (props) => {
    return(
        <LoadingStyled>
            <ImgLoadingStyled src={imgLoading} alt="Loading imagem" />
            <h3>Loading</h3>
        </LoadingStyled>
    )
}

export default Loading 