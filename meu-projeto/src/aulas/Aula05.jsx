import Item from "../components/Item"

function Aula05() {
    return (
        <div>
            <h2>Aula 05 - PropTypes</h2>

            <ul>
                <Item marca="Ferrari" ano_lancamento={1985} />
                <Item marca="Fiat" ano_lancamento={1960} />
                <Item />
            </ul>
        </div>
    )
}

export default Aula05