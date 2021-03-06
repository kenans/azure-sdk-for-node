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

/**
 * The response of list Redis operation.
 */
class RedisListResult extends Array {
  /**
   * Create a RedisListResult.
   * @member {string} [nextLink] Link for next set of locations.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RedisListResult
   *
   * @returns {object} metadata of RedisListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RedisListResult',
      type: {
        name: 'Composite',
        className: 'RedisListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RedisResourceElementType',
                  type: {
                    name: 'Composite',
                    className: 'RedisResource'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RedisListResult;
