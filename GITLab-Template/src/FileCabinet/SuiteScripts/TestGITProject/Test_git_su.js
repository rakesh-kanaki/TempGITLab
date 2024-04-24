/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/action', 'N/auth', 'N/cache', 'N/certificateControl', 'N/commerce', 'N/compress', 'N/config', 'N/crypto', 'N/crypto/certificate', 'N/currency', 'N/currentRecord', 'N/dataset', 'N/email', 'N/encode', 'N/error', 'N/file', 'N/format', 'N/format/i18n', 'N/http', 'N/https', 'N/https/clientCertificate', 'N/keyControl', 'N/log', 'N/piremoval', 'N/plugin', 'N/portlet', 'N/query', 'N/record', 'N/recordContext', 'N/redirect', 'N/render', 'N/runtime', 'N/search', 'N/sftp', 'N/sso', 'N/suiteAppInfo', 'N/task', 'N/task/accounting/recognition', 'N/transaction', 'N/translation', 'N/ui/dialog', 'N/ui/message', 'N/ui/serverWidget', 'N/url', 'N/util', 'N/workbook', 'N/workflow', 'N/xml'],
    /**
     * @param{action} action
     * @param{auth} auth
     * @param{cache} cache
     * @param{certificateControl} certificateControl
     * @param{commerce} commerce
     * @param{compress} compress
     * @param{config} config
     * @param{crypto} crypto
     * @param{certificate} certificate
     * @param{currency} currency
     * @param{currentRecord} currentRecord
     * @param{dataset} dataset
     * @param{email} email
     * @param{encode} encode
     * @param{error} error
     * @param{file} file
     * @param{format} format
     * @param{i18n} i18n
     * @param{http} http
     * @param{https} https
     * @param{clientCertificate} clientCertificate
     * @param{keyControl} keyControl
     * @param{log} log
     * @param{piremoval} piremoval
     * @param{plugin} plugin
     * @param{portlet} portlet
     * @param{query} query
     * @param{record} record
     * @param{recordContext} recordContext
     * @param{redirect} redirect
     * @param{render} render
     * @param{runtime} runtime
     * @param{search} search
     * @param{sftp} sftp
     * @param{sso} sso
     * @param{suiteAppInfo} suiteAppInfo
     * @param{task} task
     * @param{recognition} recognition
     * @param{transaction} transaction
     * @param{translation} translation
     * @param{dialog} dialog
     * @param{message} message
     * @param{serverWidget} serverWidget
     * @param{url} url
     * @param{util} util
     * @param{workbook} workbook
     * @param{workflow} workflow
     * @param{xml} xml
     */
    (action, auth, cache, certificateControl, commerce, compress, config, crypto, certificate, currency, currentRecord, dataset, email, encode, error, file, format, i18n, http, https, clientCertificate, keyControl, log, piremoval, plugin, portlet, query, record, recordContext, redirect, render, runtime, search, sftp, sso, suiteAppInfo, task, recognition, transaction, translation, dialog, message, serverWidget, url, util, workbook, workflow, xml) => {
        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} scriptContext
         * @param {ServerRequest} scriptContext.request - Incoming request
         * @param {ServerResponse} scriptContext.response - Suitelet response
         * @since 2015.2
         */
        const onRequest = (scriptContext) => {

        }

        return { onRequest }

    });