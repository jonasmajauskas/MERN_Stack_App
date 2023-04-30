const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>Welcome to the NYU Article Database.</h1>
                <a href="/articles">
                    <button className="btn-primary">Begin your search here.</button>
                </a>
                <br></br>
            </main>
        </Def>
    )
}

module.exports = home