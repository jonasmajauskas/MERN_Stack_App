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
                <h1>Search</h1>
            </main>
            <body>
                <form method="POST" action="index">
                    <div>
                        <label>Begin Date</label>
                        <input type="date" id="pub_date"></input>
                    </div>                    
                    <div>
                        <label>End Date</label>
                        <input type="date" id="pub_date"></input>
                    </div>
                    <div>
                        <label>Keyword</label>
                        <input type="text" id="fq"></input>
                    </div>
                    <button type="submit" className="btn btn-primary" id="search-query">Submit</button>
                </form>
              {articlesFormatted}
          </body>
      </Def>
  )
}

module.exports = index