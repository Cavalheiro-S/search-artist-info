import { Component } from "react";
import { CatchWarning } from "./styled";

class ContainerCatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error, info) {

        this.setState({
            error,
            errorInfo: info
        })
    }

    handleRender() {
        if (this.state.error)
            return (
                <CatchWarning>
                    <h4>Something are wrong , reload that page</h4>
                </CatchWarning>
            )

        return this.props.children
    }

    render() {
        return this.handleRender();
    }
}

export default ContainerCatch
