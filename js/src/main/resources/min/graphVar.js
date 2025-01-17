var json = `{
              "type" : "Aadl",
              "components" : [
                {
                  "type" : "Component",
                  "identifier" : {
                    "type" : "Name",
                    "name" : ["PCA_Shutoff_System_imp_Instance"],
                    "pos" : {
                      "type" : "Some",
                      "value" : {
                        "type" : "Position",
                        "uriOpt" : {
                          "type" : "Some",
                          "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                        },
                        "beginLine" : 16,
                        "beginColumn" : 2,
                        "endLine" : 33,
                        "endColumn" : 29,
                        "offset" : 165,
                        "length" : 705
                      }
                    }
                  },
                  "category" : {
                    "type" : "ComponentCategory",
                    "value" : "System"
                  },
                  "classifier" : {
                    "type" : "None"
                  },
                  "features" : [
                  ],
                  "subComponents" : [
                    {
                      "type" : "Component",
                      "identifier" : {
                        "type" : "Name",
                        "name" : ["PCA_Shutoff_System_imp_Instance", "patient"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                            },
                            "beginLine" : 21,
                            "beginColumn" : 4,
                            "endLine" : 21,
                            "endColumn" : 47,
                            "offset" : 364,
                            "length" : 43
                          }
                        }
                      },
                      "category" : {
                        "type" : "ComponentCategory",
                        "value" : "Abstract"
                      },
                      "classifier" : {
                        "type" : "Some",
                        "value" : {
                          "type" : "Classifier",
                          "name" : "PCA_Patient::Patient.imp"
                        }
                      },
                      "features" : [
                        {
                          "type" : "FeatureEnd",
                          "identifier" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "vein"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCA_Patient.aadl"
                                },
                                "beginLine" : 9,
                                "beginColumn" : 4,
                                "endLine" : 9,
                                "endColumn" : 21,
                                "offset" : 98,
                                "length" : 17
                              }
                            }
                          },
                          "direction" : {
                            "type" : "Direction",
                            "value" : "In"
                          },
                          "category" : {
                            "type" : "FeatureCategory",
                            "value" : "AbstractFeature"
                          },
                          "classifier" : {
                            "type" : "None"
                          },
                          "properties" : [
                          ]
                        },
                        {
                          "type" : "FeatureEnd",
                          "identifier" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "fingerclip"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCA_Patient.aadl"
                                },
                                "beginLine" : 10,
                                "beginColumn" : 4,
                                "endLine" : 10,
                                "endColumn" : 28,
                                "offset" : 119,
                                "length" : 24
                              }
                            }
                          },
                          "direction" : {
                            "type" : "Direction",
                            "value" : "Out"
                          },
                          "category" : {
                            "type" : "FeatureCategory",
                            "value" : "AbstractFeature"
                          },
                          "classifier" : {
                            "type" : "None"
                          },
                          "properties" : [
                          ]
                        }
                      ],
                      "subComponents" : [
                      ],
                      "connections" : [
                      ],
                      "connectionInstances" : [
                      ],
                      "properties" : [
                        {
                          "type" : "Property",
                          "name" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::ComponentRoles"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                },
                                "beginLine" : 76,
                                "beginColumn" : 2,
                                "endLine" : 76,
                                "endColumn" : 210,
                                "offset" : 1936,
                                "length" : 208
                              }
                            }
                          },
                          "propertyValues" : [
                            {
                              "type" : "RecordProp",
                              "properties" : [
                                {
                                  "type" : "Property",
                                  "name" : {
                                    "type" : "Name",
                                    "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::Component.Description"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                        },
                                        "beginLine" : 71,
                                        "beginColumn" : 3,
                                        "endLine" : 71,
                                        "endColumn" : 27,
                                        "offset" : 1848,
                                        "length" : 24
                                      }
                                    }
                                  },
                                  "propertyValues" : [
                                    {
                                      "type" : "ValueProp",
                                      "value" : "The drug infused into the patient affects the patient's vitals"
                                    }
                                  ],
                                  "appliesTo" : [
                                  ]
                                },
                                {
                                  "type" : "Property",
                                  "name" : {
                                    "type" : "Name",
                                    "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::Component.ControlLoop"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                        },
                                        "beginLine" : 72,
                                        "beginColumn" : 3,
                                        "endLine" : 72,
                                        "endColumn" : 35,
                                        "offset" : 1875,
                                        "length" : 32
                                      }
                                    }
                                  },
                                  "propertyValues" : [
                                    {
                                      "type" : "RecordProp",
                                      "properties" : [
                                        {
                                          "type" : "Property",
                                          "name" : {
                                            "type" : "Name",
                                            "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::ControlLoop.ID"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                },
                                                "beginLine" : 66,
                                                "beginColumn" : 3,
                                                "endLine" : 66,
                                                "endColumn" : 18,
                                                "offset" : 1771,
                                                "length" : 15
                                              }
                                            }
                                          },
                                          "propertyValues" : [
                                            {
                                              "type" : "ValueProp",
                                              "value" : "CL1"
                                            }
                                          ],
                                          "appliesTo" : [
                                          ]
                                        },
                                        {
                                          "type" : "Property",
                                          "name" : {
                                            "type" : "Name",
                                            "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::ControlLoop.Description"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                },
                                                "beginLine" : 67,
                                                "beginColumn" : 3,
                                                "endLine" : 67,
                                                "endColumn" : 27,
                                                "offset" : 1789,
                                                "length" : 24
                                              }
                                            }
                                          },
                                          "propertyValues" : [
                                            {
                                              "type" : "ValueProp",
                                              "value" : "PCA safety shutoff control structure"
                                            }
                                          ],
                                          "appliesTo" : [
                                          ]
                                        }
                                      ]
                                    }
                                  ],
                                  "appliesTo" : [
                                  ]
                                },
                                {
                                  "type" : "Property",
                                  "name" : {
                                    "type" : "Name",
                                    "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::Component.Role"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                        },
                                        "beginLine" : 73,
                                        "beginColumn" : 3,
                                        "endLine" : 73,
                                        "endColumn" : 21,
                                        "offset" : 1910,
                                        "length" : 18
                                      }
                                    }
                                  },
                                  "propertyValues" : [
                                    {
                                      "type" : "ValueProp",
                                      "value" : "ControlledProcess"
                                    }
                                  ],
                                  "appliesTo" : [
                                  ]
                                }
                              ]
                            }
                          ],
                          "appliesTo" : [
                          ]
                        }
                      ],
                      "flows" : [
                      ],
                      "modes" : [
                      ],
                      "annexes" : [
                        {
                          "type" : "Annex",
                          "name" : "Emv2",
                          "clause" : {
                            "type" : "Emv2Clause",
                            "libraries" : [
                              {
                                "type" : "Name",
                                "name" : ["Simple_PCA_Errors"],
                                "pos" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Position",
                                    "uriOpt" : {
                                      "type" : "Some",
                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                    },
                                    "beginLine" : 5,
                                    "beginColumn" : 3,
                                    "endLine" : 56,
                                    "endColumn" : 15,
                                    "offset" : 52,
                                    "length" : 1039
                                  }
                                }
                              },
                              {
                                "type" : "Name",
                                "name" : ["Simple_PCA_Errors.PatientStatus"],
                                "pos" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Position",
                                    "uriOpt" : {
                                      "type" : "Some",
                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                    },
                                    "beginLine" : 33,
                                    "beginColumn" : 3,
                                    "endLine" : 37,
                                    "endColumn" : 16,
                                    "offset" : 599,
                                    "length" : 106
                                  }
                                }
                              }
                            ],
                            "propagations" : [
                              {
                                "type" : "Emv2Propagation",
                                "direction" : {
                                  "type" : "PropagationDirection",
                                  "value" : "In"
                                },
                                "propagationPoint" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "vein"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "Simple_PCA_Shutoff\/packages\/PCA_Patient.aadl"
                                      },
                                      "beginLine" : 9,
                                      "beginColumn" : 4,
                                      "endLine" : 9,
                                      "endColumn" : 21,
                                      "offset" : 98,
                                      "length" : 17
                                    }
                                  }
                                },
                                "errorTokens" : [
                                  {
                                    "type" : "Name",
                                    "name" : ["Simple_PCA_Errors", "TooMuchAnalgesic"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                        },
                                        "beginLine" : 6,
                                        "beginColumn" : 4,
                                        "endLine" : 6,
                                        "endColumn" : 28,
                                        "offset" : 67,
                                        "length" : 24
                                      }
                                    }
                                  }
                                ]
                              }
                            ],
                            "flows" : [
                              {
                                "type" : "Emv2Flow",
                                "identifier" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "PatientAbsorbsDrug"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "Simple_PCA_Shutoff\/packages\/PCA_Patient.aadl"
                                      },
                                      "beginLine" : 34,
                                      "beginColumn" : 5,
                                      "endLine" : 34,
                                      "endColumn" : 60,
                                      "offset" : 774,
                                      "length" : 55
                                    }
                                  }
                                },
                                "kind" : {
                                  "type" : "FlowKind",
                                  "value" : "Sink"
                                },
                                "sourcePropagation" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Emv2Propagation",
                                    "direction" : {
                                      "type" : "PropagationDirection",
                                      "value" : "In"
                                    },
                                    "propagationPoint" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "vein"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/PCA_Patient.aadl"
                                          },
                                          "beginLine" : 34,
                                          "beginColumn" : 5,
                                          "endLine" : 34,
                                          "endColumn" : 60,
                                          "offset" : 774,
                                          "length" : 55
                                        }
                                      }
                                    },
                                    "errorTokens" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "TooMuchAnalgesic"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 6,
                                            "beginColumn" : 4,
                                            "endLine" : 6,
                                            "endColumn" : 28,
                                            "offset" : 67,
                                            "length" : 24
                                          }
                                        }
                                      }
                                    ]
                                  }
                                },
                                "sinkPropagation" : {
                                  "type" : "None"
                                }
                              }
                            ],
                            "componentBehavior" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Emv2BehaviorSection",
                                "events" : [
                                ],
                                "transitions" : [
                                  {
                                    "type" : "ErrorTransition",
                                    "id" : {
                                      "type" : "None"
                                    },
                                    "sourceState" : {
                                      "type" : "Name",
                                      "name" : ["Simple_PCA_Errors", "PatientStatus", "Healthy"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                          },
                                          "beginLine" : 35,
                                          "beginColumn" : 5,
                                          "endLine" : 35,
                                          "endColumn" : 29,
                                          "offset" : 642,
                                          "length" : 24
                                        }
                                      }
                                    },
                                    "condition" : {
                                      "type" : "ConditionTrigger",
                                      "events" : [
                                      ],
                                      "propagationPoints" : [
                                        {
                                          "type" : "Emv2Propagation",
                                          "direction" : {
                                            "type" : "PropagationDirection",
                                            "value" : "In"
                                          },
                                          "propagationPoint" : {
                                            "type" : "Name",
                                            "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "vein"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/packages\/PCA_Patient.aadl"
                                                },
                                                "beginLine" : 9,
                                                "beginColumn" : 4,
                                                "endLine" : 9,
                                                "endColumn" : 21,
                                                "offset" : 98,
                                                "length" : 17
                                              }
                                            }
                                          },
                                          "errorTokens" : [
                                            {
                                              "type" : "Name",
                                              "name" : ["Simple_PCA_Errors", "TooMuchAnalgesic"],
                                              "pos" : {
                                                "type" : "Some",
                                                "value" : {
                                                  "type" : "Position",
                                                  "uriOpt" : {
                                                    "type" : "Some",
                                                    "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                  },
                                                  "beginLine" : 6,
                                                  "beginColumn" : 4,
                                                  "endLine" : 6,
                                                  "endColumn" : 28,
                                                  "offset" : 67,
                                                  "length" : 24
                                                }
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "targetState" : {
                                      "type" : "Name",
                                      "name" : ["Simple_PCA_Errors", "PatientStatus", "Overdosed"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                          },
                                          "beginLine" : 36,
                                          "beginColumn" : 5,
                                          "endLine" : 36,
                                          "endColumn" : 23,
                                          "offset" : 671,
                                          "length" : 18
                                        }
                                      }
                                    }
                                  }
                                ],
                                "propagations" : [
                                ]
                              }
                            },
                            "properties" : [
                              {
                                "type" : "Property",
                                "name" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::SystemHazards"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                      },
                                      "beginLine" : 9,
                                      "beginColumn" : 2,
                                      "endLine" : 9,
                                      "endColumn" : 126,
                                      "offset" : 305,
                                      "length" : 124
                                    }
                                  }
                                },
                                "propertyValues" : [
                                  {
                                    "type" : "RecordProp",
                                    "properties" : [
                                      {
                                        "type" : "Property",
                                        "name" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::SystemHazard.ID"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                              },
                                              "beginLine" : 27,
                                              "beginColumn" : 3,
                                              "endLine" : 27,
                                              "endColumn" : 18,
                                              "offset" : 834,
                                              "length" : 15
                                            }
                                          }
                                        },
                                        "propertyValues" : [
                                          {
                                            "type" : "ValueProp",
                                            "value" : "SH1"
                                          }
                                        ],
                                        "appliesTo" : [
                                        ]
                                      },
                                      {
                                        "type" : "Property",
                                        "name" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::SystemHazard.Description"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                              },
                                              "beginLine" : 28,
                                              "beginColumn" : 3,
                                              "endLine" : 28,
                                              "endColumn" : 27,
                                              "offset" : 852,
                                              "length" : 24
                                            }
                                          }
                                        },
                                        "propertyValues" : [
                                          {
                                            "type" : "ValueProp",
                                            "value" : "Medication infused at rate or amount greater than high limit"
                                          }
                                        ],
                                        "appliesTo" : [
                                        ]
                                      },
                                      {
                                        "type" : "Property",
                                        "name" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::SystemHazard.ViolatingConstraints"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                              },
                                              "beginLine" : 29,
                                              "beginColumn" : 3,
                                              "endLine" : 29,
                                              "endColumn" : 56,
                                              "offset" : 879,
                                              "length" : 53
                                            }
                                          }
                                        },
                                        "propertyValues" : [
                                          {
                                            "type" : "RecordProp",
                                            "properties" : [
                                              {
                                                "type" : "Property",
                                                "name" : {
                                                  "type" : "Name",
                                                  "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::SafetyConstraint.ID"],
                                                  "pos" : {
                                                    "type" : "Some",
                                                    "value" : {
                                                      "type" : "Position",
                                                      "uriOpt" : {
                                                        "type" : "Some",
                                                        "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                      },
                                                      "beginLine" : 38,
                                                      "beginColumn" : 3,
                                                      "endLine" : 38,
                                                      "endColumn" : 19,
                                                      "offset" : 1135,
                                                      "length" : 16
                                                    }
                                                  }
                                                },
                                                "propertyValues" : [
                                                  {
                                                    "type" : "ValueProp",
                                                    "value" : "SC1"
                                                  }
                                                ],
                                                "appliesTo" : [
                                                ]
                                              },
                                              {
                                                "type" : "Property",
                                                "name" : {
                                                  "type" : "Name",
                                                  "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::SafetyConstraint.Constraint"],
                                                  "pos" : {
                                                    "type" : "Some",
                                                    "value" : {
                                                      "type" : "Position",
                                                      "uriOpt" : {
                                                        "type" : "Some",
                                                        "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                      },
                                                      "beginLine" : 39,
                                                      "beginColumn" : 3,
                                                      "endLine" : 39,
                                                      "endColumn" : 26,
                                                      "offset" : 1154,
                                                      "length" : 23
                                                    }
                                                  }
                                                },
                                                "propertyValues" : [
                                                  {
                                                    "type" : "ValueProp",
                                                    "value" : "Pump infuses only the required amount of opioid"
                                                  }
                                                ],
                                                "appliesTo" : [
                                                ]
                                              }
                                            ]
                                          }
                                        ],
                                        "appliesTo" : [
                                        ]
                                      },
                                      {
                                        "type" : "Property",
                                        "name" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::SystemHazard.ControlLoop"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                              },
                                              "beginLine" : 30,
                                              "beginColumn" : 3,
                                              "endLine" : 30,
                                              "endColumn" : 35,
                                              "offset" : 935,
                                              "length" : 32
                                            }
                                          }
                                        },
                                        "propertyValues" : [
                                          {
                                            "type" : "RecordProp",
                                            "properties" : [
                                              {
                                                "type" : "Property",
                                                "name" : {
                                                  "type" : "Name",
                                                  "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::ControlLoop.ID"],
                                                  "pos" : {
                                                    "type" : "Some",
                                                    "value" : {
                                                      "type" : "Position",
                                                      "uriOpt" : {
                                                        "type" : "Some",
                                                        "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                      },
                                                      "beginLine" : 66,
                                                      "beginColumn" : 3,
                                                      "endLine" : 66,
                                                      "endColumn" : 18,
                                                      "offset" : 1771,
                                                      "length" : 15
                                                    }
                                                  }
                                                },
                                                "propertyValues" : [
                                                  {
                                                    "type" : "ValueProp",
                                                    "value" : "CL1"
                                                  }
                                                ],
                                                "appliesTo" : [
                                                ]
                                              },
                                              {
                                                "type" : "Property",
                                                "name" : {
                                                  "type" : "Name",
                                                  "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::ControlLoop.Description"],
                                                  "pos" : {
                                                    "type" : "Some",
                                                    "value" : {
                                                      "type" : "Position",
                                                      "uriOpt" : {
                                                        "type" : "Some",
                                                        "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                      },
                                                      "beginLine" : 67,
                                                      "beginColumn" : 3,
                                                      "endLine" : 67,
                                                      "endColumn" : 27,
                                                      "offset" : 1789,
                                                      "length" : 24
                                                    }
                                                  }
                                                },
                                                "propertyValues" : [
                                                  {
                                                    "type" : "ValueProp",
                                                    "value" : "PCA safety shutoff control structure"
                                                  }
                                                ],
                                                "appliesTo" : [
                                                ]
                                              }
                                            ]
                                          }
                                        ],
                                        "appliesTo" : [
                                        ]
                                      },
                                      {
                                        "type" : "Property",
                                        "name" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::SystemHazard.Contribution"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                              },
                                              "beginLine" : 31,
                                              "beginColumn" : 3,
                                              "endLine" : 34,
                                              "endColumn" : 5,
                                              "offset" : 970,
                                              "length" : 122
                                            }
                                          }
                                        },
                                        "propertyValues" : [
                                          {
                                            "type" : "RecordProp",
                                            "properties" : [
                                              {
                                                "type" : "Property",
                                                "name" : {
                                                  "type" : "Name",
                                                  "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "null.accident"],
                                                  "pos" : {
                                                    "type" : "Some",
                                                    "value" : {
                                                      "type" : "Position",
                                                      "uriOpt" : {
                                                        "type" : "Some",
                                                        "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                      },
                                                      "beginLine" : 32,
                                                      "beginColumn" : 4,
                                                      "endLine" : 32,
                                                      "endColumn" : 30,
                                                      "offset" : 1005,
                                                      "length" : 26
                                                    }
                                                  }
                                                },
                                                "propertyValues" : [
                                                  {
                                                    "type" : "RecordProp",
                                                    "properties" : [
                                                      {
                                                        "type" : "Property",
                                                        "name" : {
                                                          "type" : "Name",
                                                          "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::Accident.ID"],
                                                          "pos" : {
                                                            "type" : "Some",
                                                            "value" : {
                                                              "type" : "Position",
                                                              "uriOpt" : {
                                                                "type" : "Some",
                                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                              },
                                                              "beginLine" : 14,
                                                              "beginColumn" : 4,
                                                              "endLine" : 14,
                                                              "endColumn" : 19,
                                                              "offset" : 546,
                                                              "length" : 15
                                                            }
                                                          }
                                                        },
                                                        "propertyValues" : [
                                                          {
                                                            "type" : "ValueProp",
                                                            "value" : "A1"
                                                          }
                                                        ],
                                                        "appliesTo" : [
                                                        ]
                                                      },
                                                      {
                                                        "type" : "Property",
                                                        "name" : {
                                                          "type" : "Name",
                                                          "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::Accident.Description"],
                                                          "pos" : {
                                                            "type" : "Some",
                                                            "value" : {
                                                              "type" : "Position",
                                                              "uriOpt" : {
                                                                "type" : "Some",
                                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                              },
                                                              "beginLine" : 15,
                                                              "beginColumn" : 4,
                                                              "endLine" : 15,
                                                              "endColumn" : 28,
                                                              "offset" : 565,
                                                              "length" : 24
                                                            }
                                                          }
                                                        },
                                                        "propertyValues" : [
                                                          {
                                                            "type" : "ValueProp",
                                                            "value" : "Patient is harmed"
                                                          }
                                                        ],
                                                        "appliesTo" : [
                                                        ]
                                                      },
                                                      {
                                                        "type" : "Property",
                                                        "name" : {
                                                          "type" : "Name",
                                                          "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::Accident.Severity"],
                                                          "pos" : {
                                                            "type" : "Some",
                                                            "value" : {
                                                              "type" : "Position",
                                                              "uriOpt" : {
                                                                "type" : "Some",
                                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                              },
                                                              "beginLine" : 16,
                                                              "beginColumn" : 4,
                                                              "endLine" : 16,
                                                              "endColumn" : 34,
                                                              "offset" : 593,
                                                              "length" : 30
                                                            }
                                                          }
                                                        },
                                                        "propertyValues" : [
                                                          {
                                                            "type" : "RecordProp",
                                                            "properties" : [
                                                              {
                                                                "type" : "Property",
                                                                "name" : {
                                                                  "type" : "Name",
                                                                  "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::AccidentLevel.ID"],
                                                                  "pos" : {
                                                                    "type" : "Some",
                                                                    "value" : {
                                                                      "type" : "Position",
                                                                      "uriOpt" : {
                                                                        "type" : "Some",
                                                                        "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                                      },
                                                                      "beginLine" : 20,
                                                                      "beginColumn" : 3,
                                                                      "endLine" : 20,
                                                                      "endColumn" : 18,
                                                                      "offset" : 709,
                                                                      "length" : 15
                                                                    }
                                                                  }
                                                                },
                                                                "propertyValues" : [
                                                                  {
                                                                    "type" : "ValueProp",
                                                                    "value" : "AL1"
                                                                  }
                                                                ],
                                                                "appliesTo" : [
                                                                ]
                                                              },
                                                              {
                                                                "type" : "Property",
                                                                "name" : {
                                                                  "type" : "Name",
                                                                  "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::AccidentLevel.Section"],
                                                                  "pos" : {
                                                                    "type" : "Some",
                                                                    "value" : {
                                                                      "type" : "Position",
                                                                      "uriOpt" : {
                                                                        "type" : "Some",
                                                                        "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                                      },
                                                                      "beginLine" : 21,
                                                                      "beginColumn" : 3,
                                                                      "endLine" : 21,
                                                                      "endColumn" : 23,
                                                                      "offset" : 727,
                                                                      "length" : 20
                                                                    }
                                                                  }
                                                                },
                                                                "propertyValues" : [
                                                                  {
                                                                    "type" : "ValueProp",
                                                                    "value" : "1"
                                                                  }
                                                                ],
                                                                "appliesTo" : [
                                                                ]
                                                              },
                                                              {
                                                                "type" : "Property",
                                                                "name" : {
                                                                  "type" : "Name",
                                                                  "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::AccidentLevel.Level"],
                                                                  "pos" : {
                                                                    "type" : "Some",
                                                                    "value" : {
                                                                      "type" : "Position",
                                                                      "uriOpt" : {
                                                                        "type" : "Some",
                                                                        "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                                      },
                                                                      "beginLine" : 22,
                                                                      "beginColumn" : 3,
                                                                      "endLine" : 22,
                                                                      "endColumn" : 22,
                                                                      "offset" : 750,
                                                                      "length" : 19
                                                                    }
                                                                  }
                                                                },
                                                                "propertyValues" : [
                                                                  {
                                                                    "type" : "UnitProp",
                                                                    "value" : "1.0",
                                                                    "unit" : {
                                                                      "type" : "None"
                                                                    }
                                                                  }
                                                                ],
                                                                "appliesTo" : [
                                                                ]
                                                              },
                                                              {
                                                                "type" : "Property",
                                                                "name" : {
                                                                  "type" : "Name",
                                                                  "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::AccidentLevel.Description"],
                                                                  "pos" : {
                                                                    "type" : "Some",
                                                                    "value" : {
                                                                      "type" : "Position",
                                                                      "uriOpt" : {
                                                                        "type" : "Some",
                                                                        "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                                      },
                                                                      "beginLine" : 23,
                                                                      "beginColumn" : 3,
                                                                      "endLine" : 23,
                                                                      "endColumn" : 27,
                                                                      "offset" : 772,
                                                                      "length" : 24
                                                                    }
                                                                  }
                                                                },
                                                                "propertyValues" : [
                                                                  {
                                                                    "type" : "ValueProp",
                                                                    "value" : "Loss of life or serious injury to the patient"
                                                                  }
                                                                ],
                                                                "appliesTo" : [
                                                                ]
                                                              }
                                                            ]
                                                          }
                                                        ],
                                                        "appliesTo" : [
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ],
                                                "appliesTo" : [
                                                ]
                                              },
                                              {
                                                "type" : "Property",
                                                "name" : {
                                                  "type" : "Name",
                                                  "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "null.environment_condition"],
                                                  "pos" : {
                                                    "type" : "Some",
                                                    "value" : {
                                                      "type" : "Position",
                                                      "uriOpt" : {
                                                        "type" : "Some",
                                                        "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                      },
                                                      "beginLine" : 33,
                                                      "beginColumn" : 4,
                                                      "endLine" : 33,
                                                      "endColumn" : 55,
                                                      "offset" : 1035,
                                                      "length" : 51
                                                    }
                                                  }
                                                },
                                                "propertyValues" : [
                                                  {
                                                    "type" : "RecordProp",
                                                    "properties" : [
                                                      {
                                                        "type" : "Property",
                                                        "name" : {
                                                          "type" : "Name",
                                                          "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::EnvironmentCondition.ID"],
                                                          "pos" : {
                                                            "type" : "Some",
                                                            "value" : {
                                                              "type" : "Position",
                                                              "uriOpt" : {
                                                                "type" : "Some",
                                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                              },
                                                              "beginLine" : 54,
                                                              "beginColumn" : 3,
                                                              "endLine" : 54,
                                                              "endColumn" : 18,
                                                              "offset" : 1532,
                                                              "length" : 15
                                                            }
                                                          }
                                                        },
                                                        "propertyValues" : [
                                                          {
                                                            "type" : "ValueProp",
                                                            "value" : "EC1"
                                                          }
                                                        ],
                                                        "appliesTo" : [
                                                        ]
                                                      },
                                                      {
                                                        "type" : "Property",
                                                        "name" : {
                                                          "type" : "Name",
                                                          "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "STPA::EnvironmentCondition.Description"],
                                                          "pos" : {
                                                            "type" : "Some",
                                                            "value" : {
                                                              "type" : "Position",
                                                              "uriOpt" : {
                                                                "type" : "Some",
                                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                              },
                                                              "beginLine" : 55,
                                                              "beginColumn" : 3,
                                                              "endLine" : 55,
                                                              "endColumn" : 27,
                                                              "offset" : 1550,
                                                              "length" : 24
                                                            }
                                                          }
                                                        },
                                                        "propertyValues" : [
                                                          {
                                                            "type" : "ValueProp",
                                                            "value" : "Patient's respiratory health is unstable"
                                                          }
                                                        ],
                                                        "appliesTo" : [
                                                        ]
                                                      }
                                                    ]
                                                  }
                                                ],
                                                "appliesTo" : [
                                                ]
                                              }
                                            ]
                                          }
                                        ],
                                        "appliesTo" : [
                                        ]
                                      }
                                    ]
                                  }
                                ],
                                "appliesTo" : [
                                  {
                                    "type" : "Emv2ElementRef",
                                    "kind" : {
                                      "type" : "Emv2ElementKind",
                                      "value" : "Sink"
                                    },
                                    "name" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance.patient", "PatientAbsorbsDrug"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/PCA_Patient.aadl"
                                          },
                                          "beginLine" : 34,
                                          "beginColumn" : 5,
                                          "endLine" : 34,
                                          "endColumn" : 60,
                                          "offset" : 774,
                                          "length" : 55
                                        }
                                      }
                                    },
                                    "errorTypes" : [
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "type" : "Component",
                      "identifier" : {
                        "type" : "Name",
                        "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                            },
                            "beginLine" : 18,
                            "beginColumn" : 4,
                            "endLine" : 18,
                            "endColumn" : 47,
                            "offset" : 229,
                            "length" : 43
                          }
                        }
                      },
                      "category" : {
                        "type" : "ComponentCategory",
                        "value" : "Device"
                      },
                      "classifier" : {
                        "type" : "Some",
                        "value" : {
                          "type" : "Classifier",
                          "name" : "PulseOx::PulseOximeter.imp"
                        }
                      },
                      "features" : [
                        {
                          "type" : "FeatureEnd",
                          "identifier" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "RefractedLight"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PulseOx.aadl"
                                },
                                "beginLine" : 7,
                                "beginColumn" : 4,
                                "endLine" : 7,
                                "endColumn" : 31,
                                "offset" : 72,
                                "length" : 27
                              }
                            }
                          },
                          "direction" : {
                            "type" : "Direction",
                            "value" : "In"
                          },
                          "category" : {
                            "type" : "FeatureCategory",
                            "value" : "AbstractFeature"
                          },
                          "classifier" : {
                            "type" : "None"
                          },
                          "properties" : [
                          ]
                        },
                        {
                          "type" : "FeatureEnd",
                          "identifier" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "SpO2"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PulseOx.aadl"
                                },
                                "beginLine" : 8,
                                "beginColumn" : 4,
                                "endLine" : 8,
                                "endColumn" : 30,
                                "offset" : 103,
                                "length" : 26
                              }
                            }
                          },
                          "direction" : {
                            "type" : "Direction",
                            "value" : "Out"
                          },
                          "category" : {
                            "type" : "FeatureCategory",
                            "value" : "EventDataPort"
                          },
                          "classifier" : {
                            "type" : "None"
                          },
                          "properties" : [
                          ]
                        }
                      ],
                      "subComponents" : [
                      ],
                      "connections" : [
                      ],
                      "connectionInstances" : [
                      ],
                      "properties" : [
                        {
                          "type" : "Property",
                          "name" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "STPA::ComponentRoles"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                },
                                "beginLine" : 76,
                                "beginColumn" : 2,
                                "endLine" : 76,
                                "endColumn" : 210,
                                "offset" : 1936,
                                "length" : 208
                              }
                            }
                          },
                          "propertyValues" : [
                            {
                              "type" : "RecordProp",
                              "properties" : [
                                {
                                  "type" : "Property",
                                  "name" : {
                                    "type" : "Name",
                                    "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "STPA::Component.Description"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                        },
                                        "beginLine" : 71,
                                        "beginColumn" : 3,
                                        "endLine" : 71,
                                        "endColumn" : 27,
                                        "offset" : 1848,
                                        "length" : 24
                                      }
                                    }
                                  },
                                  "propertyValues" : [
                                    {
                                      "type" : "ValueProp",
                                      "value" : "Pulse ox senses patient's vitals'"
                                    }
                                  ],
                                  "appliesTo" : [
                                  ]
                                },
                                {
                                  "type" : "Property",
                                  "name" : {
                                    "type" : "Name",
                                    "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "STPA::Component.ControlLoop"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                        },
                                        "beginLine" : 72,
                                        "beginColumn" : 3,
                                        "endLine" : 72,
                                        "endColumn" : 35,
                                        "offset" : 1875,
                                        "length" : 32
                                      }
                                    }
                                  },
                                  "propertyValues" : [
                                    {
                                      "type" : "RecordProp",
                                      "properties" : [
                                        {
                                          "type" : "Property",
                                          "name" : {
                                            "type" : "Name",
                                            "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "STPA::ControlLoop.ID"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                },
                                                "beginLine" : 66,
                                                "beginColumn" : 3,
                                                "endLine" : 66,
                                                "endColumn" : 18,
                                                "offset" : 1771,
                                                "length" : 15
                                              }
                                            }
                                          },
                                          "propertyValues" : [
                                            {
                                              "type" : "ValueProp",
                                              "value" : "CL1"
                                            }
                                          ],
                                          "appliesTo" : [
                                          ]
                                        },
                                        {
                                          "type" : "Property",
                                          "name" : {
                                            "type" : "Name",
                                            "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "STPA::ControlLoop.Description"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                },
                                                "beginLine" : 67,
                                                "beginColumn" : 3,
                                                "endLine" : 67,
                                                "endColumn" : 27,
                                                "offset" : 1789,
                                                "length" : 24
                                              }
                                            }
                                          },
                                          "propertyValues" : [
                                            {
                                              "type" : "ValueProp",
                                              "value" : "PCA safety shutoff control structure"
                                            }
                                          ],
                                          "appliesTo" : [
                                          ]
                                        }
                                      ]
                                    }
                                  ],
                                  "appliesTo" : [
                                  ]
                                },
                                {
                                  "type" : "Property",
                                  "name" : {
                                    "type" : "Name",
                                    "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "STPA::Component.Role"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                        },
                                        "beginLine" : 73,
                                        "beginColumn" : 3,
                                        "endLine" : 73,
                                        "endColumn" : 21,
                                        "offset" : 1910,
                                        "length" : 18
                                      }
                                    }
                                  },
                                  "propertyValues" : [
                                    {
                                      "type" : "ValueProp",
                                      "value" : "Sensor"
                                    }
                                  ],
                                  "appliesTo" : [
                                  ]
                                }
                              ]
                            }
                          ],
                          "appliesTo" : [
                          ]
                        }
                      ],
                      "flows" : [
                        {
                          "type" : "Flow",
                          "name" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "spo2_flow"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PulseOx.aadl"
                                },
                                "beginLine" : 10,
                                "beginColumn" : 4,
                                "endLine" : 10,
                                "endColumn" : 32,
                                "offset" : 141,
                                "length" : 28
                              }
                            }
                          },
                          "kind" : {
                            "type" : "FlowKind",
                            "value" : "Source"
                          },
                          "source" : {
                            "type" : "None"
                          },
                          "sink" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "FeatureEnd",
                              "identifier" : {
                                "type" : "Name",
                                "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "spo2_flow", "SpO2"],
                                "pos" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Position",
                                    "uriOpt" : {
                                      "type" : "Some",
                                      "value" : "Simple_PCA_Shutoff\/packages\/PulseOx.aadl"
                                    },
                                    "beginLine" : 8,
                                    "beginColumn" : 4,
                                    "endLine" : 8,
                                    "endColumn" : 30,
                                    "offset" : 103,
                                    "length" : 26
                                  }
                                }
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "Out"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "EventDataPort"
                              },
                              "classifier" : {
                                "type" : "None"
                              },
                              "properties" : [
                              ]
                            }
                          }
                        }
                      ],
                      "modes" : [
                      ],
                      "annexes" : [
                        {
                          "type" : "Annex",
                          "name" : "Emv2",
                          "clause" : {
                            "type" : "Emv2Clause",
                            "libraries" : [
                              {
                                "type" : "Name",
                                "name" : ["Simple_PCA_Errors"],
                                "pos" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Position",
                                    "uriOpt" : {
                                      "type" : "Some",
                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                    },
                                    "beginLine" : 5,
                                    "beginColumn" : 3,
                                    "endLine" : 56,
                                    "endColumn" : 15,
                                    "offset" : 52,
                                    "length" : 1039
                                  }
                                }
                              },
                              {
                                "type" : "Name",
                                "name" : ["Simple_PCA_Errors.PulseOxStatus"],
                                "pos" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Position",
                                    "uriOpt" : {
                                      "type" : "Some",
                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                    },
                                    "beginLine" : 39,
                                    "beginColumn" : 3,
                                    "endLine" : 45,
                                    "endColumn" : 16,
                                    "offset" : 711,
                                    "length" : 146
                                  }
                                }
                              }
                            ],
                            "propagations" : [
                              {
                                "type" : "Emv2Propagation",
                                "direction" : {
                                  "type" : "PropagationDirection",
                                  "value" : "Out"
                                },
                                "propagationPoint" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "SpO2"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "Simple_PCA_Shutoff\/packages\/PulseOx.aadl"
                                      },
                                      "beginLine" : 8,
                                      "beginColumn" : 4,
                                      "endLine" : 8,
                                      "endColumn" : 30,
                                      "offset" : 103,
                                      "length" : 26
                                    }
                                  }
                                },
                                "errorTokens" : [
                                  {
                                    "type" : "Name",
                                    "name" : ["Simple_PCA_Errors", "SpO2ValueHigh"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                        },
                                        "beginLine" : 16,
                                        "beginColumn" : 5,
                                        "endLine" : 16,
                                        "endColumn" : 26,
                                        "offset" : 287,
                                        "length" : 21
                                      }
                                    }
                                  },
                                  {
                                    "type" : "Name",
                                    "name" : ["Simple_PCA_Errors", "SpO2ValueLow"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                        },
                                        "beginLine" : 17,
                                        "beginColumn" : 4,
                                        "endLine" : 17,
                                        "endColumn" : 24,
                                        "offset" : 312,
                                        "length" : 20
                                      }
                                    }
                                  },
                                  {
                                    "type" : "Name",
                                    "name" : ["Simple_PCA_Errors", "NoSpO2"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                        },
                                        "beginLine" : 20,
                                        "beginColumn" : 5,
                                        "endLine" : 20,
                                        "endColumn" : 19,
                                        "offset" : 378,
                                        "length" : 14
                                      }
                                    }
                                  }
                                ]
                              }
                            ],
                            "flows" : [
                              {
                                "type" : "Emv2Flow",
                                "identifier" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "SpO2UnDetectableHighValueFlowSource"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "Simple_PCA_Shutoff\/packages\/PulseOx.aadl"
                                      },
                                      "beginLine" : 17,
                                      "beginColumn" : 5,
                                      "endLine" : 17,
                                      "endColumn" : 98,
                                      "offset" : 323,
                                      "length" : 93
                                    }
                                  }
                                },
                                "kind" : {
                                  "type" : "FlowKind",
                                  "value" : "Source"
                                },
                                "sourcePropagation" : {
                                  "type" : "None"
                                },
                                "sinkPropagation" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Emv2Propagation",
                                    "direction" : {
                                      "type" : "PropagationDirection",
                                      "value" : "Out"
                                    },
                                    "propagationPoint" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "SpO2"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/PulseOx.aadl"
                                          },
                                          "beginLine" : 15,
                                          "beginColumn" : 5,
                                          "endLine" : 15,
                                          "endColumn" : 65,
                                          "offset" : 249,
                                          "length" : 60
                                        }
                                      }
                                    },
                                    "errorTokens" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "SpO2ValueHigh"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 16,
                                            "beginColumn" : 5,
                                            "endLine" : 16,
                                            "endColumn" : 26,
                                            "offset" : 287,
                                            "length" : 21
                                          }
                                        }
                                      },
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "SpO2ValueLow"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 17,
                                            "beginColumn" : 4,
                                            "endLine" : 17,
                                            "endColumn" : 24,
                                            "offset" : 312,
                                            "length" : 20
                                          }
                                        }
                                      },
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "NoSpO2"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 20,
                                            "beginColumn" : 5,
                                            "endLine" : 20,
                                            "endColumn" : 19,
                                            "offset" : 378,
                                            "length" : 14
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              }
                            ],
                            "componentBehavior" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Emv2BehaviorSection",
                                "events" : [
                                  {
                                    "type" : "ErrorEvent",
                                    "id" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "InternalFailure"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                          },
                                          "beginLine" : 41,
                                          "beginColumn" : 5,
                                          "endLine" : 41,
                                          "endColumn" : 34,
                                          "offset" : 754,
                                          "length" : 29
                                        }
                                      }
                                    }
                                  }
                                ],
                                "transitions" : [
                                  {
                                    "type" : "ErrorTransition",
                                    "id" : {
                                      "type" : "None"
                                    },
                                    "sourceState" : {
                                      "type" : "Name",
                                      "name" : ["Simple_PCA_Errors", "PulseOxStatus", "Normal"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                          },
                                          "beginLine" : 43,
                                          "beginColumn" : 5,
                                          "endLine" : 43,
                                          "endColumn" : 28,
                                          "offset" : 798,
                                          "length" : 23
                                        }
                                      }
                                    },
                                    "condition" : {
                                      "type" : "ConditionTrigger",
                                      "events" : [
                                        {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "InternalFailure"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                              },
                                              "beginLine" : 41,
                                              "beginColumn" : 5,
                                              "endLine" : 41,
                                              "endColumn" : 34,
                                              "offset" : 754,
                                              "length" : 29
                                            }
                                          }
                                        }
                                      ],
                                      "propagationPoints" : [
                                      ]
                                    },
                                    "targetState" : {
                                      "type" : "Name",
                                      "name" : ["Simple_PCA_Errors", "PulseOxStatus", "Failed"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                          },
                                          "beginLine" : 44,
                                          "beginColumn" : 5,
                                          "endLine" : 44,
                                          "endColumn" : 20,
                                          "offset" : 826,
                                          "length" : 15
                                        }
                                      }
                                    }
                                  }
                                ],
                                "propagations" : [
                                  {
                                    "type" : "ErrorPropagation",
                                    "id" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Name",
                                        "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "HighReading_to_HighSpO2"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/packages\/PulseOx.aadl"
                                            },
                                            "beginLine" : 38,
                                            "beginColumn" : 5,
                                            "endLine" : 38,
                                            "endColumn" : 78,
                                            "offset" : 880,
                                            "length" : 73
                                          }
                                        }
                                      }
                                    },
                                    "source" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Normal"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 43,
                                            "beginColumn" : 5,
                                            "endLine" : 43,
                                            "endColumn" : 28,
                                            "offset" : 798,
                                            "length" : 23
                                          }
                                        }
                                      }
                                    ],
                                    "condition" : {
                                      "type" : "None"
                                    },
                                    "target" : [
                                      {
                                        "type" : "Emv2Propagation",
                                        "direction" : {
                                          "type" : "PropagationDirection",
                                          "value" : "Out"
                                        },
                                        "propagationPoint" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "SpO2"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "Simple_PCA_Shutoff\/packages\/PulseOx.aadl"
                                              },
                                              "beginLine" : 8,
                                              "beginColumn" : 4,
                                              "endLine" : 8,
                                              "endColumn" : 30,
                                              "offset" : 103,
                                              "length" : 26
                                            }
                                          }
                                        },
                                        "errorTokens" : [
                                          {
                                            "type" : "Name",
                                            "name" : ["Simple_PCA_Errors", "SpO2ValueHigh"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                },
                                                "beginLine" : 16,
                                                "beginColumn" : 5,
                                                "endLine" : 16,
                                                "endColumn" : 26,
                                                "offset" : 287,
                                                "length" : 21
                                              }
                                            }
                                          },
                                          {
                                            "type" : "Name",
                                            "name" : ["Simple_PCA_Errors", "SpO2ValueLow"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                },
                                                "beginLine" : 17,
                                                "beginColumn" : 4,
                                                "endLine" : 17,
                                                "endColumn" : 24,
                                                "offset" : 312,
                                                "length" : 20
                                              }
                                            }
                                          },
                                          {
                                            "type" : "Name",
                                            "name" : ["Simple_PCA_Errors", "NoSpO2"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                },
                                                "beginLine" : 20,
                                                "beginColumn" : 5,
                                                "endLine" : 20,
                                                "endColumn" : 19,
                                                "offset" : 378,
                                                "length" : 14
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "type" : "ErrorPropagation",
                                    "id" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Name",
                                        "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "Failed_HighSpO2"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/packages\/PulseOx.aadl"
                                            },
                                            "beginLine" : 39,
                                            "beginColumn" : 5,
                                            "endLine" : 39,
                                            "endColumn" : 49,
                                            "offset" : 958,
                                            "length" : 44
                                          }
                                        }
                                      }
                                    },
                                    "source" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Failed"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 44,
                                            "beginColumn" : 5,
                                            "endLine" : 44,
                                            "endColumn" : 20,
                                            "offset" : 826,
                                            "length" : 15
                                          }
                                        }
                                      }
                                    ],
                                    "condition" : {
                                      "type" : "None"
                                    },
                                    "target" : [
                                      {
                                        "type" : "Emv2Propagation",
                                        "direction" : {
                                          "type" : "PropagationDirection",
                                          "value" : "Out"
                                        },
                                        "propagationPoint" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "SpO2"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "Simple_PCA_Shutoff\/packages\/PulseOx.aadl"
                                              },
                                              "beginLine" : 8,
                                              "beginColumn" : 4,
                                              "endLine" : 8,
                                              "endColumn" : 30,
                                              "offset" : 103,
                                              "length" : 26
                                            }
                                          }
                                        },
                                        "errorTokens" : [
                                          {
                                            "type" : "Name",
                                            "name" : ["Simple_PCA_Errors", "SpO2ValueHigh"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                },
                                                "beginLine" : 16,
                                                "beginColumn" : 5,
                                                "endLine" : 16,
                                                "endColumn" : 26,
                                                "offset" : 287,
                                                "length" : 21
                                              }
                                            }
                                          },
                                          {
                                            "type" : "Name",
                                            "name" : ["Simple_PCA_Errors", "SpO2ValueLow"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                },
                                                "beginLine" : 17,
                                                "beginColumn" : 4,
                                                "endLine" : 17,
                                                "endColumn" : 24,
                                                "offset" : 312,
                                                "length" : 20
                                              }
                                            }
                                          },
                                          {
                                            "type" : "Name",
                                            "name" : ["Simple_PCA_Errors", "NoSpO2"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                },
                                                "beginLine" : 20,
                                                "beginColumn" : 5,
                                                "endLine" : 20,
                                                "endColumn" : 19,
                                                "offset" : 378,
                                                "length" : 14
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            },
                            "properties" : [
                              {
                                "type" : "Property",
                                "name" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "STPA::Hazards"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                      },
                                      "beginLine" : 7,
                                      "beginColumn" : 2,
                                      "endLine" : 7,
                                      "endColumn" : 137,
                                      "offset" : 166,
                                      "length" : 135
                                    }
                                  }
                                },
                                "propertyValues" : [
                                  {
                                    "type" : "RecordProp",
                                    "properties" : [
                                      {
                                        "type" : "Property",
                                        "name" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "STPA::Hazard.ID"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                              },
                                              "beginLine" : 43,
                                              "beginColumn" : 3,
                                              "endLine" : 43,
                                              "endColumn" : 18,
                                              "offset" : 1209,
                                              "length" : 15
                                            }
                                          }
                                        },
                                        "propertyValues" : [
                                          {
                                            "type" : "ValueProp",
                                            "value" : "Haz1"
                                          }
                                        ],
                                        "appliesTo" : [
                                        ]
                                      },
                                      {
                                        "type" : "Property",
                                        "name" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "STPA::Hazard.Description"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                              },
                                              "beginLine" : 45,
                                              "beginColumn" : 3,
                                              "endLine" : 45,
                                              "endColumn" : 27,
                                              "offset" : 1271,
                                              "length" : 24
                                            }
                                          }
                                        },
                                        "propertyValues" : [
                                          {
                                            "type" : "ValueProp",
                                            "value" : "Measured SpO2 value higher than the actual value"
                                          }
                                        ],
                                        "appliesTo" : [
                                        ]
                                      },
                                      {
                                        "type" : "Property",
                                        "name" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "STPA::Hazard.ViolatingConstraints"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                              },
                                              "beginLine" : 47,
                                              "beginColumn" : 3,
                                              "endLine" : 47,
                                              "endColumn" : 56,
                                              "offset" : 1331,
                                              "length" : 53
                                            }
                                          }
                                        },
                                        "propertyValues" : [
                                          {
                                            "type" : "RecordProp",
                                            "properties" : [
                                              {
                                                "type" : "Property",
                                                "name" : {
                                                  "type" : "Name",
                                                  "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "STPA::SafetyConstraint.ID"],
                                                  "pos" : {
                                                    "type" : "Some",
                                                    "value" : {
                                                      "type" : "Position",
                                                      "uriOpt" : {
                                                        "type" : "Some",
                                                        "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                      },
                                                      "beginLine" : 38,
                                                      "beginColumn" : 3,
                                                      "endLine" : 38,
                                                      "endColumn" : 19,
                                                      "offset" : 1135,
                                                      "length" : 16
                                                    }
                                                  }
                                                },
                                                "propertyValues" : [
                                                  {
                                                    "type" : "ValueProp",
                                                    "value" : "SC2"
                                                  }
                                                ],
                                                "appliesTo" : [
                                                ]
                                              },
                                              {
                                                "type" : "Property",
                                                "name" : {
                                                  "type" : "Name",
                                                  "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "STPA::SafetyConstraint.Constraint"],
                                                  "pos" : {
                                                    "type" : "Some",
                                                    "value" : {
                                                      "type" : "Position",
                                                      "uriOpt" : {
                                                        "type" : "Some",
                                                        "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                      },
                                                      "beginLine" : 39,
                                                      "beginColumn" : 3,
                                                      "endLine" : 39,
                                                      "endColumn" : 26,
                                                      "offset" : 1154,
                                                      "length" : 23
                                                    }
                                                  }
                                                },
                                                "propertyValues" : [
                                                  {
                                                    "type" : "ValueProp",
                                                    "value" : "measured SpO2 represents patient's blood oxygen saturation level"
                                                  }
                                                ],
                                                "appliesTo" : [
                                                ]
                                              }
                                            ]
                                          }
                                        ],
                                        "appliesTo" : [
                                        ]
                                      }
                                    ]
                                  }
                                ],
                                "appliesTo" : [
                                  {
                                    "type" : "Emv2ElementRef",
                                    "kind" : {
                                      "type" : "Emv2ElementKind",
                                      "value" : "Propagation"
                                    },
                                    "name" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance.pulseOx", "SpO2"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/PulseOx.aadl"
                                          },
                                          "beginLine" : 15,
                                          "beginColumn" : 5,
                                          "endLine" : 15,
                                          "endColumn" : 65,
                                          "offset" : 249,
                                          "length" : 60
                                        }
                                      }
                                    },
                                    "errorTypes" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "SpO2ValueHigh"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 16,
                                            "beginColumn" : 5,
                                            "endLine" : 16,
                                            "endColumn" : 26,
                                            "offset" : 287,
                                            "length" : 21
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type" : "Property",
                                "name" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "STPA::Hazards"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                      },
                                      "beginLine" : 7,
                                      "beginColumn" : 2,
                                      "endLine" : 7,
                                      "endColumn" : 137,
                                      "offset" : 166,
                                      "length" : 135
                                    }
                                  }
                                },
                                "propertyValues" : [
                                  {
                                    "type" : "RecordProp",
                                    "properties" : [
                                      {
                                        "type" : "Property",
                                        "name" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "STPA::Hazard.ID"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                              },
                                              "beginLine" : 43,
                                              "beginColumn" : 3,
                                              "endLine" : 43,
                                              "endColumn" : 18,
                                              "offset" : 1209,
                                              "length" : 15
                                            }
                                          }
                                        },
                                        "propertyValues" : [
                                          {
                                            "type" : "ValueProp",
                                            "value" : "Haz2"
                                          }
                                        ],
                                        "appliesTo" : [
                                        ]
                                      },
                                      {
                                        "type" : "Property",
                                        "name" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "STPA::Hazard.Description"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                              },
                                              "beginLine" : 45,
                                              "beginColumn" : 3,
                                              "endLine" : 45,
                                              "endColumn" : 27,
                                              "offset" : 1271,
                                              "length" : 24
                                            }
                                          }
                                        },
                                        "propertyValues" : [
                                          {
                                            "type" : "ValueProp",
                                            "value" : "Measured SpO2 value lower than the actual value"
                                          }
                                        ],
                                        "appliesTo" : [
                                        ]
                                      }
                                    ]
                                  }
                                ],
                                "appliesTo" : [
                                  {
                                    "type" : "Emv2ElementRef",
                                    "kind" : {
                                      "type" : "Emv2ElementKind",
                                      "value" : "Propagation"
                                    },
                                    "name" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance.pulseOx", "SpO2"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/PulseOx.aadl"
                                          },
                                          "beginLine" : 15,
                                          "beginColumn" : 5,
                                          "endLine" : 15,
                                          "endColumn" : 65,
                                          "offset" : 249,
                                          "length" : 60
                                        }
                                      }
                                    },
                                    "errorTypes" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "SpO2ValueLow"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 17,
                                            "beginColumn" : 4,
                                            "endLine" : 17,
                                            "endColumn" : 24,
                                            "offset" : 312,
                                            "length" : 20
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type" : "Property",
                                "name" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "STPA::Hazards"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                      },
                                      "beginLine" : 7,
                                      "beginColumn" : 2,
                                      "endLine" : 7,
                                      "endColumn" : 137,
                                      "offset" : 166,
                                      "length" : 135
                                    }
                                  }
                                },
                                "propertyValues" : [
                                  {
                                    "type" : "RecordProp",
                                    "properties" : [
                                      {
                                        "type" : "Property",
                                        "name" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "STPA::Hazard.ID"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                              },
                                              "beginLine" : 43,
                                              "beginColumn" : 3,
                                              "endLine" : 43,
                                              "endColumn" : 18,
                                              "offset" : 1209,
                                              "length" : 15
                                            }
                                          }
                                        },
                                        "propertyValues" : [
                                          {
                                            "type" : "ValueProp",
                                            "value" : "Haz3"
                                          }
                                        ],
                                        "appliesTo" : [
                                        ]
                                      },
                                      {
                                        "type" : "Property",
                                        "name" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "STPA::Hazard.Description"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                              },
                                              "beginLine" : 45,
                                              "beginColumn" : 3,
                                              "endLine" : 45,
                                              "endColumn" : 27,
                                              "offset" : 1271,
                                              "length" : 24
                                            }
                                          }
                                        },
                                        "propertyValues" : [
                                          {
                                            "type" : "ValueProp",
                                            "value" : "PulseOx failed to produce SpO2 value"
                                          }
                                        ],
                                        "appliesTo" : [
                                        ]
                                      }
                                    ]
                                  }
                                ],
                                "appliesTo" : [
                                  {
                                    "type" : "Emv2ElementRef",
                                    "kind" : {
                                      "type" : "Emv2ElementKind",
                                      "value" : "Propagation"
                                    },
                                    "name" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance.pulseOx", "SpO2"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/PulseOx.aadl"
                                          },
                                          "beginLine" : 15,
                                          "beginColumn" : 5,
                                          "endLine" : 15,
                                          "endColumn" : 65,
                                          "offset" : 249,
                                          "length" : 60
                                        }
                                      }
                                    },
                                    "errorTypes" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "NoSpO2"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 20,
                                            "beginColumn" : 5,
                                            "endLine" : 20,
                                            "endColumn" : 19,
                                            "offset" : 378,
                                            "length" : 14
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "type" : "Component",
                      "identifier" : {
                        "type" : "Name",
                        "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                            },
                            "beginLine" : 20,
                            "beginColumn" : 4,
                            "endLine" : 20,
                            "endColumn" : 38,
                            "offset" : 326,
                            "length" : 34
                          }
                        }
                      },
                      "category" : {
                        "type" : "ComponentCategory",
                        "value" : "Device"
                      },
                      "classifier" : {
                        "type" : "Some",
                        "value" : {
                          "type" : "Classifier",
                          "name" : "PCAPump::Pump.imp"
                        }
                      },
                      "features" : [
                        {
                          "type" : "FeatureEnd",
                          "identifier" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "DrugFlow"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                },
                                "beginLine" : 8,
                                "beginColumn" : 4,
                                "endLine" : 8,
                                "endColumn" : 26,
                                "offset" : 99,
                                "length" : 22
                              }
                            }
                          },
                          "direction" : {
                            "type" : "Direction",
                            "value" : "Out"
                          },
                          "category" : {
                            "type" : "FeatureCategory",
                            "value" : "AbstractFeature"
                          },
                          "classifier" : {
                            "type" : "None"
                          },
                          "properties" : [
                          ]
                        },
                        {
                          "type" : "FeatureEnd",
                          "identifier" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "TicketInput"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                },
                                "beginLine" : 7,
                                "beginColumn" : 4,
                                "endLine" : 7,
                                "endColumn" : 36,
                                "offset" : 63,
                                "length" : 32
                              }
                            }
                          },
                          "direction" : {
                            "type" : "Direction",
                            "value" : "In"
                          },
                          "category" : {
                            "type" : "FeatureCategory",
                            "value" : "EventDataPort"
                          },
                          "classifier" : {
                            "type" : "None"
                          },
                          "properties" : [
                          ]
                        }
                      ],
                      "subComponents" : [
                      ],
                      "connections" : [
                      ],
                      "connectionInstances" : [
                      ],
                      "properties" : [
                        {
                          "type" : "Property",
                          "name" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "STPA::ComponentRoles"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                },
                                "beginLine" : 76,
                                "beginColumn" : 2,
                                "endLine" : 76,
                                "endColumn" : 210,
                                "offset" : 1936,
                                "length" : 208
                              }
                            }
                          },
                          "propertyValues" : [
                            {
                              "type" : "RecordProp",
                              "properties" : [
                                {
                                  "type" : "Property",
                                  "name" : {
                                    "type" : "Name",
                                    "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "STPA::Component.Description"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                        },
                                        "beginLine" : 71,
                                        "beginColumn" : 3,
                                        "endLine" : 71,
                                        "endColumn" : 27,
                                        "offset" : 1848,
                                        "length" : 24
                                      }
                                    }
                                  },
                                  "propertyValues" : [
                                    {
                                      "type" : "ValueProp",
                                      "value" : "pump infuse the drug into the patient"
                                    }
                                  ],
                                  "appliesTo" : [
                                  ]
                                },
                                {
                                  "type" : "Property",
                                  "name" : {
                                    "type" : "Name",
                                    "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "STPA::Component.ControlLoop"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                        },
                                        "beginLine" : 72,
                                        "beginColumn" : 3,
                                        "endLine" : 72,
                                        "endColumn" : 35,
                                        "offset" : 1875,
                                        "length" : 32
                                      }
                                    }
                                  },
                                  "propertyValues" : [
                                    {
                                      "type" : "RecordProp",
                                      "properties" : [
                                        {
                                          "type" : "Property",
                                          "name" : {
                                            "type" : "Name",
                                            "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "STPA::ControlLoop.ID"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                },
                                                "beginLine" : 66,
                                                "beginColumn" : 3,
                                                "endLine" : 66,
                                                "endColumn" : 18,
                                                "offset" : 1771,
                                                "length" : 15
                                              }
                                            }
                                          },
                                          "propertyValues" : [
                                            {
                                              "type" : "ValueProp",
                                              "value" : "CL1"
                                            }
                                          ],
                                          "appliesTo" : [
                                          ]
                                        },
                                        {
                                          "type" : "Property",
                                          "name" : {
                                            "type" : "Name",
                                            "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "STPA::ControlLoop.Description"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                },
                                                "beginLine" : 67,
                                                "beginColumn" : 3,
                                                "endLine" : 67,
                                                "endColumn" : 27,
                                                "offset" : 1789,
                                                "length" : 24
                                              }
                                            }
                                          },
                                          "propertyValues" : [
                                            {
                                              "type" : "ValueProp",
                                              "value" : "PCA safety shutoff control structure"
                                            }
                                          ],
                                          "appliesTo" : [
                                          ]
                                        }
                                      ]
                                    }
                                  ],
                                  "appliesTo" : [
                                  ]
                                },
                                {
                                  "type" : "Property",
                                  "name" : {
                                    "type" : "Name",
                                    "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "STPA::Component.Role"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                        },
                                        "beginLine" : 73,
                                        "beginColumn" : 3,
                                        "endLine" : 73,
                                        "endColumn" : 21,
                                        "offset" : 1910,
                                        "length" : 18
                                      }
                                    }
                                  },
                                  "propertyValues" : [
                                    {
                                      "type" : "ValueProp",
                                      "value" : "Actuator"
                                    }
                                  ],
                                  "appliesTo" : [
                                  ]
                                }
                              ]
                            }
                          ],
                          "appliesTo" : [
                          ]
                        }
                      ],
                      "flows" : [
                      ],
                      "modes" : [
                      ],
                      "annexes" : [
                        {
                          "type" : "Annex",
                          "name" : "Emv2",
                          "clause" : {
                            "type" : "Emv2Clause",
                            "libraries" : [
                              {
                                "type" : "Name",
                                "name" : ["Simple_PCA_Errors"],
                                "pos" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Position",
                                    "uriOpt" : {
                                      "type" : "Some",
                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                    },
                                    "beginLine" : 5,
                                    "beginColumn" : 3,
                                    "endLine" : 56,
                                    "endColumn" : 15,
                                    "offset" : 52,
                                    "length" : 1039
                                  }
                                }
                              },
                              {
                                "type" : "Name",
                                "name" : ["Simple_PCA_Errors.PumpStatus"],
                                "pos" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Position",
                                    "uriOpt" : {
                                      "type" : "Some",
                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                    },
                                    "beginLine" : 47,
                                    "beginColumn" : 3,
                                    "endLine" : 56,
                                    "endColumn" : 15,
                                    "offset" : 863,
                                    "length" : 228
                                  }
                                }
                              }
                            ],
                            "propagations" : [
                              {
                                "type" : "Emv2Propagation",
                                "direction" : {
                                  "type" : "PropagationDirection",
                                  "value" : "In"
                                },
                                "propagationPoint" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "TicketInput"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                      },
                                      "beginLine" : 7,
                                      "beginColumn" : 4,
                                      "endLine" : 7,
                                      "endColumn" : 36,
                                      "offset" : 63,
                                      "length" : 32
                                    }
                                  }
                                },
                                "errorTokens" : [
                                  {
                                    "type" : "Name",
                                    "name" : ["Simple_PCA_Errors", "TicketTooLong"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                        },
                                        "beginLine" : 9,
                                        "beginColumn" : 4,
                                        "endLine" : 9,
                                        "endColumn" : 25,
                                        "offset" : 134,
                                        "length" : 21
                                      }
                                    }
                                  },
                                  {
                                    "type" : "Name",
                                    "name" : ["Simple_PCA_Errors", "TicketTooShort"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                        },
                                        "beginLine" : 10,
                                        "beginColumn" : 4,
                                        "endLine" : 10,
                                        "endColumn" : 26,
                                        "offset" : 159,
                                        "length" : 22
                                      }
                                    }
                                  },
                                  {
                                    "type" : "Name",
                                    "name" : ["Simple_PCA_Errors", "NoTicket"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                        },
                                        "beginLine" : 11,
                                        "beginColumn" : 4,
                                        "endLine" : 11,
                                        "endColumn" : 20,
                                        "offset" : 185,
                                        "length" : 16
                                      }
                                    }
                                  },
                                  {
                                    "type" : "Name",
                                    "name" : ["Simple_PCA_Errors", "EarlyTicket"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                        },
                                        "beginLine" : 12,
                                        "beginColumn" : 4,
                                        "endLine" : 12,
                                        "endColumn" : 23,
                                        "offset" : 205,
                                        "length" : 19
                                      }
                                    }
                                  },
                                  {
                                    "type" : "Name",
                                    "name" : ["Simple_PCA_Errors", "LateTicket"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                        },
                                        "beginLine" : 13,
                                        "beginColumn" : 4,
                                        "endLine" : 13,
                                        "endColumn" : 23,
                                        "offset" : 228,
                                        "length" : 19
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "type" : "Emv2Propagation",
                                "direction" : {
                                  "type" : "PropagationDirection",
                                  "value" : "Out"
                                },
                                "propagationPoint" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "DrugFlow"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                      },
                                      "beginLine" : 8,
                                      "beginColumn" : 4,
                                      "endLine" : 8,
                                      "endColumn" : 26,
                                      "offset" : 99,
                                      "length" : 22
                                    }
                                  }
                                },
                                "errorTokens" : [
                                  {
                                    "type" : "Name",
                                    "name" : ["Simple_PCA_Errors", "TooMuchAnalgesic"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                        },
                                        "beginLine" : 6,
                                        "beginColumn" : 4,
                                        "endLine" : 6,
                                        "endColumn" : 28,
                                        "offset" : 67,
                                        "length" : 24
                                      }
                                    }
                                  }
                                ]
                              }
                            ],
                            "flows" : [
                              {
                                "type" : "Emv2Flow",
                                "identifier" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "LongTicketLeadsToOD"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                      },
                                      "beginLine" : 31,
                                      "beginColumn" : 5,
                                      "endLine" : 31,
                                      "endColumn" : 96,
                                      "offset" : 739,
                                      "length" : 91
                                    }
                                  }
                                },
                                "kind" : {
                                  "type" : "FlowKind",
                                  "value" : "Path"
                                },
                                "sourcePropagation" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Emv2Propagation",
                                    "direction" : {
                                      "type" : "PropagationDirection",
                                      "value" : "In"
                                    },
                                    "propagationPoint" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "TicketInput"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                          },
                                          "beginLine" : 31,
                                          "beginColumn" : 5,
                                          "endLine" : 31,
                                          "endColumn" : 96,
                                          "offset" : 739,
                                          "length" : 91
                                        }
                                      }
                                    },
                                    "errorTokens" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "TicketTooLong"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 9,
                                            "beginColumn" : 4,
                                            "endLine" : 9,
                                            "endColumn" : 25,
                                            "offset" : 134,
                                            "length" : 21
                                          }
                                        }
                                      }
                                    ]
                                  }
                                },
                                "sinkPropagation" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Emv2Propagation",
                                    "direction" : {
                                      "type" : "PropagationDirection",
                                      "value" : "Out"
                                    },
                                    "propagationPoint" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "DrugFlow"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                          },
                                          "beginLine" : 14,
                                          "beginColumn" : 5,
                                          "endLine" : 14,
                                          "endColumn" : 50,
                                          "offset" : 301,
                                          "length" : 45
                                        }
                                      }
                                    },
                                    "errorTokens" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "TooMuchAnalgesic"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 6,
                                            "beginColumn" : 4,
                                            "endLine" : 6,
                                            "endColumn" : 28,
                                            "offset" : 67,
                                            "length" : 24
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              },
                              {
                                "type" : "Emv2Flow",
                                "identifier" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "EarlyTicketLeadsToOD"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                      },
                                      "beginLine" : 32,
                                      "beginColumn" : 5,
                                      "endLine" : 32,
                                      "endColumn" : 95,
                                      "offset" : 835,
                                      "length" : 90
                                    }
                                  }
                                },
                                "kind" : {
                                  "type" : "FlowKind",
                                  "value" : "Path"
                                },
                                "sourcePropagation" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Emv2Propagation",
                                    "direction" : {
                                      "type" : "PropagationDirection",
                                      "value" : "In"
                                    },
                                    "propagationPoint" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "TicketInput"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                          },
                                          "beginLine" : 32,
                                          "beginColumn" : 5,
                                          "endLine" : 32,
                                          "endColumn" : 95,
                                          "offset" : 835,
                                          "length" : 90
                                        }
                                      }
                                    },
                                    "errorTokens" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "EarlyTicket"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 12,
                                            "beginColumn" : 4,
                                            "endLine" : 12,
                                            "endColumn" : 23,
                                            "offset" : 205,
                                            "length" : 19
                                          }
                                        }
                                      }
                                    ]
                                  }
                                },
                                "sinkPropagation" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Emv2Propagation",
                                    "direction" : {
                                      "type" : "PropagationDirection",
                                      "value" : "Out"
                                    },
                                    "propagationPoint" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "DrugFlow"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                          },
                                          "beginLine" : 14,
                                          "beginColumn" : 5,
                                          "endLine" : 14,
                                          "endColumn" : 50,
                                          "offset" : 301,
                                          "length" : 45
                                        }
                                      }
                                    },
                                    "errorTokens" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "TooMuchAnalgesic"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 6,
                                            "beginColumn" : 4,
                                            "endLine" : 6,
                                            "endColumn" : 28,
                                            "offset" : 67,
                                            "length" : 24
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              },
                              {
                                "type" : "Emv2Flow",
                                "identifier" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "LowTicketValueIsntUnsafe"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                      },
                                      "beginLine" : 33,
                                      "beginColumn" : 5,
                                      "endLine" : 33,
                                      "endColumn" : 71,
                                      "offset" : 930,
                                      "length" : 66
                                    }
                                  }
                                },
                                "kind" : {
                                  "type" : "FlowKind",
                                  "value" : "Sink"
                                },
                                "sourcePropagation" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Emv2Propagation",
                                    "direction" : {
                                      "type" : "PropagationDirection",
                                      "value" : "In"
                                    },
                                    "propagationPoint" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "TicketInput"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                          },
                                          "beginLine" : 33,
                                          "beginColumn" : 5,
                                          "endLine" : 33,
                                          "endColumn" : 71,
                                          "offset" : 930,
                                          "length" : 66
                                        }
                                      }
                                    },
                                    "errorTokens" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "TicketTooShort"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 10,
                                            "beginColumn" : 4,
                                            "endLine" : 10,
                                            "endColumn" : 26,
                                            "offset" : 159,
                                            "length" : 22
                                          }
                                        }
                                      }
                                    ]
                                  }
                                },
                                "sinkPropagation" : {
                                  "type" : "None"
                                }
                              },
                              {
                                "type" : "Emv2Flow",
                                "identifier" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "NoTicketsArentUnsafe"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                      },
                                      "beginLine" : 34,
                                      "beginColumn" : 5,
                                      "endLine" : 34,
                                      "endColumn" : 61,
                                      "offset" : 1001,
                                      "length" : 56
                                    }
                                  }
                                },
                                "kind" : {
                                  "type" : "FlowKind",
                                  "value" : "Sink"
                                },
                                "sourcePropagation" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Emv2Propagation",
                                    "direction" : {
                                      "type" : "PropagationDirection",
                                      "value" : "In"
                                    },
                                    "propagationPoint" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "TicketInput"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                          },
                                          "beginLine" : 34,
                                          "beginColumn" : 5,
                                          "endLine" : 34,
                                          "endColumn" : 61,
                                          "offset" : 1001,
                                          "length" : 56
                                        }
                                      }
                                    },
                                    "errorTokens" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "NoTicket"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 11,
                                            "beginColumn" : 4,
                                            "endLine" : 11,
                                            "endColumn" : 20,
                                            "offset" : 185,
                                            "length" : 16
                                          }
                                        }
                                      }
                                    ]
                                  }
                                },
                                "sinkPropagation" : {
                                  "type" : "None"
                                }
                              },
                              {
                                "type" : "Emv2Flow",
                                "identifier" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "LateTicketLeadsSafe"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                      },
                                      "beginLine" : 35,
                                      "beginColumn" : 5,
                                      "endLine" : 35,
                                      "endColumn" : 62,
                                      "offset" : 1062,
                                      "length" : 57
                                    }
                                  }
                                },
                                "kind" : {
                                  "type" : "FlowKind",
                                  "value" : "Sink"
                                },
                                "sourcePropagation" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Emv2Propagation",
                                    "direction" : {
                                      "type" : "PropagationDirection",
                                      "value" : "In"
                                    },
                                    "propagationPoint" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "TicketInput"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                          },
                                          "beginLine" : 35,
                                          "beginColumn" : 5,
                                          "endLine" : 35,
                                          "endColumn" : 62,
                                          "offset" : 1062,
                                          "length" : 57
                                        }
                                      }
                                    },
                                    "errorTokens" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "LateTicket"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 13,
                                            "beginColumn" : 4,
                                            "endLine" : 13,
                                            "endColumn" : 23,
                                            "offset" : 228,
                                            "length" : 19
                                          }
                                        }
                                      }
                                    ]
                                  }
                                },
                                "sinkPropagation" : {
                                  "type" : "None"
                                }
                              }
                            ],
                            "componentBehavior" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Emv2BehaviorSection",
                                "events" : [
                                  {
                                    "type" : "ErrorEvent",
                                    "id" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "PumpDeteriorates"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                          },
                                          "beginLine" : 49,
                                          "beginColumn" : 5,
                                          "endLine" : 49,
                                          "endColumn" : 35,
                                          "offset" : 903,
                                          "length" : 30
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type" : "ErrorEvent",
                                    "id" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "OverHeating"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                          },
                                          "beginLine" : 50,
                                          "beginColumn" : 5,
                                          "endLine" : 50,
                                          "endColumn" : 30,
                                          "offset" : 938,
                                          "length" : 25
                                        }
                                      }
                                    }
                                  }
                                ],
                                "transitions" : [
                                  {
                                    "type" : "ErrorTransition",
                                    "id" : {
                                      "type" : "None"
                                    },
                                    "sourceState" : {
                                      "type" : "Name",
                                      "name" : ["Simple_PCA_Errors", "PumpStatus", "Normal"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                          },
                                          "beginLine" : 53,
                                          "beginColumn" : 5,
                                          "endLine" : 53,
                                          "endColumn" : 28,
                                          "offset" : 996,
                                          "length" : 23
                                        }
                                      }
                                    },
                                    "condition" : {
                                      "type" : "ConditionTrigger",
                                      "events" : [
                                        {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "OverHeating"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                              },
                                              "beginLine" : 50,
                                              "beginColumn" : 5,
                                              "endLine" : 50,
                                              "endColumn" : 30,
                                              "offset" : 938,
                                              "length" : 25
                                            }
                                          }
                                        }
                                      ],
                                      "propagationPoints" : [
                                      ]
                                    },
                                    "targetState" : {
                                      "type" : "Name",
                                      "name" : ["Simple_PCA_Errors", "PumpStatus", "DetectableFailure"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                          },
                                          "beginLine" : 54,
                                          "beginColumn" : 5,
                                          "endLine" : 54,
                                          "endColumn" : 31,
                                          "offset" : 1024,
                                          "length" : 26
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type" : "ErrorTransition",
                                    "id" : {
                                      "type" : "None"
                                    },
                                    "sourceState" : {
                                      "type" : "Name",
                                      "name" : ["Simple_PCA_Errors", "PumpStatus", "Normal"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                          },
                                          "beginLine" : 53,
                                          "beginColumn" : 5,
                                          "endLine" : 53,
                                          "endColumn" : 28,
                                          "offset" : 996,
                                          "length" : 23
                                        }
                                      }
                                    },
                                    "condition" : {
                                      "type" : "ConditionTrigger",
                                      "events" : [
                                        {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "PumpDeteriorates"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                              },
                                              "beginLine" : 49,
                                              "beginColumn" : 5,
                                              "endLine" : 49,
                                              "endColumn" : 35,
                                              "offset" : 903,
                                              "length" : 30
                                            }
                                          }
                                        }
                                      ],
                                      "propagationPoints" : [
                                      ]
                                    },
                                    "targetState" : {
                                      "type" : "Name",
                                      "name" : ["Simple_PCA_Errors", "PumpStatus", "DetectableFailure"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                          },
                                          "beginLine" : 54,
                                          "beginColumn" : 5,
                                          "endLine" : 54,
                                          "endColumn" : 31,
                                          "offset" : 1024,
                                          "length" : 26
                                        }
                                      }
                                    }
                                  }
                                ],
                                "propagations" : [
                                  {
                                    "type" : "ErrorPropagation",
                                    "id" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Name",
                                        "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "OverDose"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                            },
                                            "beginLine" : 43,
                                            "beginColumn" : 5,
                                            "endLine" : 43,
                                            "endColumn" : 96,
                                            "offset" : 1348,
                                            "length" : 91
                                          }
                                        }
                                      }
                                    },
                                    "source" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Normal"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 53,
                                            "beginColumn" : 5,
                                            "endLine" : 53,
                                            "endColumn" : 28,
                                            "offset" : 996,
                                            "length" : 23
                                          }
                                        }
                                      }
                                    ],
                                    "condition" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "ConditionTrigger",
                                        "events" : [
                                        ],
                                        "propagationPoints" : [
                                          {
                                            "type" : "Emv2Propagation",
                                            "direction" : {
                                              "type" : "PropagationDirection",
                                              "value" : "In"
                                            },
                                            "propagationPoint" : {
                                              "type" : "Name",
                                              "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "TicketInput"],
                                              "pos" : {
                                                "type" : "Some",
                                                "value" : {
                                                  "type" : "Position",
                                                  "uriOpt" : {
                                                    "type" : "Some",
                                                    "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                                  },
                                                  "beginLine" : 7,
                                                  "beginColumn" : 4,
                                                  "endLine" : 7,
                                                  "endColumn" : 36,
                                                  "offset" : 63,
                                                  "length" : 32
                                                }
                                              }
                                            },
                                            "errorTokens" : [
                                              {
                                                "type" : "Name",
                                                "name" : ["Simple_PCA_Errors", "TicketTooLong"],
                                                "pos" : {
                                                  "type" : "Some",
                                                  "value" : {
                                                    "type" : "Position",
                                                    "uriOpt" : {
                                                      "type" : "Some",
                                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                    },
                                                    "beginLine" : 9,
                                                    "beginColumn" : 4,
                                                    "endLine" : 9,
                                                    "endColumn" : 25,
                                                    "offset" : 134,
                                                    "length" : 21
                                                  }
                                                }
                                              },
                                              {
                                                "type" : "Name",
                                                "name" : ["Simple_PCA_Errors", "TicketTooShort"],
                                                "pos" : {
                                                  "type" : "Some",
                                                  "value" : {
                                                    "type" : "Position",
                                                    "uriOpt" : {
                                                      "type" : "Some",
                                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                    },
                                                    "beginLine" : 10,
                                                    "beginColumn" : 4,
                                                    "endLine" : 10,
                                                    "endColumn" : 26,
                                                    "offset" : 159,
                                                    "length" : 22
                                                  }
                                                }
                                              },
                                              {
                                                "type" : "Name",
                                                "name" : ["Simple_PCA_Errors", "NoTicket"],
                                                "pos" : {
                                                  "type" : "Some",
                                                  "value" : {
                                                    "type" : "Position",
                                                    "uriOpt" : {
                                                      "type" : "Some",
                                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                    },
                                                    "beginLine" : 11,
                                                    "beginColumn" : 4,
                                                    "endLine" : 11,
                                                    "endColumn" : 20,
                                                    "offset" : 185,
                                                    "length" : 16
                                                  }
                                                }
                                              },
                                              {
                                                "type" : "Name",
                                                "name" : ["Simple_PCA_Errors", "EarlyTicket"],
                                                "pos" : {
                                                  "type" : "Some",
                                                  "value" : {
                                                    "type" : "Position",
                                                    "uriOpt" : {
                                                      "type" : "Some",
                                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                    },
                                                    "beginLine" : 12,
                                                    "beginColumn" : 4,
                                                    "endLine" : 12,
                                                    "endColumn" : 23,
                                                    "offset" : 205,
                                                    "length" : 19
                                                  }
                                                }
                                              },
                                              {
                                                "type" : "Name",
                                                "name" : ["Simple_PCA_Errors", "LateTicket"],
                                                "pos" : {
                                                  "type" : "Some",
                                                  "value" : {
                                                    "type" : "Position",
                                                    "uriOpt" : {
                                                      "type" : "Some",
                                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                    },
                                                    "beginLine" : 13,
                                                    "beginColumn" : 4,
                                                    "endLine" : 13,
                                                    "endColumn" : 23,
                                                    "offset" : 228,
                                                    "length" : 19
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    },
                                    "target" : [
                                      {
                                        "type" : "Emv2Propagation",
                                        "direction" : {
                                          "type" : "PropagationDirection",
                                          "value" : "Out"
                                        },
                                        "propagationPoint" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "DrugFlow"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                              },
                                              "beginLine" : 8,
                                              "beginColumn" : 4,
                                              "endLine" : 8,
                                              "endColumn" : 26,
                                              "offset" : 99,
                                              "length" : 22
                                            }
                                          }
                                        },
                                        "errorTokens" : [
                                          {
                                            "type" : "Name",
                                            "name" : ["Simple_PCA_Errors", "TooMuchAnalgesic"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                },
                                                "beginLine" : 6,
                                                "beginColumn" : 4,
                                                "endLine" : 6,
                                                "endColumn" : 28,
                                                "offset" : 67,
                                                "length" : 24
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "type" : "ErrorPropagation",
                                    "id" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Name",
                                        "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "NoInputNoError"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                            },
                                            "beginLine" : 44,
                                            "beginColumn" : 5,
                                            "endLine" : 44,
                                            "endColumn" : 103,
                                            "offset" : 1444,
                                            "length" : 98
                                          }
                                        }
                                      }
                                    },
                                    "source" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Normal"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 53,
                                            "beginColumn" : 5,
                                            "endLine" : 53,
                                            "endColumn" : 28,
                                            "offset" : 996,
                                            "length" : 23
                                          }
                                        }
                                      }
                                    ],
                                    "condition" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "ConditionTrigger",
                                        "events" : [
                                        ],
                                        "propagationPoints" : [
                                          {
                                            "type" : "Emv2Propagation",
                                            "direction" : {
                                              "type" : "PropagationDirection",
                                              "value" : "In"
                                            },
                                            "propagationPoint" : {
                                              "type" : "Name",
                                              "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "TicketInput"],
                                              "pos" : {
                                                "type" : "Some",
                                                "value" : {
                                                  "type" : "Position",
                                                  "uriOpt" : {
                                                    "type" : "Some",
                                                    "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                                  },
                                                  "beginLine" : 7,
                                                  "beginColumn" : 4,
                                                  "endLine" : 7,
                                                  "endColumn" : 36,
                                                  "offset" : 63,
                                                  "length" : 32
                                                }
                                              }
                                            },
                                            "errorTokens" : [
                                              {
                                                "type" : "Name",
                                                "name" : ["Simple_PCA_Errors", "TicketTooLong"],
                                                "pos" : {
                                                  "type" : "Some",
                                                  "value" : {
                                                    "type" : "Position",
                                                    "uriOpt" : {
                                                      "type" : "Some",
                                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                    },
                                                    "beginLine" : 9,
                                                    "beginColumn" : 4,
                                                    "endLine" : 9,
                                                    "endColumn" : 25,
                                                    "offset" : 134,
                                                    "length" : 21
                                                  }
                                                }
                                              },
                                              {
                                                "type" : "Name",
                                                "name" : ["Simple_PCA_Errors", "TicketTooShort"],
                                                "pos" : {
                                                  "type" : "Some",
                                                  "value" : {
                                                    "type" : "Position",
                                                    "uriOpt" : {
                                                      "type" : "Some",
                                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                    },
                                                    "beginLine" : 10,
                                                    "beginColumn" : 4,
                                                    "endLine" : 10,
                                                    "endColumn" : 26,
                                                    "offset" : 159,
                                                    "length" : 22
                                                  }
                                                }
                                              },
                                              {
                                                "type" : "Name",
                                                "name" : ["Simple_PCA_Errors", "NoTicket"],
                                                "pos" : {
                                                  "type" : "Some",
                                                  "value" : {
                                                    "type" : "Position",
                                                    "uriOpt" : {
                                                      "type" : "Some",
                                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                    },
                                                    "beginLine" : 11,
                                                    "beginColumn" : 4,
                                                    "endLine" : 11,
                                                    "endColumn" : 20,
                                                    "offset" : 185,
                                                    "length" : 16
                                                  }
                                                }
                                              },
                                              {
                                                "type" : "Name",
                                                "name" : ["Simple_PCA_Errors", "EarlyTicket"],
                                                "pos" : {
                                                  "type" : "Some",
                                                  "value" : {
                                                    "type" : "Position",
                                                    "uriOpt" : {
                                                      "type" : "Some",
                                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                    },
                                                    "beginLine" : 12,
                                                    "beginColumn" : 4,
                                                    "endLine" : 12,
                                                    "endColumn" : 23,
                                                    "offset" : 205,
                                                    "length" : 19
                                                  }
                                                }
                                              },
                                              {
                                                "type" : "Name",
                                                "name" : ["Simple_PCA_Errors", "LateTicket"],
                                                "pos" : {
                                                  "type" : "Some",
                                                  "value" : {
                                                    "type" : "Position",
                                                    "uriOpt" : {
                                                      "type" : "Some",
                                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                    },
                                                    "beginLine" : 13,
                                                    "beginColumn" : 4,
                                                    "endLine" : 13,
                                                    "endColumn" : 23,
                                                    "offset" : 228,
                                                    "length" : 19
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    },
                                    "target" : [
                                      {
                                        "type" : "Emv2Propagation",
                                        "direction" : {
                                          "type" : "PropagationDirection",
                                          "value" : "Out"
                                        },
                                        "propagationPoint" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "DrugFlow"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                              },
                                              "beginLine" : 8,
                                              "beginColumn" : 4,
                                              "endLine" : 8,
                                              "endColumn" : 26,
                                              "offset" : 99,
                                              "length" : 22
                                            }
                                          }
                                        },
                                        "errorTokens" : [
                                          {
                                            "type" : "Name",
                                            "name" : ["Simple_PCA_Errors", "TooMuchAnalgesic"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                },
                                                "beginLine" : 6,
                                                "beginColumn" : 4,
                                                "endLine" : 6,
                                                "endColumn" : 28,
                                                "offset" : 67,
                                                "length" : 24
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "type" : "ErrorPropagation",
                                    "id" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Name",
                                        "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "PKVO_Causes_NoHarm"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                            },
                                            "beginLine" : 45,
                                            "beginColumn" : 5,
                                            "endLine" : 45,
                                            "endColumn" : 81,
                                            "offset" : 1547,
                                            "length" : 76
                                          }
                                        }
                                      }
                                    },
                                    "source" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["SafeOperation"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 55,
                                            "beginColumn" : 5,
                                            "endLine" : 55,
                                            "endColumn" : 26,
                                            "offset" : 1055,
                                            "length" : 21
                                          }
                                        }
                                      }
                                    ],
                                    "condition" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "AllCondition",
                                        "op" : [
                                          {
                                            "type" : "ConditionTrigger",
                                            "events" : [
                                            ],
                                            "propagationPoints" : [
                                              {
                                                "type" : "Emv2Propagation",
                                                "direction" : {
                                                  "type" : "PropagationDirection",
                                                  "value" : "In"
                                                },
                                                "propagationPoint" : {
                                                  "type" : "Name",
                                                  "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "TicketInput"],
                                                  "pos" : {
                                                    "type" : "Some",
                                                    "value" : {
                                                      "type" : "Position",
                                                      "uriOpt" : {
                                                        "type" : "Some",
                                                        "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                                      },
                                                      "beginLine" : 7,
                                                      "beginColumn" : 4,
                                                      "endLine" : 7,
                                                      "endColumn" : 36,
                                                      "offset" : 63,
                                                      "length" : 32
                                                    }
                                                  }
                                                },
                                                "errorTokens" : [
                                                  {
                                                    "type" : "Name",
                                                    "name" : ["Simple_PCA_Errors", "TicketTooLong"],
                                                    "pos" : {
                                                      "type" : "Some",
                                                      "value" : {
                                                        "type" : "Position",
                                                        "uriOpt" : {
                                                          "type" : "Some",
                                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                        },
                                                        "beginLine" : 9,
                                                        "beginColumn" : 4,
                                                        "endLine" : 9,
                                                        "endColumn" : 25,
                                                        "offset" : 134,
                                                        "length" : 21
                                                      }
                                                    }
                                                  },
                                                  {
                                                    "type" : "Name",
                                                    "name" : ["Simple_PCA_Errors", "TicketTooShort"],
                                                    "pos" : {
                                                      "type" : "Some",
                                                      "value" : {
                                                        "type" : "Position",
                                                        "uriOpt" : {
                                                          "type" : "Some",
                                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                        },
                                                        "beginLine" : 10,
                                                        "beginColumn" : 4,
                                                        "endLine" : 10,
                                                        "endColumn" : 26,
                                                        "offset" : 159,
                                                        "length" : 22
                                                      }
                                                    }
                                                  },
                                                  {
                                                    "type" : "Name",
                                                    "name" : ["Simple_PCA_Errors", "NoTicket"],
                                                    "pos" : {
                                                      "type" : "Some",
                                                      "value" : {
                                                        "type" : "Position",
                                                        "uriOpt" : {
                                                          "type" : "Some",
                                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                        },
                                                        "beginLine" : 11,
                                                        "beginColumn" : 4,
                                                        "endLine" : 11,
                                                        "endColumn" : 20,
                                                        "offset" : 185,
                                                        "length" : 16
                                                      }
                                                    }
                                                  },
                                                  {
                                                    "type" : "Name",
                                                    "name" : ["Simple_PCA_Errors", "EarlyTicket"],
                                                    "pos" : {
                                                      "type" : "Some",
                                                      "value" : {
                                                        "type" : "Position",
                                                        "uriOpt" : {
                                                          "type" : "Some",
                                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                        },
                                                        "beginLine" : 12,
                                                        "beginColumn" : 4,
                                                        "endLine" : 12,
                                                        "endColumn" : 23,
                                                        "offset" : 205,
                                                        "length" : 19
                                                      }
                                                    }
                                                  },
                                                  {
                                                    "type" : "Name",
                                                    "name" : ["Simple_PCA_Errors", "LateTicket"],
                                                    "pos" : {
                                                      "type" : "Some",
                                                      "value" : {
                                                        "type" : "Position",
                                                        "uriOpt" : {
                                                          "type" : "Some",
                                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                        },
                                                        "beginLine" : 13,
                                                        "beginColumn" : 4,
                                                        "endLine" : 13,
                                                        "endColumn" : 23,
                                                        "offset" : 228,
                                                        "length" : 19
                                                      }
                                                    }
                                                  }
                                                ]
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    },
                                    "target" : [
                                      {
                                        "type" : "Emv2Propagation",
                                        "direction" : {
                                          "type" : "PropagationDirection",
                                          "value" : "Out"
                                        },
                                        "propagationPoint" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "DrugFlow"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                              },
                                              "beginLine" : 8,
                                              "beginColumn" : 4,
                                              "endLine" : 8,
                                              "endColumn" : 26,
                                              "offset" : 99,
                                              "length" : 22
                                            }
                                          }
                                        },
                                        "errorTokens" : [
                                          {
                                            "type" : "Name",
                                            "name" : ["Simple_PCA_Errors", "TooMuchAnalgesic"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                },
                                                "beginLine" : 6,
                                                "beginColumn" : 4,
                                                "endLine" : 6,
                                                "endColumn" : 28,
                                                "offset" : 67,
                                                "length" : 24
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            },
                            "properties" : [
                              {
                                "type" : "Property",
                                "name" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "STPA::Hazards"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                      },
                                      "beginLine" : 7,
                                      "beginColumn" : 2,
                                      "endLine" : 7,
                                      "endColumn" : 137,
                                      "offset" : 166,
                                      "length" : 135
                                    }
                                  }
                                },
                                "propertyValues" : [
                                  {
                                    "type" : "RecordProp",
                                    "properties" : [
                                      {
                                        "type" : "Property",
                                        "name" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "STPA::Hazard.ID"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                              },
                                              "beginLine" : 43,
                                              "beginColumn" : 3,
                                              "endLine" : 43,
                                              "endColumn" : 18,
                                              "offset" : 1209,
                                              "length" : 15
                                            }
                                          }
                                        },
                                        "propertyValues" : [
                                          {
                                            "type" : "ValueProp",
                                            "value" : "Haz7"
                                          }
                                        ],
                                        "appliesTo" : [
                                        ]
                                      },
                                      {
                                        "type" : "Property",
                                        "name" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "STPA::Hazard.Description"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                              },
                                              "beginLine" : 45,
                                              "beginColumn" : 3,
                                              "endLine" : 45,
                                              "endColumn" : 27,
                                              "offset" : 1271,
                                              "length" : 24
                                            }
                                          }
                                        },
                                        "propertyValues" : [
                                          {
                                            "type" : "ValueProp",
                                            "value" : "Pump infuses higher dosage of drug"
                                          }
                                        ],
                                        "appliesTo" : [
                                        ]
                                      }
                                    ]
                                  }
                                ],
                                "appliesTo" : [
                                  {
                                    "type" : "Emv2ElementRef",
                                    "kind" : {
                                      "type" : "Emv2ElementKind",
                                      "value" : "Propagation"
                                    },
                                    "name" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance.pcaPump", "DrugFlow"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                          },
                                          "beginLine" : 14,
                                          "beginColumn" : 5,
                                          "endLine" : 14,
                                          "endColumn" : 50,
                                          "offset" : 301,
                                          "length" : 45
                                        }
                                      }
                                    },
                                    "errorTypes" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "TooMuchAnalgesic"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 6,
                                            "beginColumn" : 4,
                                            "endLine" : 6,
                                            "endColumn" : 28,
                                            "offset" : 67,
                                            "length" : 24
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "type" : "Component",
                      "identifier" : {
                        "type" : "Name",
                        "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                            },
                            "beginLine" : 19,
                            "beginColumn" : 4,
                            "endLine" : 19,
                            "endColumn" : 50,
                            "offset" : 276,
                            "length" : 46
                          }
                        }
                      },
                      "category" : {
                        "type" : "ComponentCategory",
                        "value" : "Process"
                      },
                      "classifier" : {
                        "type" : "Some",
                        "value" : {
                          "type" : "Classifier",
                          "name" : "Application::ShutOffApp.imp"
                        }
                      },
                      "features" : [
                        {
                          "type" : "FeatureEnd",
                          "identifier" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "SpO2"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                },
                                "beginLine" : 7,
                                "beginColumn" : 4,
                                "endLine" : 7,
                                "endColumn" : 29,
                                "offset" : 74,
                                "length" : 25
                              }
                            }
                          },
                          "direction" : {
                            "type" : "Direction",
                            "value" : "In"
                          },
                          "category" : {
                            "type" : "FeatureCategory",
                            "value" : "EventDataPort"
                          },
                          "classifier" : {
                            "type" : "None"
                          },
                          "properties" : [
                          ]
                        },
                        {
                          "type" : "FeatureEnd",
                          "identifier" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "CmdPumpNorm"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                },
                                "beginLine" : 8,
                                "beginColumn" : 4,
                                "endLine" : 8,
                                "endColumn" : 37,
                                "offset" : 103,
                                "length" : 33
                              }
                            }
                          },
                          "direction" : {
                            "type" : "Direction",
                            "value" : "Out"
                          },
                          "category" : {
                            "type" : "FeatureCategory",
                            "value" : "EventDataPort"
                          },
                          "classifier" : {
                            "type" : "None"
                          },
                          "properties" : [
                          ]
                        }
                      ],
                      "subComponents" : [
                      ],
                      "connections" : [
                      ],
                      "connectionInstances" : [
                      ],
                      "properties" : [
                        {
                          "type" : "Property",
                          "name" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "STPA::ComponentRoles"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                },
                                "beginLine" : 76,
                                "beginColumn" : 2,
                                "endLine" : 76,
                                "endColumn" : 210,
                                "offset" : 1936,
                                "length" : 208
                              }
                            }
                          },
                          "propertyValues" : [
                            {
                              "type" : "RecordProp",
                              "properties" : [
                                {
                                  "type" : "Property",
                                  "name" : {
                                    "type" : "Name",
                                    "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "STPA::Component.Description"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                        },
                                        "beginLine" : 71,
                                        "beginColumn" : 3,
                                        "endLine" : 71,
                                        "endColumn" : 27,
                                        "offset" : 1848,
                                        "length" : 24
                                      }
                                    }
                                  },
                                  "propertyValues" : [
                                    {
                                      "type" : "ValueProp",
                                      "value" : "Application controls the infusion of the drug"
                                    }
                                  ],
                                  "appliesTo" : [
                                  ]
                                },
                                {
                                  "type" : "Property",
                                  "name" : {
                                    "type" : "Name",
                                    "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "STPA::Component.ControlLoop"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                        },
                                        "beginLine" : 72,
                                        "beginColumn" : 3,
                                        "endLine" : 72,
                                        "endColumn" : 35,
                                        "offset" : 1875,
                                        "length" : 32
                                      }
                                    }
                                  },
                                  "propertyValues" : [
                                    {
                                      "type" : "RecordProp",
                                      "properties" : [
                                        {
                                          "type" : "Property",
                                          "name" : {
                                            "type" : "Name",
                                            "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "STPA::ControlLoop.ID"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                },
                                                "beginLine" : 66,
                                                "beginColumn" : 3,
                                                "endLine" : 66,
                                                "endColumn" : 18,
                                                "offset" : 1771,
                                                "length" : 15
                                              }
                                            }
                                          },
                                          "propertyValues" : [
                                            {
                                              "type" : "ValueProp",
                                              "value" : "CL1"
                                            }
                                          ],
                                          "appliesTo" : [
                                          ]
                                        },
                                        {
                                          "type" : "Property",
                                          "name" : {
                                            "type" : "Name",
                                            "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "STPA::ControlLoop.Description"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                                },
                                                "beginLine" : 67,
                                                "beginColumn" : 3,
                                                "endLine" : 67,
                                                "endColumn" : 27,
                                                "offset" : 1789,
                                                "length" : 24
                                              }
                                            }
                                          },
                                          "propertyValues" : [
                                            {
                                              "type" : "ValueProp",
                                              "value" : "PCA safety shutoff control structure"
                                            }
                                          ],
                                          "appliesTo" : [
                                          ]
                                        }
                                      ]
                                    }
                                  ],
                                  "appliesTo" : [
                                  ]
                                },
                                {
                                  "type" : "Property",
                                  "name" : {
                                    "type" : "Name",
                                    "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "STPA::Component.Role"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                        },
                                        "beginLine" : 73,
                                        "beginColumn" : 3,
                                        "endLine" : 73,
                                        "endColumn" : 21,
                                        "offset" : 1910,
                                        "length" : 18
                                      }
                                    }
                                  },
                                  "propertyValues" : [
                                    {
                                      "type" : "ValueProp",
                                      "value" : "Controller"
                                    }
                                  ],
                                  "appliesTo" : [
                                  ]
                                }
                              ]
                            }
                          ],
                          "appliesTo" : [
                          ]
                        }
                      ],
                      "flows" : [
                        {
                          "type" : "Flow",
                          "name" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "spo2_flow"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                },
                                "beginLine" : 10,
                                "beginColumn" : 4,
                                "endLine" : 10,
                                "endColumn" : 45,
                                "offset" : 148,
                                "length" : 41
                              }
                            }
                          },
                          "kind" : {
                            "type" : "FlowKind",
                            "value" : "Path"
                          },
                          "source" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "FeatureEnd",
                              "identifier" : {
                                "type" : "Name",
                                "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "spo2_flow", "SpO2"],
                                "pos" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Position",
                                    "uriOpt" : {
                                      "type" : "Some",
                                      "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                    },
                                    "beginLine" : 7,
                                    "beginColumn" : 4,
                                    "endLine" : 7,
                                    "endColumn" : 29,
                                    "offset" : 74,
                                    "length" : 25
                                  }
                                }
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "In"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "EventDataPort"
                              },
                              "classifier" : {
                                "type" : "None"
                              },
                              "properties" : [
                              ]
                            }
                          },
                          "sink" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "FeatureEnd",
                              "identifier" : {
                                "type" : "Name",
                                "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "spo2_flow", "CmdPumpNorm"],
                                "pos" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Position",
                                    "uriOpt" : {
                                      "type" : "Some",
                                      "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                    },
                                    "beginLine" : 8,
                                    "beginColumn" : 4,
                                    "endLine" : 8,
                                    "endColumn" : 37,
                                    "offset" : 103,
                                    "length" : 33
                                  }
                                }
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "Out"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "EventDataPort"
                              },
                              "classifier" : {
                                "type" : "None"
                              },
                              "properties" : [
                              ]
                            }
                          }
                        }
                      ],
                      "modes" : [
                      ],
                      "annexes" : [
                        {
                          "type" : "Annex",
                          "name" : "Emv2",
                          "clause" : {
                            "type" : "Emv2Clause",
                            "libraries" : [
                              {
                                "type" : "Name",
                                "name" : ["Simple_PCA_Errors"],
                                "pos" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Position",
                                    "uriOpt" : {
                                      "type" : "Some",
                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                    },
                                    "beginLine" : 5,
                                    "beginColumn" : 3,
                                    "endLine" : 56,
                                    "endColumn" : 15,
                                    "offset" : 52,
                                    "length" : 1039
                                  }
                                }
                              },
                              {
                                "type" : "Name",
                                "name" : ["Simple_PCA_Errors.AppStatus"],
                                "pos" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Position",
                                    "uriOpt" : {
                                      "type" : "Some",
                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                    },
                                    "beginLine" : 24,
                                    "beginColumn" : 3,
                                    "endLine" : 31,
                                    "endColumn" : 16,
                                    "offset" : 415,
                                    "length" : 178
                                  }
                                }
                              }
                            ],
                            "propagations" : [
                              {
                                "type" : "Emv2Propagation",
                                "direction" : {
                                  "type" : "PropagationDirection",
                                  "value" : "In"
                                },
                                "propagationPoint" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "SpO2"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                      },
                                      "beginLine" : 7,
                                      "beginColumn" : 4,
                                      "endLine" : 7,
                                      "endColumn" : 29,
                                      "offset" : 74,
                                      "length" : 25
                                    }
                                  }
                                },
                                "errorTokens" : [
                                  {
                                    "type" : "Name",
                                    "name" : ["Simple_PCA_Errors", "SpO2ValueHigh"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                        },
                                        "beginLine" : 16,
                                        "beginColumn" : 5,
                                        "endLine" : 16,
                                        "endColumn" : 26,
                                        "offset" : 287,
                                        "length" : 21
                                      }
                                    }
                                  },
                                  {
                                    "type" : "Name",
                                    "name" : ["Simple_PCA_Errors", "SpO2Early"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                        },
                                        "beginLine" : 18,
                                        "beginColumn" : 4,
                                        "endLine" : 18,
                                        "endColumn" : 21,
                                        "offset" : 336,
                                        "length" : 17
                                      }
                                    }
                                  },
                                  {
                                    "type" : "Name",
                                    "name" : ["Simple_PCA_Errors", "SpO2Late"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                        },
                                        "beginLine" : 19,
                                        "beginColumn" : 4,
                                        "endLine" : 19,
                                        "endColumn" : 20,
                                        "offset" : 357,
                                        "length" : 16
                                      }
                                    }
                                  },
                                  {
                                    "type" : "Name",
                                    "name" : ["Simple_PCA_Errors", "NoSpO2"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                        },
                                        "beginLine" : 20,
                                        "beginColumn" : 5,
                                        "endLine" : 20,
                                        "endColumn" : 19,
                                        "offset" : 378,
                                        "length" : 14
                                      }
                                    }
                                  },
                                  {
                                    "type" : "Name",
                                    "name" : ["Simple_PCA_Errors", "SpO2ValueLow"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                        },
                                        "beginLine" : 17,
                                        "beginColumn" : 4,
                                        "endLine" : 17,
                                        "endColumn" : 24,
                                        "offset" : 312,
                                        "length" : 20
                                      }
                                    }
                                  }
                                ]
                              },
                              {
                                "type" : "Emv2Propagation",
                                "direction" : {
                                  "type" : "PropagationDirection",
                                  "value" : "Out"
                                },
                                "propagationPoint" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "CmdPumpNorm"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                      },
                                      "beginLine" : 8,
                                      "beginColumn" : 4,
                                      "endLine" : 8,
                                      "endColumn" : 37,
                                      "offset" : 103,
                                      "length" : 33
                                    }
                                  }
                                },
                                "errorTokens" : [
                                  {
                                    "type" : "Name",
                                    "name" : ["Simple_PCA_Errors", "TicketTooLong"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                        },
                                        "beginLine" : 9,
                                        "beginColumn" : 4,
                                        "endLine" : 9,
                                        "endColumn" : 25,
                                        "offset" : 134,
                                        "length" : 21
                                      }
                                    }
                                  },
                                  {
                                    "type" : "Name",
                                    "name" : ["Simple_PCA_Errors", "EarlyTicket"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                        },
                                        "beginLine" : 12,
                                        "beginColumn" : 4,
                                        "endLine" : 12,
                                        "endColumn" : 23,
                                        "offset" : 205,
                                        "length" : 19
                                      }
                                    }
                                  },
                                  {
                                    "type" : "Name",
                                    "name" : ["Simple_PCA_Errors", "LateTicket"],
                                    "pos" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Position",
                                        "uriOpt" : {
                                          "type" : "Some",
                                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                        },
                                        "beginLine" : 13,
                                        "beginColumn" : 4,
                                        "endLine" : 13,
                                        "endColumn" : 23,
                                        "offset" : 228,
                                        "length" : 19
                                      }
                                    }
                                  }
                                ]
                              }
                            ],
                            "flows" : [
                              {
                                "type" : "Emv2Flow",
                                "identifier" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "DetectedErrorSource"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                      },
                                      "beginLine" : 21,
                                      "beginColumn" : 5,
                                      "endLine" : 21,
                                      "endColumn" : 64,
                                      "offset" : 654,
                                      "length" : 59
                                    }
                                  }
                                },
                                "kind" : {
                                  "type" : "FlowKind",
                                  "value" : "Source"
                                },
                                "sourcePropagation" : {
                                  "type" : "None"
                                },
                                "sinkPropagation" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Emv2Propagation",
                                    "direction" : {
                                      "type" : "PropagationDirection",
                                      "value" : "Out"
                                    },
                                    "propagationPoint" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "CmdPumpNorm"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                          },
                                          "beginLine" : 17,
                                          "beginColumn" : 5,
                                          "endLine" : 17,
                                          "endColumn" : 75,
                                          "offset" : 400,
                                          "length" : 70
                                        }
                                      }
                                    },
                                    "errorTokens" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "LateTicket"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 13,
                                            "beginColumn" : 4,
                                            "endLine" : 13,
                                            "endColumn" : 23,
                                            "offset" : 228,
                                            "length" : 19
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              },
                              {
                                "type" : "Emv2Flow",
                                "identifier" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "UndetectedErrorSource"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                      },
                                      "beginLine" : 22,
                                      "beginColumn" : 5,
                                      "endLine" : 22,
                                      "endColumn" : 94,
                                      "offset" : 718,
                                      "length" : 89
                                    }
                                  }
                                },
                                "kind" : {
                                  "type" : "FlowKind",
                                  "value" : "Source"
                                },
                                "sourcePropagation" : {
                                  "type" : "None"
                                },
                                "sinkPropagation" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Emv2Propagation",
                                    "direction" : {
                                      "type" : "PropagationDirection",
                                      "value" : "Out"
                                    },
                                    "propagationPoint" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "CmdPumpNorm"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                          },
                                          "beginLine" : 17,
                                          "beginColumn" : 5,
                                          "endLine" : 17,
                                          "endColumn" : 75,
                                          "offset" : 400,
                                          "length" : 70
                                        }
                                      }
                                    },
                                    "errorTokens" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "TicketTooLong"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 9,
                                            "beginColumn" : 4,
                                            "endLine" : 9,
                                            "endColumn" : 25,
                                            "offset" : 134,
                                            "length" : 21
                                          }
                                        }
                                      },
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "EarlyTicket"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 12,
                                            "beginColumn" : 4,
                                            "endLine" : 12,
                                            "endColumn" : 23,
                                            "offset" : 205,
                                            "length" : 19
                                          }
                                        }
                                      },
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "LateTicket"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 13,
                                            "beginColumn" : 4,
                                            "endLine" : 13,
                                            "endColumn" : 23,
                                            "offset" : 228,
                                            "length" : 19
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              },
                              {
                                "type" : "Emv2Flow",
                                "identifier" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "HighSpO2LeadsToOD"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                      },
                                      "beginLine" : 19,
                                      "beginColumn" : 5,
                                      "endLine" : 19,
                                      "endColumn" : 87,
                                      "offset" : 484,
                                      "length" : 82
                                    }
                                  }
                                },
                                "kind" : {
                                  "type" : "FlowKind",
                                  "value" : "Path"
                                },
                                "sourcePropagation" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Emv2Propagation",
                                    "direction" : {
                                      "type" : "PropagationDirection",
                                      "value" : "In"
                                    },
                                    "propagationPoint" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "SpO2"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                          },
                                          "beginLine" : 19,
                                          "beginColumn" : 5,
                                          "endLine" : 19,
                                          "endColumn" : 87,
                                          "offset" : 484,
                                          "length" : 82
                                        }
                                      }
                                    },
                                    "errorTokens" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "SpO2ValueHigh"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 16,
                                            "beginColumn" : 5,
                                            "endLine" : 16,
                                            "endColumn" : 26,
                                            "offset" : 287,
                                            "length" : 21
                                          }
                                        }
                                      }
                                    ]
                                  }
                                },
                                "sinkPropagation" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Emv2Propagation",
                                    "direction" : {
                                      "type" : "PropagationDirection",
                                      "value" : "Out"
                                    },
                                    "propagationPoint" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "CmdPumpNorm"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                          },
                                          "beginLine" : 17,
                                          "beginColumn" : 5,
                                          "endLine" : 17,
                                          "endColumn" : 75,
                                          "offset" : 400,
                                          "length" : 70
                                        }
                                      }
                                    },
                                    "errorTokens" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "TicketTooLong"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 9,
                                            "beginColumn" : 4,
                                            "endLine" : 9,
                                            "endColumn" : 25,
                                            "offset" : 134,
                                            "length" : 21
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              },
                              {
                                "type" : "Emv2Flow",
                                "identifier" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "EarlySpO2LeadsToLate"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                      },
                                      "beginLine" : 20,
                                      "beginColumn" : 5,
                                      "endLine" : 20,
                                      "endColumn" : 83,
                                      "offset" : 571,
                                      "length" : 78
                                    }
                                  }
                                },
                                "kind" : {
                                  "type" : "FlowKind",
                                  "value" : "Path"
                                },
                                "sourcePropagation" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Emv2Propagation",
                                    "direction" : {
                                      "type" : "PropagationDirection",
                                      "value" : "In"
                                    },
                                    "propagationPoint" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "SpO2"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                          },
                                          "beginLine" : 20,
                                          "beginColumn" : 5,
                                          "endLine" : 20,
                                          "endColumn" : 83,
                                          "offset" : 571,
                                          "length" : 78
                                        }
                                      }
                                    },
                                    "errorTokens" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "SpO2Early"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 18,
                                            "beginColumn" : 4,
                                            "endLine" : 18,
                                            "endColumn" : 21,
                                            "offset" : 336,
                                            "length" : 17
                                          }
                                        }
                                      }
                                    ]
                                  }
                                },
                                "sinkPropagation" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Emv2Propagation",
                                    "direction" : {
                                      "type" : "PropagationDirection",
                                      "value" : "Out"
                                    },
                                    "propagationPoint" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "CmdPumpNorm"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                          },
                                          "beginLine" : 17,
                                          "beginColumn" : 5,
                                          "endLine" : 17,
                                          "endColumn" : 75,
                                          "offset" : 400,
                                          "length" : 70
                                        }
                                      }
                                    },
                                    "errorTokens" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "LateTicket"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 13,
                                            "beginColumn" : 4,
                                            "endLine" : 13,
                                            "endColumn" : 23,
                                            "offset" : 228,
                                            "length" : 19
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              }
                            ],
                            "componentBehavior" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Emv2BehaviorSection",
                                "events" : [
                                  {
                                    "type" : "ErrorEvent",
                                    "id" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "SoftwareFailure"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                          },
                                          "beginLine" : 26,
                                          "beginColumn" : 5,
                                          "endLine" : 26,
                                          "endColumn" : 34,
                                          "offset" : 454,
                                          "length" : 29
                                        }
                                      }
                                    }
                                  }
                                ],
                                "transitions" : [
                                  {
                                    "type" : "ErrorTransition",
                                    "id" : {
                                      "type" : "None"
                                    },
                                    "sourceState" : {
                                      "type" : "Name",
                                      "name" : ["Simple_PCA_Errors", "AppStatus", "Normal"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                          },
                                          "beginLine" : 28,
                                          "beginColumn" : 5,
                                          "endLine" : 28,
                                          "endColumn" : 28,
                                          "offset" : 498,
                                          "length" : 23
                                        }
                                      }
                                    },
                                    "condition" : {
                                      "type" : "ConditionTrigger",
                                      "events" : [
                                      ],
                                      "propagationPoints" : [
                                        {
                                          "type" : "Emv2Propagation",
                                          "direction" : {
                                            "type" : "PropagationDirection",
                                            "value" : "In"
                                          },
                                          "propagationPoint" : {
                                            "type" : "Name",
                                            "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "SpO2"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                                },
                                                "beginLine" : 7,
                                                "beginColumn" : 4,
                                                "endLine" : 7,
                                                "endColumn" : 29,
                                                "offset" : 74,
                                                "length" : 25
                                              }
                                            }
                                          },
                                          "errorTokens" : [
                                            {
                                              "type" : "Name",
                                              "name" : ["Simple_PCA_Errors", "SpO2ValueHigh"],
                                              "pos" : {
                                                "type" : "Some",
                                                "value" : {
                                                  "type" : "Position",
                                                  "uriOpt" : {
                                                    "type" : "Some",
                                                    "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                  },
                                                  "beginLine" : 16,
                                                  "beginColumn" : 5,
                                                  "endLine" : 16,
                                                  "endColumn" : 26,
                                                  "offset" : 287,
                                                  "length" : 21
                                                }
                                              }
                                            },
                                            {
                                              "type" : "Name",
                                              "name" : ["Simple_PCA_Errors", "SpO2Early"],
                                              "pos" : {
                                                "type" : "Some",
                                                "value" : {
                                                  "type" : "Position",
                                                  "uriOpt" : {
                                                    "type" : "Some",
                                                    "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                  },
                                                  "beginLine" : 18,
                                                  "beginColumn" : 4,
                                                  "endLine" : 18,
                                                  "endColumn" : 21,
                                                  "offset" : 336,
                                                  "length" : 17
                                                }
                                              }
                                            },
                                            {
                                              "type" : "Name",
                                              "name" : ["Simple_PCA_Errors", "SpO2Late"],
                                              "pos" : {
                                                "type" : "Some",
                                                "value" : {
                                                  "type" : "Position",
                                                  "uriOpt" : {
                                                    "type" : "Some",
                                                    "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                  },
                                                  "beginLine" : 19,
                                                  "beginColumn" : 4,
                                                  "endLine" : 19,
                                                  "endColumn" : 20,
                                                  "offset" : 357,
                                                  "length" : 16
                                                }
                                              }
                                            },
                                            {
                                              "type" : "Name",
                                              "name" : ["Simple_PCA_Errors", "NoSpO2"],
                                              "pos" : {
                                                "type" : "Some",
                                                "value" : {
                                                  "type" : "Position",
                                                  "uriOpt" : {
                                                    "type" : "Some",
                                                    "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                  },
                                                  "beginLine" : 20,
                                                  "beginColumn" : 5,
                                                  "endLine" : 20,
                                                  "endColumn" : 19,
                                                  "offset" : 378,
                                                  "length" : 14
                                                }
                                              }
                                            },
                                            {
                                              "type" : "Name",
                                              "name" : ["Simple_PCA_Errors", "SpO2ValueLow"],
                                              "pos" : {
                                                "type" : "Some",
                                                "value" : {
                                                  "type" : "Position",
                                                  "uriOpt" : {
                                                    "type" : "Some",
                                                    "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                  },
                                                  "beginLine" : 17,
                                                  "beginColumn" : 4,
                                                  "endLine" : 17,
                                                  "endColumn" : 24,
                                                  "offset" : 312,
                                                  "length" : 20
                                                }
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "targetState" : {
                                      "type" : "Name",
                                      "name" : ["Simple_PCA_Errors", "AppStatus", "Normal"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                          },
                                          "beginLine" : 28,
                                          "beginColumn" : 5,
                                          "endLine" : 28,
                                          "endColumn" : 28,
                                          "offset" : 498,
                                          "length" : 23
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type" : "ErrorTransition",
                                    "id" : {
                                      "type" : "None"
                                    },
                                    "sourceState" : {
                                      "type" : "Name",
                                      "name" : ["Simple_PCA_Errors", "AppStatus", "Normal"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                          },
                                          "beginLine" : 28,
                                          "beginColumn" : 5,
                                          "endLine" : 28,
                                          "endColumn" : 28,
                                          "offset" : 498,
                                          "length" : 23
                                        }
                                      }
                                    },
                                    "condition" : {
                                      "type" : "ConditionTrigger",
                                      "events" : [
                                      ],
                                      "propagationPoints" : [
                                        {
                                          "type" : "Emv2Propagation",
                                          "direction" : {
                                            "type" : "PropagationDirection",
                                            "value" : "In"
                                          },
                                          "propagationPoint" : {
                                            "type" : "Name",
                                            "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "SpO2"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                                },
                                                "beginLine" : 7,
                                                "beginColumn" : 4,
                                                "endLine" : 7,
                                                "endColumn" : 29,
                                                "offset" : 74,
                                                "length" : 25
                                              }
                                            }
                                          },
                                          "errorTokens" : [
                                            {
                                              "type" : "Name",
                                              "name" : ["Simple_PCA_Errors", "SpO2ValueHigh"],
                                              "pos" : {
                                                "type" : "Some",
                                                "value" : {
                                                  "type" : "Position",
                                                  "uriOpt" : {
                                                    "type" : "Some",
                                                    "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                  },
                                                  "beginLine" : 16,
                                                  "beginColumn" : 5,
                                                  "endLine" : 16,
                                                  "endColumn" : 26,
                                                  "offset" : 287,
                                                  "length" : 21
                                                }
                                              }
                                            },
                                            {
                                              "type" : "Name",
                                              "name" : ["Simple_PCA_Errors", "SpO2Early"],
                                              "pos" : {
                                                "type" : "Some",
                                                "value" : {
                                                  "type" : "Position",
                                                  "uriOpt" : {
                                                    "type" : "Some",
                                                    "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                  },
                                                  "beginLine" : 18,
                                                  "beginColumn" : 4,
                                                  "endLine" : 18,
                                                  "endColumn" : 21,
                                                  "offset" : 336,
                                                  "length" : 17
                                                }
                                              }
                                            },
                                            {
                                              "type" : "Name",
                                              "name" : ["Simple_PCA_Errors", "SpO2Late"],
                                              "pos" : {
                                                "type" : "Some",
                                                "value" : {
                                                  "type" : "Position",
                                                  "uriOpt" : {
                                                    "type" : "Some",
                                                    "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                  },
                                                  "beginLine" : 19,
                                                  "beginColumn" : 4,
                                                  "endLine" : 19,
                                                  "endColumn" : 20,
                                                  "offset" : 357,
                                                  "length" : 16
                                                }
                                              }
                                            },
                                            {
                                              "type" : "Name",
                                              "name" : ["Simple_PCA_Errors", "NoSpO2"],
                                              "pos" : {
                                                "type" : "Some",
                                                "value" : {
                                                  "type" : "Position",
                                                  "uriOpt" : {
                                                    "type" : "Some",
                                                    "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                  },
                                                  "beginLine" : 20,
                                                  "beginColumn" : 5,
                                                  "endLine" : 20,
                                                  "endColumn" : 19,
                                                  "offset" : 378,
                                                  "length" : 14
                                                }
                                              }
                                            },
                                            {
                                              "type" : "Name",
                                              "name" : ["Simple_PCA_Errors", "SpO2ValueLow"],
                                              "pos" : {
                                                "type" : "Some",
                                                "value" : {
                                                  "type" : "Position",
                                                  "uriOpt" : {
                                                    "type" : "Some",
                                                    "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                  },
                                                  "beginLine" : 17,
                                                  "beginColumn" : 4,
                                                  "endLine" : 17,
                                                  "endColumn" : 24,
                                                  "offset" : 312,
                                                  "length" : 20
                                                }
                                              }
                                            }
                                          ]
                                        }
                                      ]
                                    },
                                    "targetState" : {
                                      "type" : "Name",
                                      "name" : ["Simple_PCA_Errors", "AppStatus", "DetectedError"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                          },
                                          "beginLine" : 29,
                                          "beginColumn" : 5,
                                          "endLine" : 29,
                                          "endColumn" : 27,
                                          "offset" : 526,
                                          "length" : 22
                                        }
                                      }
                                    }
                                  },
                                  {
                                    "type" : "ErrorTransition",
                                    "id" : {
                                      "type" : "None"
                                    },
                                    "sourceState" : {
                                      "type" : "Name",
                                      "name" : ["Simple_PCA_Errors", "AppStatus", "Normal"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                          },
                                          "beginLine" : 28,
                                          "beginColumn" : 5,
                                          "endLine" : 28,
                                          "endColumn" : 28,
                                          "offset" : 498,
                                          "length" : 23
                                        }
                                      }
                                    },
                                    "condition" : {
                                      "type" : "ConditionTrigger",
                                      "events" : [
                                        {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "SoftwareFailure"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                              },
                                              "beginLine" : 26,
                                              "beginColumn" : 5,
                                              "endLine" : 26,
                                              "endColumn" : 34,
                                              "offset" : 454,
                                              "length" : 29
                                            }
                                          }
                                        }
                                      ],
                                      "propagationPoints" : [
                                      ]
                                    },
                                    "targetState" : {
                                      "type" : "Name",
                                      "name" : ["Simple_PCA_Errors", "AppStatus", "UndetectedError"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                          },
                                          "beginLine" : 30,
                                          "beginColumn" : 5,
                                          "endLine" : 30,
                                          "endColumn" : 29,
                                          "offset" : 553,
                                          "length" : 24
                                        }
                                      }
                                    }
                                  }
                                ],
                                "propagations" : [
                                  {
                                    "type" : "ErrorPropagation",
                                    "id" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Name",
                                        "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "InadvertantPump"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                            },
                                            "beginLine" : 45,
                                            "beginColumn" : 5,
                                            "endLine" : 45,
                                            "endColumn" : 83,
                                            "offset" : 1451,
                                            "length" : 78
                                          }
                                        }
                                      }
                                    },
                                    "source" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Normal"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 28,
                                            "beginColumn" : 5,
                                            "endLine" : 28,
                                            "endColumn" : 28,
                                            "offset" : 498,
                                            "length" : 23
                                          }
                                        }
                                      }
                                    ],
                                    "condition" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "ConditionTrigger",
                                        "events" : [
                                        ],
                                        "propagationPoints" : [
                                          {
                                            "type" : "Emv2Propagation",
                                            "direction" : {
                                              "type" : "PropagationDirection",
                                              "value" : "In"
                                            },
                                            "propagationPoint" : {
                                              "type" : "Name",
                                              "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "SpO2"],
                                              "pos" : {
                                                "type" : "Some",
                                                "value" : {
                                                  "type" : "Position",
                                                  "uriOpt" : {
                                                    "type" : "Some",
                                                    "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                                  },
                                                  "beginLine" : 7,
                                                  "beginColumn" : 4,
                                                  "endLine" : 7,
                                                  "endColumn" : 29,
                                                  "offset" : 74,
                                                  "length" : 25
                                                }
                                              }
                                            },
                                            "errorTokens" : [
                                              {
                                                "type" : "Name",
                                                "name" : ["Simple_PCA_Errors", "SpO2ValueHigh"],
                                                "pos" : {
                                                  "type" : "Some",
                                                  "value" : {
                                                    "type" : "Position",
                                                    "uriOpt" : {
                                                      "type" : "Some",
                                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                    },
                                                    "beginLine" : 16,
                                                    "beginColumn" : 5,
                                                    "endLine" : 16,
                                                    "endColumn" : 26,
                                                    "offset" : 287,
                                                    "length" : 21
                                                  }
                                                }
                                              },
                                              {
                                                "type" : "Name",
                                                "name" : ["Simple_PCA_Errors", "SpO2Early"],
                                                "pos" : {
                                                  "type" : "Some",
                                                  "value" : {
                                                    "type" : "Position",
                                                    "uriOpt" : {
                                                      "type" : "Some",
                                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                    },
                                                    "beginLine" : 18,
                                                    "beginColumn" : 4,
                                                    "endLine" : 18,
                                                    "endColumn" : 21,
                                                    "offset" : 336,
                                                    "length" : 17
                                                  }
                                                }
                                              },
                                              {
                                                "type" : "Name",
                                                "name" : ["Simple_PCA_Errors", "SpO2Late"],
                                                "pos" : {
                                                  "type" : "Some",
                                                  "value" : {
                                                    "type" : "Position",
                                                    "uriOpt" : {
                                                      "type" : "Some",
                                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                    },
                                                    "beginLine" : 19,
                                                    "beginColumn" : 4,
                                                    "endLine" : 19,
                                                    "endColumn" : 20,
                                                    "offset" : 357,
                                                    "length" : 16
                                                  }
                                                }
                                              },
                                              {
                                                "type" : "Name",
                                                "name" : ["Simple_PCA_Errors", "NoSpO2"],
                                                "pos" : {
                                                  "type" : "Some",
                                                  "value" : {
                                                    "type" : "Position",
                                                    "uriOpt" : {
                                                      "type" : "Some",
                                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                    },
                                                    "beginLine" : 20,
                                                    "beginColumn" : 5,
                                                    "endLine" : 20,
                                                    "endColumn" : 19,
                                                    "offset" : 378,
                                                    "length" : 14
                                                  }
                                                }
                                              },
                                              {
                                                "type" : "Name",
                                                "name" : ["Simple_PCA_Errors", "SpO2ValueLow"],
                                                "pos" : {
                                                  "type" : "Some",
                                                  "value" : {
                                                    "type" : "Position",
                                                    "uriOpt" : {
                                                      "type" : "Some",
                                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                    },
                                                    "beginLine" : 17,
                                                    "beginColumn" : 4,
                                                    "endLine" : 17,
                                                    "endColumn" : 24,
                                                    "offset" : 312,
                                                    "length" : 20
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    },
                                    "target" : [
                                      {
                                        "type" : "Emv2Propagation",
                                        "direction" : {
                                          "type" : "PropagationDirection",
                                          "value" : "Out"
                                        },
                                        "propagationPoint" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "CmdPumpNorm"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                              },
                                              "beginLine" : 8,
                                              "beginColumn" : 4,
                                              "endLine" : 8,
                                              "endColumn" : 37,
                                              "offset" : 103,
                                              "length" : 33
                                            }
                                          }
                                        },
                                        "errorTokens" : [
                                          {
                                            "type" : "Name",
                                            "name" : ["Simple_PCA_Errors", "TicketTooLong"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                },
                                                "beginLine" : 9,
                                                "beginColumn" : 4,
                                                "endLine" : 9,
                                                "endColumn" : 25,
                                                "offset" : 134,
                                                "length" : 21
                                              }
                                            }
                                          },
                                          {
                                            "type" : "Name",
                                            "name" : ["Simple_PCA_Errors", "EarlyTicket"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                },
                                                "beginLine" : 12,
                                                "beginColumn" : 4,
                                                "endLine" : 12,
                                                "endColumn" : 23,
                                                "offset" : 205,
                                                "length" : 19
                                              }
                                            }
                                          },
                                          {
                                            "type" : "Name",
                                            "name" : ["Simple_PCA_Errors", "LateTicket"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                },
                                                "beginLine" : 13,
                                                "beginColumn" : 4,
                                                "endLine" : 13,
                                                "endColumn" : 23,
                                                "offset" : 228,
                                                "length" : 19
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "type" : "ErrorPropagation",
                                    "id" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Name",
                                        "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "MissingInfo"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                            },
                                            "beginLine" : 46,
                                            "beginColumn" : 5,
                                            "endLine" : 46,
                                            "endColumn" : 76,
                                            "offset" : 1534,
                                            "length" : 71
                                          }
                                        }
                                      }
                                    },
                                    "source" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Normal"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 28,
                                            "beginColumn" : 5,
                                            "endLine" : 28,
                                            "endColumn" : 28,
                                            "offset" : 498,
                                            "length" : 23
                                          }
                                        }
                                      }
                                    ],
                                    "condition" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "ConditionTrigger",
                                        "events" : [
                                        ],
                                        "propagationPoints" : [
                                          {
                                            "type" : "Emv2Propagation",
                                            "direction" : {
                                              "type" : "PropagationDirection",
                                              "value" : "In"
                                            },
                                            "propagationPoint" : {
                                              "type" : "Name",
                                              "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "SpO2"],
                                              "pos" : {
                                                "type" : "Some",
                                                "value" : {
                                                  "type" : "Position",
                                                  "uriOpt" : {
                                                    "type" : "Some",
                                                    "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                                  },
                                                  "beginLine" : 7,
                                                  "beginColumn" : 4,
                                                  "endLine" : 7,
                                                  "endColumn" : 29,
                                                  "offset" : 74,
                                                  "length" : 25
                                                }
                                              }
                                            },
                                            "errorTokens" : [
                                              {
                                                "type" : "Name",
                                                "name" : ["Simple_PCA_Errors", "SpO2ValueHigh"],
                                                "pos" : {
                                                  "type" : "Some",
                                                  "value" : {
                                                    "type" : "Position",
                                                    "uriOpt" : {
                                                      "type" : "Some",
                                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                    },
                                                    "beginLine" : 16,
                                                    "beginColumn" : 5,
                                                    "endLine" : 16,
                                                    "endColumn" : 26,
                                                    "offset" : 287,
                                                    "length" : 21
                                                  }
                                                }
                                              },
                                              {
                                                "type" : "Name",
                                                "name" : ["Simple_PCA_Errors", "SpO2Early"],
                                                "pos" : {
                                                  "type" : "Some",
                                                  "value" : {
                                                    "type" : "Position",
                                                    "uriOpt" : {
                                                      "type" : "Some",
                                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                    },
                                                    "beginLine" : 18,
                                                    "beginColumn" : 4,
                                                    "endLine" : 18,
                                                    "endColumn" : 21,
                                                    "offset" : 336,
                                                    "length" : 17
                                                  }
                                                }
                                              },
                                              {
                                                "type" : "Name",
                                                "name" : ["Simple_PCA_Errors", "SpO2Late"],
                                                "pos" : {
                                                  "type" : "Some",
                                                  "value" : {
                                                    "type" : "Position",
                                                    "uriOpt" : {
                                                      "type" : "Some",
                                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                    },
                                                    "beginLine" : 19,
                                                    "beginColumn" : 4,
                                                    "endLine" : 19,
                                                    "endColumn" : 20,
                                                    "offset" : 357,
                                                    "length" : 16
                                                  }
                                                }
                                              },
                                              {
                                                "type" : "Name",
                                                "name" : ["Simple_PCA_Errors", "NoSpO2"],
                                                "pos" : {
                                                  "type" : "Some",
                                                  "value" : {
                                                    "type" : "Position",
                                                    "uriOpt" : {
                                                      "type" : "Some",
                                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                    },
                                                    "beginLine" : 20,
                                                    "beginColumn" : 5,
                                                    "endLine" : 20,
                                                    "endColumn" : 19,
                                                    "offset" : 378,
                                                    "length" : 14
                                                  }
                                                }
                                              },
                                              {
                                                "type" : "Name",
                                                "name" : ["Simple_PCA_Errors", "SpO2ValueLow"],
                                                "pos" : {
                                                  "type" : "Some",
                                                  "value" : {
                                                    "type" : "Position",
                                                    "uriOpt" : {
                                                      "type" : "Some",
                                                      "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                    },
                                                    "beginLine" : 17,
                                                    "beginColumn" : 4,
                                                    "endLine" : 17,
                                                    "endColumn" : 24,
                                                    "offset" : 312,
                                                    "length" : 20
                                                  }
                                                }
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    },
                                    "target" : [
                                      {
                                        "type" : "Emv2Propagation",
                                        "direction" : {
                                          "type" : "PropagationDirection",
                                          "value" : "Out"
                                        },
                                        "propagationPoint" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "CmdPumpNorm"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                              },
                                              "beginLine" : 8,
                                              "beginColumn" : 4,
                                              "endLine" : 8,
                                              "endColumn" : 37,
                                              "offset" : 103,
                                              "length" : 33
                                            }
                                          }
                                        },
                                        "errorTokens" : [
                                          {
                                            "type" : "Name",
                                            "name" : ["Simple_PCA_Errors", "TicketTooLong"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                },
                                                "beginLine" : 9,
                                                "beginColumn" : 4,
                                                "endLine" : 9,
                                                "endColumn" : 25,
                                                "offset" : 134,
                                                "length" : 21
                                              }
                                            }
                                          },
                                          {
                                            "type" : "Name",
                                            "name" : ["Simple_PCA_Errors", "EarlyTicket"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                },
                                                "beginLine" : 12,
                                                "beginColumn" : 4,
                                                "endLine" : 12,
                                                "endColumn" : 23,
                                                "offset" : 205,
                                                "length" : 19
                                              }
                                            }
                                          },
                                          {
                                            "type" : "Name",
                                            "name" : ["Simple_PCA_Errors", "LateTicket"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                },
                                                "beginLine" : 13,
                                                "beginColumn" : 4,
                                                "endLine" : 13,
                                                "endColumn" : 23,
                                                "offset" : 228,
                                                "length" : 19
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "type" : "ErrorPropagation",
                                    "id" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Name",
                                        "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "EarlyInfo"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                            },
                                            "beginLine" : 47,
                                            "beginColumn" : 5,
                                            "endLine" : 47,
                                            "endColumn" : 61,
                                            "offset" : 1610,
                                            "length" : 56
                                          }
                                        }
                                      }
                                    },
                                    "source" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["DetectedError"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 29,
                                            "beginColumn" : 5,
                                            "endLine" : 29,
                                            "endColumn" : 27,
                                            "offset" : 526,
                                            "length" : 22
                                          }
                                        }
                                      }
                                    ],
                                    "condition" : {
                                      "type" : "None"
                                    },
                                    "target" : [
                                      {
                                        "type" : "Emv2Propagation",
                                        "direction" : {
                                          "type" : "PropagationDirection",
                                          "value" : "Out"
                                        },
                                        "propagationPoint" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "CmdPumpNorm"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                              },
                                              "beginLine" : 8,
                                              "beginColumn" : 4,
                                              "endLine" : 8,
                                              "endColumn" : 37,
                                              "offset" : 103,
                                              "length" : 33
                                            }
                                          }
                                        },
                                        "errorTokens" : [
                                          {
                                            "type" : "Name",
                                            "name" : ["Simple_PCA_Errors", "TicketTooLong"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                },
                                                "beginLine" : 9,
                                                "beginColumn" : 4,
                                                "endLine" : 9,
                                                "endColumn" : 25,
                                                "offset" : 134,
                                                "length" : 21
                                              }
                                            }
                                          },
                                          {
                                            "type" : "Name",
                                            "name" : ["Simple_PCA_Errors", "EarlyTicket"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                },
                                                "beginLine" : 12,
                                                "beginColumn" : 4,
                                                "endLine" : 12,
                                                "endColumn" : 23,
                                                "offset" : 205,
                                                "length" : 19
                                              }
                                            }
                                          },
                                          {
                                            "type" : "Name",
                                            "name" : ["Simple_PCA_Errors", "LateTicket"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                },
                                                "beginLine" : 13,
                                                "beginColumn" : 4,
                                                "endLine" : 13,
                                                "endColumn" : 23,
                                                "offset" : 228,
                                                "length" : 19
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  },
                                  {
                                    "type" : "ErrorPropagation",
                                    "id" : {
                                      "type" : "Some",
                                      "value" : {
                                        "type" : "Name",
                                        "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "SoftwareIssues"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                            },
                                            "beginLine" : 48,
                                            "beginColumn" : 5,
                                            "endLine" : 48,
                                            "endColumn" : 96,
                                            "offset" : 1671,
                                            "length" : 91
                                          }
                                        }
                                      }
                                    },
                                    "source" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["UndetectedError"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 30,
                                            "beginColumn" : 5,
                                            "endLine" : 30,
                                            "endColumn" : 29,
                                            "offset" : 553,
                                            "length" : 24
                                          }
                                        }
                                      }
                                    ],
                                    "condition" : {
                                      "type" : "None"
                                    },
                                    "target" : [
                                      {
                                        "type" : "Emv2Propagation",
                                        "direction" : {
                                          "type" : "PropagationDirection",
                                          "value" : "Out"
                                        },
                                        "propagationPoint" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "CmdPumpNorm"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                              },
                                              "beginLine" : 8,
                                              "beginColumn" : 4,
                                              "endLine" : 8,
                                              "endColumn" : 37,
                                              "offset" : 103,
                                              "length" : 33
                                            }
                                          }
                                        },
                                        "errorTokens" : [
                                          {
                                            "type" : "Name",
                                            "name" : ["Simple_PCA_Errors", "TicketTooLong"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                },
                                                "beginLine" : 9,
                                                "beginColumn" : 4,
                                                "endLine" : 9,
                                                "endColumn" : 25,
                                                "offset" : 134,
                                                "length" : 21
                                              }
                                            }
                                          },
                                          {
                                            "type" : "Name",
                                            "name" : ["Simple_PCA_Errors", "EarlyTicket"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                },
                                                "beginLine" : 12,
                                                "beginColumn" : 4,
                                                "endLine" : 12,
                                                "endColumn" : 23,
                                                "offset" : 205,
                                                "length" : 19
                                              }
                                            }
                                          },
                                          {
                                            "type" : "Name",
                                            "name" : ["Simple_PCA_Errors", "LateTicket"],
                                            "pos" : {
                                              "type" : "Some",
                                              "value" : {
                                                "type" : "Position",
                                                "uriOpt" : {
                                                  "type" : "Some",
                                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                                },
                                                "beginLine" : 13,
                                                "beginColumn" : 4,
                                                "endLine" : 13,
                                                "endColumn" : 23,
                                                "offset" : 228,
                                                "length" : 19
                                              }
                                            }
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            },
                            "properties" : [
                              {
                                "type" : "Property",
                                "name" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "STPA::Hazards"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                      },
                                      "beginLine" : 7,
                                      "beginColumn" : 2,
                                      "endLine" : 7,
                                      "endColumn" : 137,
                                      "offset" : 166,
                                      "length" : 135
                                    }
                                  }
                                },
                                "propertyValues" : [
                                  {
                                    "type" : "RecordProp",
                                    "properties" : [
                                      {
                                        "type" : "Property",
                                        "name" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "STPA::Hazard.ID"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                              },
                                              "beginLine" : 43,
                                              "beginColumn" : 3,
                                              "endLine" : 43,
                                              "endColumn" : 18,
                                              "offset" : 1209,
                                              "length" : 15
                                            }
                                          }
                                        },
                                        "propertyValues" : [
                                          {
                                            "type" : "ValueProp",
                                            "value" : "Haz4"
                                          }
                                        ],
                                        "appliesTo" : [
                                        ]
                                      },
                                      {
                                        "type" : "Property",
                                        "name" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "STPA::Hazard.Description"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                              },
                                              "beginLine" : 45,
                                              "beginColumn" : 3,
                                              "endLine" : 45,
                                              "endColumn" : 27,
                                              "offset" : 1271,
                                              "length" : 24
                                            }
                                          }
                                        },
                                        "propertyValues" : [
                                          {
                                            "type" : "ValueProp",
                                            "value" : "App produces a ticket value higher than the actual value"
                                          }
                                        ],
                                        "appliesTo" : [
                                        ]
                                      }
                                    ]
                                  }
                                ],
                                "appliesTo" : [
                                  {
                                    "type" : "Emv2ElementRef",
                                    "kind" : {
                                      "type" : "Emv2ElementKind",
                                      "value" : "Propagation"
                                    },
                                    "name" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance.appLogic", "CmdPumpNorm"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                          },
                                          "beginLine" : 17,
                                          "beginColumn" : 5,
                                          "endLine" : 17,
                                          "endColumn" : 75,
                                          "offset" : 400,
                                          "length" : 70
                                        }
                                      }
                                    },
                                    "errorTypes" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "TicketTooLong"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 9,
                                            "beginColumn" : 4,
                                            "endLine" : 9,
                                            "endColumn" : 25,
                                            "offset" : 134,
                                            "length" : 21
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  {
                                    "type" : "Emv2ElementRef",
                                    "kind" : {
                                      "type" : "Emv2ElementKind",
                                      "value" : "Propagation"
                                    },
                                    "name" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance.appLogic", "CmdPumpNorm"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                          },
                                          "beginLine" : 17,
                                          "beginColumn" : 5,
                                          "endLine" : 17,
                                          "endColumn" : 75,
                                          "offset" : 400,
                                          "length" : 70
                                        }
                                      }
                                    },
                                    "errorTypes" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "EarlyTicket"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 12,
                                            "beginColumn" : 4,
                                            "endLine" : 12,
                                            "endColumn" : 23,
                                            "offset" : 205,
                                            "length" : 19
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type" : "Property",
                                "name" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "STPA::Hazards"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                      },
                                      "beginLine" : 7,
                                      "beginColumn" : 2,
                                      "endLine" : 7,
                                      "endColumn" : 137,
                                      "offset" : 166,
                                      "length" : 135
                                    }
                                  }
                                },
                                "propertyValues" : [
                                  {
                                    "type" : "RecordProp",
                                    "properties" : [
                                      {
                                        "type" : "Property",
                                        "name" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "STPA::Hazard.ID"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                              },
                                              "beginLine" : 43,
                                              "beginColumn" : 3,
                                              "endLine" : 43,
                                              "endColumn" : 18,
                                              "offset" : 1209,
                                              "length" : 15
                                            }
                                          }
                                        },
                                        "propertyValues" : [
                                          {
                                            "type" : "ValueProp",
                                            "value" : "Haz5"
                                          }
                                        ],
                                        "appliesTo" : [
                                        ]
                                      },
                                      {
                                        "type" : "Property",
                                        "name" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "STPA::Hazard.Description"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                              },
                                              "beginLine" : 45,
                                              "beginColumn" : 3,
                                              "endLine" : 45,
                                              "endColumn" : 27,
                                              "offset" : 1271,
                                              "length" : 24
                                            }
                                          }
                                        },
                                        "propertyValues" : [
                                          {
                                            "type" : "ValueProp",
                                            "value" : "App produces the ticket earlier than it is supposed to"
                                          }
                                        ],
                                        "appliesTo" : [
                                        ]
                                      }
                                    ]
                                  }
                                ],
                                "appliesTo" : [
                                  {
                                    "type" : "Emv2ElementRef",
                                    "kind" : {
                                      "type" : "Emv2ElementKind",
                                      "value" : "Propagation"
                                    },
                                    "name" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance.appLogic", "CmdPumpNorm"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                          },
                                          "beginLine" : 17,
                                          "beginColumn" : 5,
                                          "endLine" : 17,
                                          "endColumn" : 75,
                                          "offset" : 400,
                                          "length" : 70
                                        }
                                      }
                                    },
                                    "errorTypes" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "EarlyTicket"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 12,
                                            "beginColumn" : 4,
                                            "endLine" : 12,
                                            "endColumn" : 23,
                                            "offset" : 205,
                                            "length" : 19
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              },
                              {
                                "type" : "Property",
                                "name" : {
                                  "type" : "Name",
                                  "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "STPA::Hazards"],
                                  "pos" : {
                                    "type" : "Some",
                                    "value" : {
                                      "type" : "Position",
                                      "uriOpt" : {
                                        "type" : "Some",
                                        "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                      },
                                      "beginLine" : 7,
                                      "beginColumn" : 2,
                                      "endLine" : 7,
                                      "endColumn" : 137,
                                      "offset" : 166,
                                      "length" : 135
                                    }
                                  }
                                },
                                "propertyValues" : [
                                  {
                                    "type" : "RecordProp",
                                    "properties" : [
                                      {
                                        "type" : "Property",
                                        "name" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "STPA::Hazard.ID"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                              },
                                              "beginLine" : 43,
                                              "beginColumn" : 3,
                                              "endLine" : 43,
                                              "endColumn" : 18,
                                              "offset" : 1209,
                                              "length" : 15
                                            }
                                          }
                                        },
                                        "propertyValues" : [
                                          {
                                            "type" : "ValueProp",
                                            "value" : "Haz6"
                                          }
                                        ],
                                        "appliesTo" : [
                                        ]
                                      },
                                      {
                                        "type" : "Property",
                                        "name" : {
                                          "type" : "Name",
                                          "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "STPA::Hazard.Description"],
                                          "pos" : {
                                            "type" : "Some",
                                            "value" : {
                                              "type" : "Position",
                                              "uriOpt" : {
                                                "type" : "Some",
                                                "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                              },
                                              "beginLine" : 45,
                                              "beginColumn" : 3,
                                              "endLine" : 45,
                                              "endColumn" : 27,
                                              "offset" : 1271,
                                              "length" : 24
                                            }
                                          }
                                        },
                                        "propertyValues" : [
                                          {
                                            "type" : "ValueProp",
                                            "value" : "App produces the ticket latter than it is supposed to"
                                          }
                                        ],
                                        "appliesTo" : [
                                        ]
                                      }
                                    ]
                                  }
                                ],
                                "appliesTo" : [
                                  {
                                    "type" : "Emv2ElementRef",
                                    "kind" : {
                                      "type" : "Emv2ElementKind",
                                      "value" : "Propagation"
                                    },
                                    "name" : {
                                      "type" : "Name",
                                      "name" : ["PCA_Shutoff_System_imp_Instance.appLogic", "CmdPumpNorm"],
                                      "pos" : {
                                        "type" : "Some",
                                        "value" : {
                                          "type" : "Position",
                                          "uriOpt" : {
                                            "type" : "Some",
                                            "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                          },
                                          "beginLine" : 17,
                                          "beginColumn" : 5,
                                          "endLine" : 17,
                                          "endColumn" : 75,
                                          "offset" : 400,
                                          "length" : 70
                                        }
                                      }
                                    },
                                    "errorTypes" : [
                                      {
                                        "type" : "Name",
                                        "name" : ["Simple_PCA_Errors", "LateTicket"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                            },
                                            "beginLine" : 13,
                                            "beginColumn" : 4,
                                            "endLine" : 13,
                                            "endColumn" : 23,
                                            "offset" : 228,
                                            "length" : 19
                                          }
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    }
                  ],
                  "connections" : [
                    {
                      "type" : "Connection",
                      "name" : {
                        "type" : "Name",
                        "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx_measurement"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                            },
                            "beginLine" : 24,
                            "beginColumn" : 4,
                            "endLine" : 24,
                            "endColumn" : 78,
                            "offset" : 478,
                            "length" : 74
                          }
                        }
                      },
                      "src" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "patient"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                                },
                                "beginLine" : 21,
                                "beginColumn" : 4,
                                "endLine" : 21,
                                "endColumn" : 47,
                                "offset" : 364,
                                "length" : 43
                              }
                            }
                          },
                          "feature" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Name",
                              "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "fingerclip"],
                              "pos" : {
                                "type" : "Some",
                                "value" : {
                                  "type" : "Position",
                                  "uriOpt" : {
                                    "type" : "Some",
                                    "value" : "Simple_PCA_Shutoff\/packages\/PCA_Patient.aadl"
                                  },
                                  "beginLine" : 10,
                                  "beginColumn" : 4,
                                  "endLine" : 10,
                                  "endColumn" : 28,
                                  "offset" : 119,
                                  "length" : 24
                                }
                              }
                            }
                          },
                          "direction" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Direction",
                              "value" : "Out"
                            }
                          }
                        }
                      ],
                      "dst" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                                },
                                "beginLine" : 18,
                                "beginColumn" : 4,
                                "endLine" : 18,
                                "endColumn" : 47,
                                "offset" : 229,
                                "length" : 43
                              }
                            }
                          },
                          "feature" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Name",
                              "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "RefractedLight"],
                              "pos" : {
                                "type" : "Some",
                                "value" : {
                                  "type" : "Position",
                                  "uriOpt" : {
                                    "type" : "Some",
                                    "value" : "Simple_PCA_Shutoff\/packages\/PulseOx.aadl"
                                  },
                                  "beginLine" : 7,
                                  "beginColumn" : 4,
                                  "endLine" : 7,
                                  "endColumn" : 31,
                                  "offset" : 72,
                                  "length" : 27
                                }
                              }
                            }
                          },
                          "direction" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Direction",
                              "value" : "In"
                            }
                          }
                        }
                      ],
                      "kind" : {
                        "type" : "ConnectionKind",
                        "value" : "Feature"
                      },
                      "isBiDirectional" : false,
                      "connectionInstances" : [
                        {
                          "type" : "Name",
                          "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "fingerclip -> pulseOx", "RefractedLight"],
                          "pos" : {
                            "type" : "None"
                          }
                        }
                      ],
                      "properties" : [
                      ]
                    },
                    {
                      "type" : "Connection",
                      "name" : {
                        "type" : "Name",
                        "name" : ["PCA_Shutoff_System_imp_Instance", "spo2_logic"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                            },
                            "beginLine" : 25,
                            "beginColumn" : 4,
                            "endLine" : 25,
                            "endColumn" : 51,
                            "offset" : 556,
                            "length" : 47
                          }
                        }
                      },
                      "src" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                                },
                                "beginLine" : 18,
                                "beginColumn" : 4,
                                "endLine" : 18,
                                "endColumn" : 47,
                                "offset" : 229,
                                "length" : 43
                              }
                            }
                          },
                          "feature" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Name",
                              "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "SpO2"],
                              "pos" : {
                                "type" : "Some",
                                "value" : {
                                  "type" : "Position",
                                  "uriOpt" : {
                                    "type" : "Some",
                                    "value" : "Simple_PCA_Shutoff\/packages\/PulseOx.aadl"
                                  },
                                  "beginLine" : 8,
                                  "beginColumn" : 4,
                                  "endLine" : 8,
                                  "endColumn" : 30,
                                  "offset" : 103,
                                  "length" : 26
                                }
                              }
                            }
                          },
                          "direction" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Direction",
                              "value" : "Out"
                            }
                          }
                        }
                      ],
                      "dst" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                                },
                                "beginLine" : 19,
                                "beginColumn" : 4,
                                "endLine" : 19,
                                "endColumn" : 50,
                                "offset" : 276,
                                "length" : 46
                              }
                            }
                          },
                          "feature" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Name",
                              "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "SpO2"],
                              "pos" : {
                                "type" : "Some",
                                "value" : {
                                  "type" : "Position",
                                  "uriOpt" : {
                                    "type" : "Some",
                                    "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                  },
                                  "beginLine" : 7,
                                  "beginColumn" : 4,
                                  "endLine" : 7,
                                  "endColumn" : 29,
                                  "offset" : 74,
                                  "length" : 25
                                }
                              }
                            }
                          },
                          "direction" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Direction",
                              "value" : "In"
                            }
                          }
                        }
                      ],
                      "kind" : {
                        "type" : "ConnectionKind",
                        "value" : "Port"
                      },
                      "isBiDirectional" : false,
                      "connectionInstances" : [
                        {
                          "type" : "Name",
                          "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "SpO2 -> appLogic", "SpO2"],
                          "pos" : {
                            "type" : "None"
                          }
                        }
                      ],
                      "properties" : [
                      ]
                    },
                    {
                      "type" : "Connection",
                      "name" : {
                        "type" : "Name",
                        "name" : ["PCA_Shutoff_System_imp_Instance", "IVLine"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                            },
                            "beginLine" : 23,
                            "beginColumn" : 4,
                            "endLine" : 23,
                            "endColumn" : 53,
                            "offset" : 425,
                            "length" : 49
                          }
                        }
                      },
                      "src" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                                },
                                "beginLine" : 20,
                                "beginColumn" : 4,
                                "endLine" : 20,
                                "endColumn" : 38,
                                "offset" : 326,
                                "length" : 34
                              }
                            }
                          },
                          "feature" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Name",
                              "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "DrugFlow"],
                              "pos" : {
                                "type" : "Some",
                                "value" : {
                                  "type" : "Position",
                                  "uriOpt" : {
                                    "type" : "Some",
                                    "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                  },
                                  "beginLine" : 8,
                                  "beginColumn" : 4,
                                  "endLine" : 8,
                                  "endColumn" : 26,
                                  "offset" : 99,
                                  "length" : 22
                                }
                              }
                            }
                          },
                          "direction" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Direction",
                              "value" : "Out"
                            }
                          }
                        }
                      ],
                      "dst" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "patient"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                                },
                                "beginLine" : 21,
                                "beginColumn" : 4,
                                "endLine" : 21,
                                "endColumn" : 47,
                                "offset" : 364,
                                "length" : 43
                              }
                            }
                          },
                          "feature" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Name",
                              "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "vein"],
                              "pos" : {
                                "type" : "Some",
                                "value" : {
                                  "type" : "Position",
                                  "uriOpt" : {
                                    "type" : "Some",
                                    "value" : "Simple_PCA_Shutoff\/packages\/PCA_Patient.aadl"
                                  },
                                  "beginLine" : 9,
                                  "beginColumn" : 4,
                                  "endLine" : 9,
                                  "endColumn" : 21,
                                  "offset" : 98,
                                  "length" : 17
                                }
                              }
                            }
                          },
                          "direction" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Direction",
                              "value" : "In"
                            }
                          }
                        }
                      ],
                      "kind" : {
                        "type" : "ConnectionKind",
                        "value" : "Feature"
                      },
                      "isBiDirectional" : false,
                      "connectionInstances" : [
                        {
                          "type" : "Name",
                          "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "DrugFlow -> patient", "vein"],
                          "pos" : {
                            "type" : "None"
                          }
                        }
                      ],
                      "properties" : [
                      ]
                    },
                    {
                      "type" : "Connection",
                      "name" : {
                        "type" : "Name",
                        "name" : ["PCA_Shutoff_System_imp_Instance", "pumpcommand_logic"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                            },
                            "beginLine" : 26,
                            "beginColumn" : 4,
                            "endLine" : 26,
                            "endColumn" : 72,
                            "offset" : 607,
                            "length" : 68
                          }
                        }
                      },
                      "src" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                                },
                                "beginLine" : 19,
                                "beginColumn" : 4,
                                "endLine" : 19,
                                "endColumn" : 50,
                                "offset" : 276,
                                "length" : 46
                              }
                            }
                          },
                          "feature" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Name",
                              "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "CmdPumpNorm"],
                              "pos" : {
                                "type" : "Some",
                                "value" : {
                                  "type" : "Position",
                                  "uriOpt" : {
                                    "type" : "Some",
                                    "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                  },
                                  "beginLine" : 8,
                                  "beginColumn" : 4,
                                  "endLine" : 8,
                                  "endColumn" : 37,
                                  "offset" : 103,
                                  "length" : 33
                                }
                              }
                            }
                          },
                          "direction" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Direction",
                              "value" : "Out"
                            }
                          }
                        }
                      ],
                      "dst" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                                },
                                "beginLine" : 20,
                                "beginColumn" : 4,
                                "endLine" : 20,
                                "endColumn" : 38,
                                "offset" : 326,
                                "length" : 34
                              }
                            }
                          },
                          "feature" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Name",
                              "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "TicketInput"],
                              "pos" : {
                                "type" : "Some",
                                "value" : {
                                  "type" : "Position",
                                  "uriOpt" : {
                                    "type" : "Some",
                                    "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                  },
                                  "beginLine" : 7,
                                  "beginColumn" : 4,
                                  "endLine" : 7,
                                  "endColumn" : 36,
                                  "offset" : 63,
                                  "length" : 32
                                }
                              }
                            }
                          },
                          "direction" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Direction",
                              "value" : "In"
                            }
                          }
                        }
                      ],
                      "kind" : {
                        "type" : "ConnectionKind",
                        "value" : "Port"
                      },
                      "isBiDirectional" : false,
                      "connectionInstances" : [
                        {
                          "type" : "Name",
                          "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "CmdPumpNorm -> pcaPump", "TicketInput"],
                          "pos" : {
                            "type" : "None"
                          }
                        }
                      ],
                      "properties" : [
                      ]
                    }
                  ],
                  "connectionInstances" : [
                    {
                      "type" : "ConnectionInstance",
                      "name" : {
                        "type" : "Name",
                        "name" : ["PCA_Shutoff_System_imp_Instance", "patient.fingerclip -> pulseOx.RefractedLight"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                            },
                            "beginLine" : 24,
                            "beginColumn" : 4,
                            "endLine" : 24,
                            "endColumn" : 78,
                            "offset" : 478,
                            "length" : 74
                          }
                        }
                      },
                      "src" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["PCA_Shutoff_System_imp_Instance", "patient"],
                          "pos" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Position",
                              "uriOpt" : {
                                "type" : "Some",
                                "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                              },
                              "beginLine" : 21,
                              "beginColumn" : 4,
                              "endLine" : 21,
                              "endColumn" : 47,
                              "offset" : 364,
                              "length" : 43
                            }
                          }
                        },
                        "feature" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "fingerclip"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCA_Patient.aadl"
                                },
                                "beginLine" : 10,
                                "beginColumn" : 4,
                                "endLine" : 10,
                                "endColumn" : 28,
                                "offset" : 119,
                                "length" : 24
                              }
                            }
                          }
                        },
                        "direction" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Direction",
                            "value" : "Out"
                          }
                        }
                      },
                      "dst" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx"],
                          "pos" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Position",
                              "uriOpt" : {
                                "type" : "Some",
                                "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                              },
                              "beginLine" : 18,
                              "beginColumn" : 4,
                              "endLine" : 18,
                              "endColumn" : 47,
                              "offset" : 229,
                              "length" : 43
                            }
                          }
                        },
                        "feature" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "RefractedLight"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PulseOx.aadl"
                                },
                                "beginLine" : 7,
                                "beginColumn" : 4,
                                "endLine" : 7,
                                "endColumn" : 31,
                                "offset" : 72,
                                "length" : 27
                              }
                            }
                          }
                        },
                        "direction" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Direction",
                            "value" : "In"
                          }
                        }
                      },
                      "kind" : {
                        "type" : "ConnectionKind",
                        "value" : "Feature"
                      },
                      "connectionRefs" : [
                        {
                          "type" : "ConnectionReference",
                          "name" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx_measurement"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                                },
                                "beginLine" : 24,
                                "beginColumn" : 4,
                                "endLine" : 24,
                                "endColumn" : 78,
                                "offset" : 478,
                                "length" : 74
                              }
                            }
                          },
                          "context" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                                },
                                "beginLine" : 16,
                                "beginColumn" : 2,
                                "endLine" : 33,
                                "endColumn" : 29,
                                "offset" : 165,
                                "length" : 705
                              }
                            }
                          },
                          "isParent" : true
                        }
                      ],
                      "properties" : [
                      ]
                    },
                    {
                      "type" : "ConnectionInstance",
                      "name" : {
                        "type" : "Name",
                        "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx.SpO2 -> appLogic.SpO2"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                            },
                            "beginLine" : 25,
                            "beginColumn" : 4,
                            "endLine" : 25,
                            "endColumn" : 51,
                            "offset" : 556,
                            "length" : 47
                          }
                        }
                      },
                      "src" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx"],
                          "pos" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Position",
                              "uriOpt" : {
                                "type" : "Some",
                                "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                              },
                              "beginLine" : 18,
                              "beginColumn" : 4,
                              "endLine" : 18,
                              "endColumn" : 47,
                              "offset" : 229,
                              "length" : 43
                            }
                          }
                        },
                        "feature" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "pulseOx", "SpO2"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PulseOx.aadl"
                                },
                                "beginLine" : 8,
                                "beginColumn" : 4,
                                "endLine" : 8,
                                "endColumn" : 30,
                                "offset" : 103,
                                "length" : 26
                              }
                            }
                          }
                        },
                        "direction" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Direction",
                            "value" : "Out"
                          }
                        }
                      },
                      "dst" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic"],
                          "pos" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Position",
                              "uriOpt" : {
                                "type" : "Some",
                                "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                              },
                              "beginLine" : 19,
                              "beginColumn" : 4,
                              "endLine" : 19,
                              "endColumn" : 50,
                              "offset" : 276,
                              "length" : 46
                            }
                          }
                        },
                        "feature" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "SpO2"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                },
                                "beginLine" : 7,
                                "beginColumn" : 4,
                                "endLine" : 7,
                                "endColumn" : 29,
                                "offset" : 74,
                                "length" : 25
                              }
                            }
                          }
                        },
                        "direction" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Direction",
                            "value" : "In"
                          }
                        }
                      },
                      "kind" : {
                        "type" : "ConnectionKind",
                        "value" : "Port"
                      },
                      "connectionRefs" : [
                        {
                          "type" : "ConnectionReference",
                          "name" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "spo2_logic"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                                },
                                "beginLine" : 25,
                                "beginColumn" : 4,
                                "endLine" : 25,
                                "endColumn" : 51,
                                "offset" : 556,
                                "length" : 47
                              }
                            }
                          },
                          "context" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                                },
                                "beginLine" : 16,
                                "beginColumn" : 2,
                                "endLine" : 33,
                                "endColumn" : 29,
                                "offset" : 165,
                                "length" : 705
                              }
                            }
                          },
                          "isParent" : true
                        }
                      ],
                      "properties" : [
                      ]
                    },
                    {
                      "type" : "ConnectionInstance",
                      "name" : {
                        "type" : "Name",
                        "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump.DrugFlow -> patient.vein"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                            },
                            "beginLine" : 23,
                            "beginColumn" : 4,
                            "endLine" : 23,
                            "endColumn" : 53,
                            "offset" : 425,
                            "length" : 49
                          }
                        }
                      },
                      "src" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump"],
                          "pos" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Position",
                              "uriOpt" : {
                                "type" : "Some",
                                "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                              },
                              "beginLine" : 20,
                              "beginColumn" : 4,
                              "endLine" : 20,
                              "endColumn" : 38,
                              "offset" : 326,
                              "length" : 34
                            }
                          }
                        },
                        "feature" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "DrugFlow"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                },
                                "beginLine" : 8,
                                "beginColumn" : 4,
                                "endLine" : 8,
                                "endColumn" : 26,
                                "offset" : 99,
                                "length" : 22
                              }
                            }
                          }
                        },
                        "direction" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Direction",
                            "value" : "Out"
                          }
                        }
                      },
                      "dst" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["PCA_Shutoff_System_imp_Instance", "patient"],
                          "pos" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Position",
                              "uriOpt" : {
                                "type" : "Some",
                                "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                              },
                              "beginLine" : 21,
                              "beginColumn" : 4,
                              "endLine" : 21,
                              "endColumn" : 47,
                              "offset" : 364,
                              "length" : 43
                            }
                          }
                        },
                        "feature" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "patient", "vein"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCA_Patient.aadl"
                                },
                                "beginLine" : 9,
                                "beginColumn" : 4,
                                "endLine" : 9,
                                "endColumn" : 21,
                                "offset" : 98,
                                "length" : 17
                              }
                            }
                          }
                        },
                        "direction" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Direction",
                            "value" : "In"
                          }
                        }
                      },
                      "kind" : {
                        "type" : "ConnectionKind",
                        "value" : "Feature"
                      },
                      "connectionRefs" : [
                        {
                          "type" : "ConnectionReference",
                          "name" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "IVLine"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                                },
                                "beginLine" : 23,
                                "beginColumn" : 4,
                                "endLine" : 23,
                                "endColumn" : 53,
                                "offset" : 425,
                                "length" : 49
                              }
                            }
                          },
                          "context" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                                },
                                "beginLine" : 16,
                                "beginColumn" : 2,
                                "endLine" : 33,
                                "endColumn" : 29,
                                "offset" : 165,
                                "length" : 705
                              }
                            }
                          },
                          "isParent" : true
                        }
                      ],
                      "properties" : [
                      ]
                    },
                    {
                      "type" : "ConnectionInstance",
                      "name" : {
                        "type" : "Name",
                        "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic.CmdPumpNorm -> pcaPump.TicketInput"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                            },
                            "beginLine" : 26,
                            "beginColumn" : 4,
                            "endLine" : 26,
                            "endColumn" : 72,
                            "offset" : 607,
                            "length" : 68
                          }
                        }
                      },
                      "src" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic"],
                          "pos" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Position",
                              "uriOpt" : {
                                "type" : "Some",
                                "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                              },
                              "beginLine" : 19,
                              "beginColumn" : 4,
                              "endLine" : 19,
                              "endColumn" : 50,
                              "offset" : 276,
                              "length" : 46
                            }
                          }
                        },
                        "feature" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "appLogic", "CmdPumpNorm"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/Application.aadl"
                                },
                                "beginLine" : 8,
                                "beginColumn" : 4,
                                "endLine" : 8,
                                "endColumn" : 37,
                                "offset" : 103,
                                "length" : 33
                              }
                            }
                          }
                        },
                        "direction" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Direction",
                            "value" : "Out"
                          }
                        }
                      },
                      "dst" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump"],
                          "pos" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Position",
                              "uriOpt" : {
                                "type" : "Some",
                                "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                              },
                              "beginLine" : 20,
                              "beginColumn" : 4,
                              "endLine" : 20,
                              "endColumn" : 38,
                              "offset" : 326,
                              "length" : 34
                            }
                          }
                        },
                        "feature" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "pcaPump", "TicketInput"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCAPump.aadl"
                                },
                                "beginLine" : 7,
                                "beginColumn" : 4,
                                "endLine" : 7,
                                "endColumn" : 36,
                                "offset" : 63,
                                "length" : 32
                              }
                            }
                          }
                        },
                        "direction" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Direction",
                            "value" : "In"
                          }
                        }
                      },
                      "kind" : {
                        "type" : "ConnectionKind",
                        "value" : "Port"
                      },
                      "connectionRefs" : [
                        {
                          "type" : "ConnectionReference",
                          "name" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance", "pumpcommand_logic"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                                },
                                "beginLine" : 26,
                                "beginColumn" : 4,
                                "endLine" : 26,
                                "endColumn" : 72,
                                "offset" : 607,
                                "length" : 68
                              }
                            }
                          },
                          "context" : {
                            "type" : "Name",
                            "name" : ["PCA_Shutoff_System_imp_Instance"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/packages\/PCA_System.aadl"
                                },
                                "beginLine" : 16,
                                "beginColumn" : 2,
                                "endLine" : 33,
                                "endColumn" : 29,
                                "offset" : 165,
                                "length" : 705
                              }
                            }
                          },
                          "isParent" : true
                        }
                      ],
                      "properties" : [
                      ]
                    }
                  ],
                  "properties" : [
                    {
                      "type" : "Property",
                      "name" : {
                        "type" : "Name",
                        "name" : ["PCA_Shutoff_System_imp_Instance", "STPA::SystemInfo"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                            },
                            "beginLine" : 78,
                            "beginColumn" : 2,
                            "endLine" : 82,
                            "endColumn" : 20,
                            "offset" : 2148,
                            "length" : 135
                          }
                        }
                      },
                      "propertyValues" : [
                        {
                          "type" : "RecordProp",
                          "properties" : [
                            {
                              "type" : "Property",
                              "name" : {
                                "type" : "Name",
                                "name" : ["PCA_Shutoff_System_imp_Instance", "null.Name"],
                                "pos" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Position",
                                    "uriOpt" : {
                                      "type" : "Some",
                                      "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                    },
                                    "beginLine" : 79,
                                    "beginColumn" : 3,
                                    "endLine" : 79,
                                    "endColumn" : 21,
                                    "offset" : 2172,
                                    "length" : 18
                                  }
                                }
                              },
                              "propertyValues" : [
                                {
                                  "type" : "ValueProp",
                                  "value" : "Pca_Shutoff"
                                }
                              ],
                              "appliesTo" : [
                              ]
                            },
                            {
                              "type" : "Property",
                              "name" : {
                                "type" : "Name",
                                "name" : ["PCA_Shutoff_System_imp_Instance", "null.Description"],
                                "pos" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Position",
                                    "uriOpt" : {
                                      "type" : "Some",
                                      "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                    },
                                    "beginLine" : 80,
                                    "beginColumn" : 3,
                                    "endLine" : 80,
                                    "endColumn" : 27,
                                    "offset" : 2193,
                                    "length" : 24
                                  }
                                }
                              },
                              "propertyValues" : [
                                {
                                  "type" : "ValueProp",
                                  "value" : "Patient status aware PCA Pump"
                                }
                              ],
                              "appliesTo" : [
                              ]
                            },
                            {
                              "type" : "Property",
                              "name" : {
                                "type" : "Name",
                                "name" : ["PCA_Shutoff_System_imp_Instance", "null.Control_loops"],
                                "pos" : {
                                  "type" : "Some",
                                  "value" : {
                                    "type" : "Position",
                                    "uriOpt" : {
                                      "type" : "Some",
                                      "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                    },
                                    "beginLine" : 81,
                                    "beginColumn" : 3,
                                    "endLine" : 81,
                                    "endColumn" : 45,
                                    "offset" : 2220,
                                    "length" : 42
                                  }
                                }
                              },
                              "propertyValues" : [
                                {
                                  "type" : "RecordProp",
                                  "properties" : [
                                    {
                                      "type" : "Property",
                                      "name" : {
                                        "type" : "Name",
                                        "name" : ["PCA_Shutoff_System_imp_Instance", "STPA::ControlLoop.ID"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                            },
                                            "beginLine" : 66,
                                            "beginColumn" : 3,
                                            "endLine" : 66,
                                            "endColumn" : 18,
                                            "offset" : 1771,
                                            "length" : 15
                                          }
                                        }
                                      },
                                      "propertyValues" : [
                                        {
                                          "type" : "ValueProp",
                                          "value" : "CL1"
                                        }
                                      ],
                                      "appliesTo" : [
                                      ]
                                    },
                                    {
                                      "type" : "Property",
                                      "name" : {
                                        "type" : "Name",
                                        "name" : ["PCA_Shutoff_System_imp_Instance", "STPA::ControlLoop.Description"],
                                        "pos" : {
                                          "type" : "Some",
                                          "value" : {
                                            "type" : "Position",
                                            "uriOpt" : {
                                              "type" : "Some",
                                              "value" : "STPA_Properties\/propertyset\/stpa.aadl"
                                            },
                                            "beginLine" : 67,
                                            "beginColumn" : 3,
                                            "endLine" : 67,
                                            "endColumn" : 27,
                                            "offset" : 1789,
                                            "length" : 24
                                          }
                                        }
                                      },
                                      "propertyValues" : [
                                        {
                                          "type" : "ValueProp",
                                          "value" : "PCA safety shutoff control structure"
                                        }
                                      ],
                                      "appliesTo" : [
                                      ]
                                    }
                                  ]
                                }
                              ],
                              "appliesTo" : [
                              ]
                            }
                          ]
                        }
                      ],
                      "appliesTo" : [
                      ]
                    }
                  ],
                  "flows" : [
                  ],
                  "modes" : [
                  ],
                  "annexes" : [
                    {
                      "type" : "Annex",
                      "name" : "Emv2",
                      "clause" : {
                        "type" : "Emv2Clause",
                        "libraries" : [
                        ],
                        "propagations" : [
                        ],
                        "flows" : [
                        ],
                        "componentBehavior" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Emv2BehaviorSection",
                            "events" : [
                            ],
                            "transitions" : [
                            ],
                            "propagations" : [
                            ]
                          }
                        },
                        "properties" : [
                        ]
                      }
                    }
                  ]
                }
              ],
              "errorLib" : [
                {
                  "type" : "Emv2Library",
                  "name" : {
                    "type" : "Name",
                    "name" : ["Simple_PCA_Errors"],
                    "pos" : {
                      "type" : "Some",
                      "value" : {
                        "type" : "Position",
                        "uriOpt" : {
                          "type" : "Some",
                          "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                        },
                        "beginLine" : 5,
                        "beginColumn" : 3,
                        "endLine" : 56,
                        "endColumn" : 15,
                        "offset" : 52,
                        "length" : 1039
                      }
                    }
                  },
                  "useTypes" : [],
                  "errorTypeDef" : [
                    {
                      "type" : "ErrorTypeDef",
                      "id" : {
                        "type" : "Name",
                        "name" : ["Simple_PCA_Errors", "TooMuchAnalgesic"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                            },
                            "beginLine" : 6,
                            "beginColumn" : 4,
                            "endLine" : 6,
                            "endColumn" : 28,
                            "offset" : 67,
                            "length" : 24
                          }
                        }
                      },
                      "extendType" : {
                        "type" : "None"
                      }
                    },
                    {
                      "type" : "ErrorTypeDef",
                      "id" : {
                        "type" : "Name",
                        "name" : ["Simple_PCA_Errors", "TicketTooLong"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                            },
                            "beginLine" : 9,
                            "beginColumn" : 4,
                            "endLine" : 9,
                            "endColumn" : 25,
                            "offset" : 134,
                            "length" : 21
                          }
                        }
                      },
                      "extendType" : {
                        "type" : "None"
                      }
                    },
                    {
                      "type" : "ErrorTypeDef",
                      "id" : {
                        "type" : "Name",
                        "name" : ["Simple_PCA_Errors", "TicketTooShort"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                            },
                            "beginLine" : 10,
                            "beginColumn" : 4,
                            "endLine" : 10,
                            "endColumn" : 26,
                            "offset" : 159,
                            "length" : 22
                          }
                        }
                      },
                      "extendType" : {
                        "type" : "None"
                      }
                    },
                    {
                      "type" : "ErrorTypeDef",
                      "id" : {
                        "type" : "Name",
                        "name" : ["Simple_PCA_Errors", "NoTicket"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                            },
                            "beginLine" : 11,
                            "beginColumn" : 4,
                            "endLine" : 11,
                            "endColumn" : 20,
                            "offset" : 185,
                            "length" : 16
                          }
                        }
                      },
                      "extendType" : {
                        "type" : "None"
                      }
                    },
                    {
                      "type" : "ErrorTypeDef",
                      "id" : {
                        "type" : "Name",
                        "name" : ["Simple_PCA_Errors", "EarlyTicket"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                            },
                            "beginLine" : 12,
                            "beginColumn" : 4,
                            "endLine" : 12,
                            "endColumn" : 23,
                            "offset" : 205,
                            "length" : 19
                          }
                        }
                      },
                      "extendType" : {
                        "type" : "None"
                      }
                    },
                    {
                      "type" : "ErrorTypeDef",
                      "id" : {
                        "type" : "Name",
                        "name" : ["Simple_PCA_Errors", "LateTicket"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                            },
                            "beginLine" : 13,
                            "beginColumn" : 4,
                            "endLine" : 13,
                            "endColumn" : 23,
                            "offset" : 228,
                            "length" : 19
                          }
                        }
                      },
                      "extendType" : {
                        "type" : "None"
                      }
                    },
                    {
                      "type" : "ErrorTypeDef",
                      "id" : {
                        "type" : "Name",
                        "name" : ["Simple_PCA_Errors", "SpO2ValueHigh"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                            },
                            "beginLine" : 16,
                            "beginColumn" : 5,
                            "endLine" : 16,
                            "endColumn" : 26,
                            "offset" : 287,
                            "length" : 21
                          }
                        }
                      },
                      "extendType" : {
                        "type" : "None"
                      }
                    },
                    {
                      "type" : "ErrorTypeDef",
                      "id" : {
                        "type" : "Name",
                        "name" : ["Simple_PCA_Errors", "SpO2ValueLow"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                            },
                            "beginLine" : 17,
                            "beginColumn" : 4,
                            "endLine" : 17,
                            "endColumn" : 24,
                            "offset" : 312,
                            "length" : 20
                          }
                        }
                      },
                      "extendType" : {
                        "type" : "None"
                      }
                    },
                    {
                      "type" : "ErrorTypeDef",
                      "id" : {
                        "type" : "Name",
                        "name" : ["Simple_PCA_Errors", "SpO2Early"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                            },
                            "beginLine" : 18,
                            "beginColumn" : 4,
                            "endLine" : 18,
                            "endColumn" : 21,
                            "offset" : 336,
                            "length" : 17
                          }
                        }
                      },
                      "extendType" : {
                        "type" : "None"
                      }
                    },
                    {
                      "type" : "ErrorTypeDef",
                      "id" : {
                        "type" : "Name",
                        "name" : ["Simple_PCA_Errors", "SpO2Late"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                            },
                            "beginLine" : 19,
                            "beginColumn" : 4,
                            "endLine" : 19,
                            "endColumn" : 20,
                            "offset" : 357,
                            "length" : 16
                          }
                        }
                      },
                      "extendType" : {
                        "type" : "None"
                      }
                    },
                    {
                      "type" : "ErrorTypeDef",
                      "id" : {
                        "type" : "Name",
                        "name" : ["Simple_PCA_Errors", "NoSpO2"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                            },
                            "beginLine" : 20,
                            "beginColumn" : 5,
                            "endLine" : 20,
                            "endColumn" : 19,
                            "offset" : 378,
                            "length" : 14
                          }
                        }
                      },
                      "extendType" : {
                        "type" : "None"
                      }
                    }
                  ],
                  "errorTypeSetDef" : [
                  ],
                  "alias" : [
                  ],
                  "behaveStateMachine" : [
                    {
                      "type" : "BehaveStateMachine",
                      "id" : {
                        "type" : "Name",
                        "name" : ["Simple_PCA_Errors", "AppStatus"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                            },
                            "beginLine" : 24,
                            "beginColumn" : 3,
                            "endLine" : 31,
                            "endColumn" : 16,
                            "offset" : 415,
                            "length" : 178
                          }
                        }
                      },
                      "events" : [
                        {
                          "type" : "ErrorEvent",
                          "id" : {
                            "type" : "Name",
                            "name" : ["Simple_PCA_Errors", "AppStatus", "SoftwareFailure"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                },
                                "beginLine" : 26,
                                "beginColumn" : 5,
                                "endLine" : 26,
                                "endColumn" : 34,
                                "offset" : 454,
                                "length" : 29
                              }
                            }
                          }
                        }
                      ],
                      "states" : [
                        {
                          "type" : "ErrorState",
                          "id" : {
                            "type" : "Name",
                            "name" : ["Simple_PCA_Errors", "AppStatus", "Normal"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                },
                                "beginLine" : 28,
                                "beginColumn" : 5,
                                "endLine" : 28,
                                "endColumn" : 28,
                                "offset" : 498,
                                "length" : 23
                              }
                            }
                          },
                          "isInitial" : true
                        },
                        {
                          "type" : "ErrorState",
                          "id" : {
                            "type" : "Name",
                            "name" : ["Simple_PCA_Errors", "AppStatus", "DetectedError"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                },
                                "beginLine" : 29,
                                "beginColumn" : 5,
                                "endLine" : 29,
                                "endColumn" : 27,
                                "offset" : 526,
                                "length" : 22
                              }
                            }
                          },
                          "isInitial" : false
                        },
                        {
                          "type" : "ErrorState",
                          "id" : {
                            "type" : "Name",
                            "name" : ["Simple_PCA_Errors", "AppStatus", "UndetectedError"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                },
                                "beginLine" : 30,
                                "beginColumn" : 5,
                                "endLine" : 30,
                                "endColumn" : 29,
                                "offset" : 553,
                                "length" : 24
                              }
                            }
                          },
                          "isInitial" : false
                        }
                      ],
                      "transitions" : [
                      ],
                      "properties" : [
                      ]
                    },
                    {
                      "type" : "BehaveStateMachine",
                      "id" : {
                        "type" : "Name",
                        "name" : ["Simple_PCA_Errors", "PatientStatus"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                            },
                            "beginLine" : 33,
                            "beginColumn" : 3,
                            "endLine" : 37,
                            "endColumn" : 16,
                            "offset" : 599,
                            "length" : 106
                          }
                        }
                      },
                      "events" : [
                      ],
                      "states" : [
                        {
                          "type" : "ErrorState",
                          "id" : {
                            "type" : "Name",
                            "name" : ["Simple_PCA_Errors", "PatientStatus", "Healthy"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                },
                                "beginLine" : 35,
                                "beginColumn" : 5,
                                "endLine" : 35,
                                "endColumn" : 29,
                                "offset" : 642,
                                "length" : 24
                              }
                            }
                          },
                          "isInitial" : true
                        },
                        {
                          "type" : "ErrorState",
                          "id" : {
                            "type" : "Name",
                            "name" : ["Simple_PCA_Errors", "PatientStatus", "Overdosed"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                },
                                "beginLine" : 36,
                                "beginColumn" : 5,
                                "endLine" : 36,
                                "endColumn" : 23,
                                "offset" : 671,
                                "length" : 18
                              }
                            }
                          },
                          "isInitial" : false
                        }
                      ],
                      "transitions" : [
                      ],
                      "properties" : [
                      ]
                    },
                    {
                      "type" : "BehaveStateMachine",
                      "id" : {
                        "type" : "Name",
                        "name" : ["Simple_PCA_Errors", "PulseOxStatus"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                            },
                            "beginLine" : 39,
                            "beginColumn" : 3,
                            "endLine" : 45,
                            "endColumn" : 16,
                            "offset" : 711,
                            "length" : 146
                          }
                        }
                      },
                      "events" : [
                        {
                          "type" : "ErrorEvent",
                          "id" : {
                            "type" : "Name",
                            "name" : ["Simple_PCA_Errors", "PulseOxStatus", "InternalFailure"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                },
                                "beginLine" : 41,
                                "beginColumn" : 5,
                                "endLine" : 41,
                                "endColumn" : 34,
                                "offset" : 754,
                                "length" : 29
                              }
                            }
                          }
                        }
                      ],
                      "states" : [
                        {
                          "type" : "ErrorState",
                          "id" : {
                            "type" : "Name",
                            "name" : ["Simple_PCA_Errors", "PulseOxStatus", "Normal"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                },
                                "beginLine" : 43,
                                "beginColumn" : 5,
                                "endLine" : 43,
                                "endColumn" : 28,
                                "offset" : 798,
                                "length" : 23
                              }
                            }
                          },
                          "isInitial" : true
                        },
                        {
                          "type" : "ErrorState",
                          "id" : {
                            "type" : "Name",
                            "name" : ["Simple_PCA_Errors", "PulseOxStatus", "Failed"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                },
                                "beginLine" : 44,
                                "beginColumn" : 5,
                                "endLine" : 44,
                                "endColumn" : 20,
                                "offset" : 826,
                                "length" : 15
                              }
                            }
                          },
                          "isInitial" : false
                        }
                      ],
                      "transitions" : [
                      ],
                      "properties" : [
                      ]
                    },
                    {
                      "type" : "BehaveStateMachine",
                      "id" : {
                        "type" : "Name",
                        "name" : ["Simple_PCA_Errors", "PumpStatus"],
                        "pos" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Position",
                            "uriOpt" : {
                              "type" : "Some",
                              "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                            },
                            "beginLine" : 47,
                            "beginColumn" : 3,
                            "endLine" : 56,
                            "endColumn" : 15,
                            "offset" : 863,
                            "length" : 228
                          }
                        }
                      },
                      "events" : [
                        {
                          "type" : "ErrorEvent",
                          "id" : {
                            "type" : "Name",
                            "name" : ["Simple_PCA_Errors", "PumpStatus", "PumpDeteriorates"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                },
                                "beginLine" : 49,
                                "beginColumn" : 5,
                                "endLine" : 49,
                                "endColumn" : 35,
                                "offset" : 903,
                                "length" : 30
                              }
                            }
                          }
                        },
                        {
                          "type" : "ErrorEvent",
                          "id" : {
                            "type" : "Name",
                            "name" : ["Simple_PCA_Errors", "PumpStatus", "OverHeating"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                },
                                "beginLine" : 50,
                                "beginColumn" : 5,
                                "endLine" : 50,
                                "endColumn" : 30,
                                "offset" : 938,
                                "length" : 25
                              }
                            }
                          }
                        }
                      ],
                      "states" : [
                        {
                          "type" : "ErrorState",
                          "id" : {
                            "type" : "Name",
                            "name" : ["Simple_PCA_Errors", "PumpStatus", "Normal"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                },
                                "beginLine" : 53,
                                "beginColumn" : 5,
                                "endLine" : 53,
                                "endColumn" : 28,
                                "offset" : 996,
                                "length" : 23
                              }
                            }
                          },
                          "isInitial" : true
                        },
                        {
                          "type" : "ErrorState",
                          "id" : {
                            "type" : "Name",
                            "name" : ["Simple_PCA_Errors", "PumpStatus", "DetectableFailure"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                },
                                "beginLine" : 54,
                                "beginColumn" : 5,
                                "endLine" : 54,
                                "endColumn" : 31,
                                "offset" : 1024,
                                "length" : 26
                              }
                            }
                          },
                          "isInitial" : false
                        },
                        {
                          "type" : "ErrorState",
                          "id" : {
                            "type" : "Name",
                            "name" : ["Simple_PCA_Errors", "PumpStatus", "SafeOperation"],
                            "pos" : {
                              "type" : "Some",
                              "value" : {
                                "type" : "Position",
                                "uriOpt" : {
                                  "type" : "Some",
                                  "value" : "Simple_PCA_Shutoff\/properties\/Simple_PCA_Errors.aadl"
                                },
                                "beginLine" : 55,
                                "beginColumn" : 5,
                                "endLine" : 55,
                                "endColumn" : 26,
                                "offset" : 1055,
                                "length" : 21
                              }
                            }
                          },
                          "isInitial" : false
                        }
                      ],
                      "transitions" : [
                      ],
                      "properties" : [
                      ]
                    }
                  ]
                }
              ],
              "dataComponents" : [
              ]
            }`;
