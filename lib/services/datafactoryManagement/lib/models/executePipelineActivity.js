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
 * Execute pipeline activity.
 *
 * @extends models['ControlActivity']
 */
class ExecutePipelineActivity extends models['ControlActivity'] {
  /**
   * Create a ExecutePipelineActivity.
   * @member {object} pipelineProperty Pipeline reference.
   * @member {string} [pipelineProperty.referenceName] Reference pipeline name.
   * @member {string} [pipelineProperty.name] Reference name.
   * @member {object} [parameters] Pipeline parameters.
   * @member {boolean} [waitOnCompletion] Defines whether activity execution
   * will wait for the dependent pipeline execution to finish. Default is
   * false.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ExecutePipelineActivity
   *
   * @returns {object} metadata of ExecutePipelineActivity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ExecutePipeline',
      type: {
        name: 'Composite',
        className: 'ExecutePipelineActivity',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          dependsOn: {
            required: false,
            serializedName: 'dependsOn',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ActivityDependencyElementType',
                  type: {
                    name: 'Composite',
                    className: 'ActivityDependency'
                  }
              }
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          pipelineProperty: {
            required: true,
            serializedName: 'typeProperties.pipeline',
            defaultValue: {},
            type: {
              name: 'Composite',
              className: 'PipelineReference'
            }
          },
          parameters: {
            required: false,
            serializedName: 'typeProperties.parameters',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'ObjectElementType',
                  type: {
                    name: 'Object'
                  }
              }
            }
          },
          waitOnCompletion: {
            required: false,
            serializedName: 'typeProperties.waitOnCompletion',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = ExecutePipelineActivity;