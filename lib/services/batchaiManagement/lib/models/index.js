/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

/* jshint latedef:false */
/* jshint forin:false */
/* jshint noempty:false */

'use strict';

var msRestAzure = require('ms-rest-azure');

exports.BaseResource = msRestAzure.BaseResource;
exports.CloudError = msRestAzure.CloudError;
exports.UserAccountSettings = require('./userAccountSettings');
exports.SshConfiguration = require('./sshConfiguration');
exports.DataDisks = require('./dataDisks');
exports.ResourceId = require('./resourceId');
exports.MountSettings = require('./mountSettings');
exports.Resource = require('./resource');
exports.FileServer = require('./fileServer');
exports.KeyVaultSecretReference = require('./keyVaultSecretReference');
exports.KeyVaultKeyReference = require('./keyVaultKeyReference');
exports.FileServerCreateParameters = require('./fileServerCreateParameters');
exports.ManualScaleSettings = require('./manualScaleSettings');
exports.AutoScaleSettings = require('./autoScaleSettings');
exports.ScaleSettings = require('./scaleSettings');
exports.ImageReference = require('./imageReference');
exports.VirtualMachineConfiguration = require('./virtualMachineConfiguration');
exports.EnvironmentSetting = require('./environmentSetting');
exports.SetupTask = require('./setupTask');
exports.AzureStorageCredentialsInfo = require('./azureStorageCredentialsInfo');
exports.AzureFileShareReference = require('./azureFileShareReference');
exports.AzureBlobFileSystemReference = require('./azureBlobFileSystemReference');
exports.FileServerReference = require('./fileServerReference');
exports.UnmanagedFileSystemReference = require('./unmanagedFileSystemReference');
exports.MountVolumes = require('./mountVolumes');
exports.NodeSetup = require('./nodeSetup');
exports.NodeStateCounts = require('./nodeStateCounts');
exports.ClusterCreateParameters = require('./clusterCreateParameters');
exports.ClusterUpdateParameters = require('./clusterUpdateParameters');
exports.NameValuePair = require('./nameValuePair');
exports.BatchAIError = require('./batchAIError');
exports.Cluster = require('./cluster');
exports.PrivateRegistryCredentials = require('./privateRegistryCredentials');
exports.ImageSourceRegistry = require('./imageSourceRegistry');
exports.ContainerSettings = require('./containerSettings');
exports.CNTKsettings = require('./cNTKsettings');
exports.TensorFlowSettings = require('./tensorFlowSettings');
exports.CaffeSettings = require('./caffeSettings');
exports.Caffe2Settings = require('./caffe2Settings');
exports.ChainerSettings = require('./chainerSettings');
exports.CustomToolkitSettings = require('./customToolkitSettings');
exports.JobPreparation = require('./jobPreparation');
exports.InputDirectory = require('./inputDirectory');
exports.OutputDirectory = require('./outputDirectory');
exports.JobBasePropertiesConstraints = require('./jobBasePropertiesConstraints');
exports.JobCreateParameters = require('./jobCreateParameters');
exports.JobPropertiesConstraints = require('./jobPropertiesConstraints');
exports.JobPropertiesExecutionInfo = require('./jobPropertiesExecutionInfo');
exports.Job = require('./job');
exports.RemoteLoginInformation = require('./remoteLoginInformation');
exports.File = require('./file');
exports.LocalDataVolume = require('./localDataVolume');
exports.OperationDisplay = require('./operationDisplay');
exports.Operation = require('./operation');
exports.ClustersListOptions = require('./clustersListOptions');
exports.ClustersListByResourceGroupOptions = require('./clustersListByResourceGroupOptions');
exports.JobsListOptions = require('./jobsListOptions');
exports.JobsListByResourceGroupOptions = require('./jobsListByResourceGroupOptions');
exports.JobsListOutputFilesOptions = require('./jobsListOutputFilesOptions');
exports.FileServersListOptions = require('./fileServersListOptions');
exports.FileServersListByResourceGroupOptions = require('./fileServersListByResourceGroupOptions');
exports.OperationListResult = require('./operationListResult');
exports.RemoteLoginInformationListResult = require('./remoteLoginInformationListResult');
exports.ClusterListResult = require('./clusterListResult');
exports.JobListResult = require('./jobListResult');
exports.FileListResult = require('./fileListResult');
exports.FileServerListResult = require('./fileServerListResult');