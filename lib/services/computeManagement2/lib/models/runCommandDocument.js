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
 * Describes the properties of a Run Command.
 *
 * @extends models['RunCommandDocumentBase']
 */
class RunCommandDocument extends models['RunCommandDocumentBase'] {
  /**
   * Create a RunCommandDocument.
   * @member {array} script The script to be executed.
   * @member {array} [parameters] The parameters used by the script.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RunCommandDocument
   *
   * @returns {object} metadata of RunCommandDocument
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RunCommandDocument',
      type: {
        name: 'Composite',
        className: 'RunCommandDocument',
        modelProperties: {
          schema: {
            required: true,
            serializedName: '$schema',
            type: {
              name: 'String'
            }
          },
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          osType: {
            required: true,
            serializedName: 'osType',
            type: {
              name: 'Enum',
              allowedValues: [ 'Windows', 'Linux' ]
            }
          },
          label: {
            required: true,
            serializedName: 'label',
            type: {
              name: 'String'
            }
          },
          description: {
            required: true,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          script: {
            required: true,
            serializedName: 'script',
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
          },
          parameters: {
            required: false,
            serializedName: 'parameters',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RunCommandParameterDefinitionElementType',
                  type: {
                    name: 'Composite',
                    className: 'RunCommandParameterDefinition'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = RunCommandDocument;
