/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var util = require('util');

/**
 * @class
 * Initializes a new instance of the MigrateWorkspaceCollectionRequest class.
 * @constructor
 * @member {string} [targetResourceGroup] Name of the resource group that the
 * Power BI Workspace Collections will be migrated to.
 * 
 * @member {array} [resources]
 * 
 */
function MigrateWorkspaceCollectionRequest() {
}

/**
 * Defines the metadata of MigrateWorkspaceCollectionRequest
 *
 * @returns {object} metadata of MigrateWorkspaceCollectionRequest
 *
 */
MigrateWorkspaceCollectionRequest.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'MigrateWorkspaceCollectionRequest',
    type: {
      name: 'Composite',
      className: 'MigrateWorkspaceCollectionRequest',
      modelProperties: {
        targetResourceGroup: {
          required: false,
          serializedName: 'targetResourceGroup',
          type: {
            name: 'String'
          }
        },
        resources: {
          required: false,
          serializedName: 'resources',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = MigrateWorkspaceCollectionRequest;