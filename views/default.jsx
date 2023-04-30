const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>NYT Article Database</title>
                <link rel="stylesheet" href="styles.css" />
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/articles">Search</a>
                        </li>
                        <li>
                            <a href="/favorites">Favorites</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def