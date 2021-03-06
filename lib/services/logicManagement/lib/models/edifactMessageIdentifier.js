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
 * @class
 * Initializes a new instance of the EdifactMessageIdentifier class.
 * @constructor
 * The Edifact message identifier.
 *
 * @member {string} messageId The message id on which this envelope settings
 * has to be applied.
 *
 */
class EdifactMessageIdentifier {
  constructor() {
  }

  /**
   * Defines the metadata of EdifactMessageIdentifier
   *
   * @returns {object} metadata of EdifactMessageIdentifier
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EdifactMessageIdentifier',
      type: {
        name: 'Composite',
        className: 'EdifactMessageIdentifier',
        modelProperties: {
          messageId: {
            required: true,
            serializedName: 'messageId',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EdifactMessageIdentifier;
