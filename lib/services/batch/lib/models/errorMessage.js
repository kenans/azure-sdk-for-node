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
 * @summary An error message received in an Azure Batch error response.
  *
 */
class ErrorMessage {
  /**
   * Create a ErrorMessage.
   * @member {string} [lang] The language code of the error message.
   * @member {string} [value] The text of the message.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ErrorMessage
   *
   * @returns {object} metadata of ErrorMessage
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ErrorMessage',
      type: {
        name: 'Composite',
        className: 'ErrorMessage',
        modelProperties: {
          lang: {
            required: false,
            serializedName: 'lang',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ErrorMessage;
