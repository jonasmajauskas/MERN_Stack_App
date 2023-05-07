const React = require('react')
const Def = require('../default.jsx')

function search () {
    return (
      <Def>
            <main>
                <h1>Search</h1>
            </main>
            <body>
                <form method="POST" action="/query">
                    <div className="form-group">
                        <label htmlFor="begin_date">Begin Date</label>
                        <input type="date" id="begin_date" name="begin_date"  />
                    </div>                  
                    <div className="form-group">
                        <label htmlFor="end_date">End Date</label>
                        <input type="date" id="end_date" name="end_date"  />
                    </div>   
                    <div className="form-group">
                        <label htmlFor="keyword">Keyword</label>
                        <input type="text" id="keyword" name="keyword"  />
                    </div> 
                    <button type="submit" className="btn btn-primary" id="search-query">Submit</button>
                </form>
          </body>
      </Def>
  )
}

module.exports = search


