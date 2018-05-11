import rules from './models/rules'
import initializeHandler from './controllers/initializeHandler'

rules.map(rule => initializeHandler(rule))
