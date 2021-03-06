'use strict';

/**
 * Return context information about the current user/script.
 *
 * @return {nlobjContext}
 *
 * @since    2007.0
 */
exports.nlapiGetContext = () => {
    try {
        if (!global.$NS_CONTECXT_OBJ) {
            global.$NS_CONTECXT_OBJ = new nlobjContext();
        }
        return global.$NS_CONTECXT_OBJ;
    } catch (e) {
        throw nlapiCreateError(e);
    }
};

var $TYPES = ['debug', 'audit', 'error', 'emergency'];
/**
 * Create an entry in the script execution log (note that execution log entries are automatically purged after 30 days).
 *
 * @param {string} type    log type: debug|audit|error|emergency
 * @param {string} title log title (up to 90 characters supported)
 * @param {string} [details] log details (up to 3000 characters supported)
 * @return {void}
 *
 * @since 2008.1
 */
exports.nlapiLogExecution = (type, title, details) => {
    if (!type || !~$TYPES.indexOf(type.toLowerCase())) {
        throw 'SSS_MISSING_REQD_ARGUMENT';
    } else {
        console.log('NS >>', type, title, details, (type.toLowerCase() === 'error' ? details.stack || new Error().stack : undefined));
    }
};
