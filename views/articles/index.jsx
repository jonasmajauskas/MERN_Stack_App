const React = require('react')
const articles = require('../../models/articles.js')
const Def = require('../default.jsx')

function index (data) {
    console.log(data)
    data = JSON.stringify
    let articlesFormatted = data.map(article => {
        return (
            <div>{article}</div>
        )
    })
    return (
      <Def>
            <main>
                <h1>Your Results</h1>
            </main>
            <body>
              {articlesFormatted}
          </body>
      </Def>
  )
}

module.exports = index