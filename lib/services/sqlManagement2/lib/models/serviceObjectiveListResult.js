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
 * Initializes a new instance of the ServiceObjectiveListResult class.
 * @constructor
 * Represents the response to a get database service objectives request.
 *
 */
class ServiceObjectiveListResult extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ServiceObjectiveListResult
   *
   * @returns {object} metadata of ServiceObjectiveListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServiceObjectiveListResult',
      type: {
        name: 'Composite',
        className: 'ServiceObjectiveListResult',
        modelProperties: {
          value: {
            required: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServiceObjectiveElementType',
                  type: {
                    name: 'Composite',
                    className: 'ServiceObjective'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ServiceObjectiveListResult;
