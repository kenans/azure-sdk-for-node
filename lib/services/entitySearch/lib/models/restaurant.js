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
 * Class representing a Restaurant.
 * @extends models['FoodEstablishment']
 */
class Restaurant extends models['FoodEstablishment'] {
  /**
   * Create a Restaurant.
   * @member {boolean} [acceptsReservations]
   * @member {string} [reservationUrl]
   * @member {array} [servesCuisine]
   * @member {string} [menuUrl]
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Restaurant
   *
   * @returns {object} metadata of Restaurant
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Restaurant',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: '_type',
          clientName: '_type'
        },
        uberParent: 'ResponseBase',
        className: 'Restaurant',
        modelProperties: {
          _type: {
            required: true,
            serializedName: '_type',
            type: {
              name: 'String'
            }
          },
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          contractualRules: {
            required: false,
            readOnly: true,
            serializedName: 'contractualRules',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ContractualRulesContractualRuleElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ContractualRulesContractualRule',
                    className: 'ContractualRulesContractualRule'
                  }
              }
            }
          },
          webSearchUrl: {
            required: false,
            readOnly: true,
            serializedName: 'webSearchUrl',
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
          url: {
            required: false,
            readOnly: true,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          },
          image: {
            required: false,
            readOnly: true,
            serializedName: 'image',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '_type',
                clientName: '_type'
              },
              uberParent: 'ResponseBase',
              className: 'ImageObject'
            }
          },
          description: {
            required: false,
            readOnly: true,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          entityPresentationInfo: {
            required: false,
            readOnly: true,
            serializedName: 'entityPresentationInfo',
            type: {
              name: 'Composite',
              className: 'EntitiesEntityPresentationInfo'
            }
          },
          bingId: {
            required: false,
            readOnly: true,
            serializedName: 'bingId',
            type: {
              name: 'String'
            }
          },
          address: {
            required: false,
            readOnly: true,
            serializedName: 'address',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: '_type',
                clientName: '_type'
              },
              uberParent: 'ResponseBase',
              className: 'PostalAddress'
            }
          },
          telephone: {
            required: false,
            readOnly: true,
            serializedName: 'telephone',
            type: {
              name: 'String'
            }
          },
          priceRange: {
            required: false,
            readOnly: true,
            serializedName: 'priceRange',
            type: {
              name: 'String'
            }
          },
          panoramas: {
            required: false,
            readOnly: true,
            serializedName: 'panoramas',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ImageObjectElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'ImageObject'
                  }
              }
            }
          },
          isPermanentlyClosed: {
            required: false,
            readOnly: true,
            serializedName: 'isPermanentlyClosed',
            type: {
              name: 'Boolean'
            }
          },
          tagLine: {
            required: false,
            readOnly: true,
            serializedName: 'tagLine',
            type: {
              name: 'String'
            }
          },
          acceptsReservations: {
            required: false,
            readOnly: true,
            serializedName: 'acceptsReservations',
            type: {
              name: 'Boolean'
            }
          },
          reservationUrl: {
            required: false,
            readOnly: true,
            serializedName: 'reservationUrl',
            type: {
              name: 'String'
            }
          },
          servesCuisine: {
            required: false,
            readOnly: true,
            serializedName: 'servesCuisine',
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
          menuUrl: {
            required: false,
            readOnly: true,
            serializedName: 'menuUrl',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Restaurant;
