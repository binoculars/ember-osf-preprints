import Ember from 'ember';
import ResetScrollMixin from '../mixins/reset-scroll';
import Analytics from 'ember-osf/mixins/analytics';

/**
 * @module ember-preprints
 * @submodule routes
 */

/**
 * @class Page Not Found Route Handler
 */
export default Ember.Route.extend(Analytics, ResetScrollMixin, {
});
