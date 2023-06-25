const React = require('react')
const articles = require('../../models/articles.js')
const Def = require('../default.jsx')

function index (data) {
    // const stringify = JSON.stringify(data)
    // console.log(data)
    function stringifyData(data) {
        return JSON.stringify(data)
    }

    // let articlesFormatted = data.map((article) => {
    //     return (
    //         <div>{article}</div>
    //     )
    // })
    return (
      <Def>
            <main>
                <h1>Articles</h1>
            </main>
            <body>
              {stringifyData}
          </body>
      </Def>
  )
}

module.exports = index