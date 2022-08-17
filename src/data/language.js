import store from "store/store";

export const getActualLanguage = () => {
    const language = store.getState().languageState.language;
    return language === "pt" ? languageText.pt : languageText.en
}

const languageText = {
    pt: {
        header: {
            madeBy: "Feito por Lucas Cavalheiro ✌",
            alt: {
                language: "icone com duas letras de duas línguas diferentes",
                theme: "Ícone de um circulo cortado no meio com duas cores opostas"
            }
        },
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
            searchBar: {
                label: "Pesquise o nome de um artista ou banda",
                inputPlaceholder: "Digite o nome do artista ou banda",
                buttonToSearch: "Pesquisar",
                inputEmptyMessage: "Este campo não pode estar vazio"
            },
            loading: {
                text: "Carregando ...",
                alt: "Imagem de um meio círculo girando"
            },
            illustrationPlaySong: {
                title: "Nenhum artista pesquisado ainda ...",
                titleHighlight: "ainda",
                subTitle: "Pesquise o nome de um artista/banda para exibir informações sobre suas músicas e albums",
                alt: "Ilustração de um homem tocando violão enquanto saem notas de seu instrumento, ao lado de flores brancas"
            },
            illustrationNotFinded: {
                title: "Nenhum Resultado encontrado para",
                subTitle: "Verifique se você digitou corretamente",
                alt: "Ilustração de um homem e uma mulher procurando algo em uma caixa"
            },
            artistInfo: {
                genre: "Gênero principal",
                sites: "Sites",
                followers: "Seguidores",
                popularity: "Popularidade",
                alt: {
                    spotify: "Icone do spotify",
                    star: "Icone com formato de estrela",
                    artistImage: "Foto do artista pesquisado"
                }
            },
            cardContainer: {
                alt: {
                    album: "Foto do album do artista"
                }
            },
            tabButtons: {
                topTracks: "Top Músicas",
                albums: "Albums"
            }
        }
    },
    en: {
        header: {
            madeBy: "Made by Lucas Cavalheiro ✌",
            alt: {
                language: "Icon with two letters of two different languages",
                theme: "Icon of a circle split on the middle with two opposite colors"
            }
        },
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
            searchBar: {
                label: "Search a name of artist or band",
                inputPlaceholder: "Type a artist or band name",
                buttonToSearch: "Search",
                inputEmptyMessage: "This field could'nt is empty"
            },
            loading: {
                text: "Loading ...",
                alt: "icon of a semicircle spinning"
            },
            illustrationPlaySong: {
                title: "No artist searched yet ...",
                titleHighlight: "yet",
                subTitle: "Search a name of a artist to discover your songs and albums",
                alt: "Icon of a man playing the guitar while notes come out of his instrument, next to white flowers"
            },
            illustrationNotFinded: {
                title: "No results finded to",
                subTitle: "Verify if you type correctly",
                alt: "Illustration with a man and a woman searching for something in a box"
            },
            artistInfo: {
                genre: "Main genre",
                sites: "Sites",
                followers: "Followers",
                popularity: "Popularity",
                alt: {
                    spotify: "Icon of spotify",
                    star: "Icon with star form",
                    artistImage: "Picture of searched artist"
                }
            },
            cardContainer: {
                alt: {
                    album: "Foto do album do artista"
                }
            },
            tabButtons: {
                topTracks: "Top Tracks",
                albums: "Albums"
            }
        }
    },
}
