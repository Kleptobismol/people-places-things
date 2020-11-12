const page = (people, places, things) => {
        return(
            `
        <html>
            <head>
                <link rel='stylesheet' href='/styles.css' />
            </head>
            <body>
                <h1> People, Places and Things w/ Dates! </h1>
                <form action='/' method='POST' id='new_instance'>
                    <select name="person">
                        <option value="" disabled selected>-person-</option>
                        ${ people.map( person => {
                            return(
                            `<option value="${ person.name }">${ person.name }</option>`
                            )
                        }).join('')}
                    </select>
                    <select name="place">
                        <option value="" disabled selected>-place-</option>
                        ${ places.map( place => {
                            return(
                            `<option value="${ place.name }">${ place.name }</option>`
                            )
                        }).join('')}
                    </select>
                    <select name="thing">
                        <option value="" disabled selected>-thing-</option>
                        ${ things.map( thing => {
                            return(
                            `<option value="${ thing.name }">${ thing.name }</option>`
                            )
                        }).join('')}
                    </select>
                    <button id='submit' type='submit' form='new_instance'> Save </button>
                </form>
                <ul>
                        
                </ul>
            </body>
        </html> 
        `
        )
}

const submitted = () => {
    return (`
        <h1> Great Job! </h1>
    `)
}

module.exports = {
    page,
    submitted
}