const React = require('react')
const Def = require('./default.jsx')

function search () {
    return (
        <Def>
            <main>
                <h1>Search</h1>
            </main>
            <form action="#" method="GET">
                <label htmlFor="search">Search:</label>
                <input type="text" id="searchy" name="search"></input>
                <button type="submit">Submit</button>
            </form>
        </Def>
    )
}

module.exports = search