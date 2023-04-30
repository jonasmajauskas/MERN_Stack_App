const React = require('react')
const Def = require('./default.jsx')
import { useEffect, useState } from 'react'

function search () {
    return (
        <Def>
            <main>
                <h1>Search</h1>
            </main>
            <body>
                <form action="#" method="GET">
                    <div>
                        <label>Date of Publication:</label>
                        <input type="date" id="pub_date"></input>
                    </div>
                    <div>
                        <label>Sections:</label>
                        <input type="text" id="news_desk"></input>
                    </div>
                    <div>
                        <label>Headline:</label>
                        <input type="text" id="headline"></input>
                    </div>
                    <button type="submit" className="btn btn-primary" id="search-query">Submit</button>
                </form>
            </body>
        </Def>
    )
}

module.exports = search