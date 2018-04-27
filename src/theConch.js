import irPowerToggleToCEC from './the_conch/irPowerToggleToCEC'
import enactNewRule from './the_conch/enactNewRule'
import ruleValidates from './the_conch/ruleValidates'

if (ruleValidates(irPowerToggleToCEC)) {
  enactNewRule(irPowerToggleToCEC)
} else {
  console.log('unable to initialize rule declarations (see errors)')
}
