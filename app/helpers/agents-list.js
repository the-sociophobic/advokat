import Ember from 'ember';

export function agentsList(agents) {
  return agents.name;
}

export default Ember.Helper.helper(agentsList);
