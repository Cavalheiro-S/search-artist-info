const language = {
    pt: {
        home: {
            title: {
                text: "Descubra informações sobre seu artista ou banda favorita",
                highlight: "favorita"
            },
            subTitle: {
                text: "Basta digitar o nome do seu artista ou banda e clicar em pesquisar , que nós trazemos as informações sobre as melhores músicas e seus últimos albums",
                highlight: "melhores"
            },
            buttonAction: "Descobrir Informações"
        },
        searchScreen: {
            label: "Pesquise o nome de um artista ou banda",
            inputPlaceholder: "Digite o nome do artista ou banda",
            buttonToSearch: "Pesquisar",
            ilustrationPlaySong: {
                title: "Nenhum artista pesquisado ainda ...",
                titleHighlight: "ainda",
                subTitle: "Pesquise o nome de um artista/banda para exibir informações sobre suas músicas e albums"
            },
            ilustrationNotFinded: {
                title: "Nenhum Resultado encontrado para",
                subTitle: "Verifique se você digitou corretamente"
            },
            artistInfo: {
                genre: "Gênero principal",
                sites: "Sites",
                followers: "Seguidores",
                popularity: "Popularidade"
            },
            tabButtons: {
                topTracks: "Top Músicas",
                albums: "Albums"
            }
        }
    },
    en: {
        home: {
            title: {
                text: "Discover informations about your favorite artist or band",
                highlight: "favorite"
            },
            subTitle: {
                text: "Only type a name of your artist or band and click in search, that we bright informations about the top musics and your last albums",
                highlight: "top"
            },
            buttonAction: "Discover Informations"
        },
        searchScreen: {
            label: "Search a name of artist or band",
            inputPlaceholder: "Type a artist or band name",
            buttonToSearch: "Search",
            ilustrationPlaySong: {
                title: "No artist searched yet ...",
                titleHighlight: "yet",
                subTitle: "Search a name of a artist to discover your songs and albums "
            },
            ilustrationNotFinded: {
                title: "No results finded to",
                subTitle: "Verify if you type correctly"
            },
            artistInfo: {
                genre: "Main genre",
                sites: "Sites",
                followers: "Followers",
                popularity: "Popularity"
            },
            tabButtons: {
                topTracks: "Top Tracks",
                albums: "Albums"
            }
        }
    },
}

export const getCurrentLanguage = () => {
    if(currentLanguage === "pt"){
        return language.pt;
    }
    else if(currentLanguage === "en"){
        return language.en;
    }
}