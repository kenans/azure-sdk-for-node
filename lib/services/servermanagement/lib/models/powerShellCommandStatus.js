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

const models = require('./index');

/**
 * Result status from invoking a PowerShell command.
 *
 * @extends models['Resource']
 */
class PowerShellCommandStatus extends models['Resource'] {
  /**
   * Create a PowerShellCommandStatus.
   * @member {array} [results]
   * @member {string} [pssession]
   * @member {string} [command]
   * @member {boolean} [completed]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of PowerShellCommandStatus
   *
   * @returns {object} metadata of PowerShellCommandStatus
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PowerShellCommandStatus',
      type: {
        name: 'Composite',
        className: 'PowerShellCommandStatus',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          location: {
            required: false,
            readOnly: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          etag: {
            required: false,
            serializedName: 'etag',
            type: {
              name: 'String'
            }
          },
          results: {
            required: false,
            serializedName: 'properties.results',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PowerShellCommandResultElementType',
                  type: {
                    name: 'Composite',
                    className: 'PowerShellCommandResult'
                  }
              }
            }
          },
          pssession: {
            required: false,
            serializedName: 'properties.pssession',
            type: {
              name: 'String'
            }
          },
          command: {
            required: false,
            serializedName: 'properties.command',
            type: {
              name: 'String'
            }
          },
          completed: {
            required: false,
            serializedName: 'properties.completed',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = PowerShellCommandStatus;
