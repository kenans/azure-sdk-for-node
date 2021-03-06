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
 * Target devices based on an integer tag value.
 *
 * @extends models['Criterion']
 */
class IntegerTagCriterion extends models['Criterion'] {
  /**
   * Create a IntegerTagCriterion.
   * @member {string} [name] The name of the custom tag.
   * @member {number} [value] A custom integer value to match.
   * @member {string} [op] comparison operator: `EQ` (equal to), `LT` (less
   * than), `GT` (greater than), `LE` (less than or equal to) or `GE` (greater
   * than or equal to). Possible values include: 'EQ', 'LT', 'GT', 'LE', 'GE'
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of IntegerTagCriterion
   *
   * @returns {object} metadata of IntegerTagCriterion
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'integer-tag',
      type: {
        name: 'Composite',
        className: 'IntegerTagCriterion',
        modelProperties: {
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'Number'
            }
          },
          op: {
            required: false,
            serializedName: 'op',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = IntegerTagCriterion;
