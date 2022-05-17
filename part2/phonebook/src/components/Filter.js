const Filter = ( { filter, handler } ) => (
    <div>
        <p>filter by: </p>
        <input
            type='text'
            value={filter}
            onChange={handler}
        />
    </div>
)

export default Filter