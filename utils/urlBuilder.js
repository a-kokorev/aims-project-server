const serverUrl = 'https://dev.azure.com';
const organization = process.env.ADO_ORGANIZATION;
const project = process.env.ADO_PROJECT;
const apiVersion = '6.0';

module.exports.wiqlUrl = () => `${serverUrl}/${organization}/${project}/_apis/wit/wiql?api-version=${apiVersion}`;
module.exports.workItemUrl = id => `${serverUrl}/${organization}/${project}/_apis/wit/workitems/${id}?api-version=${apiVersion}`;
