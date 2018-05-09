import initializeHandler from './the_conch/initializeHandler'
import Datastore from 'nedb'

var db = new Datastore({filename: 'rules.json', autoload: true})

let rules = db.find({})
console.log(rules)
// initializeHandler(rules)
