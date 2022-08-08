import { render, screen } from "@testing-library/react";
import { TabButtons } from "..";

describe("Testing TabButtons component", () => {
    const setTabActiveMock = (tab) => {};
    let tabActive = "tracks";

    it("Should render two tab buttons", () => {
        render(<TabButtons tabActive={tabActive} setTabActive={setTabActiveMock}/>)
        const buttonTopTracks = screen.getByText("Top Tracks");
        const buttonAlbums = screen.getByText("Albums")
        expect(buttonTopTracks).toBeInTheDocument;
        expect(buttonAlbums).toBeInTheDocument;
    });

})