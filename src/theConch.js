import irPowerToggleToCEC from './irPowerToggleToCEC'
import initRuleDeclarations from './initRuleDeclarations'
import validateRule from './validateRule'

validateRule(irPowerToggleToCEC) ? initRuleDeclarations(irPowerToggleToCEC) : console.log('unable to initialize rule declarations (see errors)')
