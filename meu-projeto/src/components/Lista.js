import Item from "./Item"

function Lista() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={2015} />
                <Item marca="Fiat" ano_lancamento={2016} />
                <Item marca="Renault" ano_lancamento={2017} />
                <Item />
            </ul>
        </>
    )
}

export default Lista