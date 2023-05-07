const React = require('react')
const Def = require('../default.jsx')

function index (data) {
    let articlesFormatted = data.articles.map((article) => {
        return (
            <div>{article.name}</div>
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