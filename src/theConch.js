import irPowerToggleToCEC from './the_conch/irPowerToggleToCEC'
import initRuleDeclarations from './the_conch/initRuleDeclarations'
import validateRule from './the_conch/validateRule'

validateRule(irPowerToggleToCEC) ? initRuleDeclarations(irPowerToggleToCEC) : console.log('unable to initialize rule declarations (see errors)')
