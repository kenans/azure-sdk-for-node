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
 * Describes Compute Resource Usage.
 *
 */
class Usage {
  /**
   * Create a Usage.
   * @member {number} currentValue The current usage of the resource.
   * @member {number} limit The maximum permitted usage of the resource.
   * @member {object} name The name of the type of usage.
   * @member {string} [name.value] The name of the resource.
   * @member {string} [name.localizedValue] The localized name of the resource.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Usage
   *
   * @returns {object} metadata of Usage
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Usage',
      type: {
        name: 'Composite',
        className: 'Usage',
        modelProperties: {
          unit: {
            required: true,
            isConstant: true,
            serializedName: 'unit',
            defaultValue: 'Count',
            type: {
              name: 'String'
            }
          },
          currentValue: {
            required: true,
            serializedName: 'currentValue',
            type: {
              name: 'Number'
            }
          },
          limit: {
            required: true,
            serializedName: 'limit',
            type: {
              name: 'Number'
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'Composite',
              className: 'UsageName'
            }
          }
        }
      }
    };
  }
}

module.exports = Usage;
