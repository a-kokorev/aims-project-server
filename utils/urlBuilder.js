const serverUrl = 'https://dev.azure.com';
const organization = '';
const project = '';
const apiVersion = '6.0';

module.exports.wiqlUrl = () => `${serverUrl}/${organization}/${project}/_apis/wit/wiql?api-version=${apiVersion}`;
module.exports.workItemUrl = id => `${serverUrl}/${organization}/${project}/_apis/wit/workitems/${id}?api-version=${apiVersion}`;
