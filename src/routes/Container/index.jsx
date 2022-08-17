import Header from "components/Header";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";

const Container = () => {

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

const mapStateToProps = store => ({
    theme: store.themeState.theme
})

export default connect(mapStateToProps)(Container);