const express = require( "express" )

const app = express()

app.get( "/health", ( req, res ) => res.send( { message: "OK" } ) )

app.listen( 3_000, () => console.info( "Server running at :3000" ) )