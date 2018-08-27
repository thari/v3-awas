var json = `{
              "type" : "Aadl",
              "components" : [
                {
                  "type" : "Component",
                  "identifier" : {
                    "type" : "Name",
                    "name" : ["Simple_Comm_routing_table_Instance"]
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
                        "name" : ["Simple_Comm_routing_table_Instance", "alice"]
                      },
                      "category" : {
                        "type" : "ComponentCategory",
                        "value" : "Device"
                      },
                      "classifier" : {
                        "type" : "Some",
                        "value" : {
                          "type" : "Classifier",
                          "name" : "Simple_Flow_Demo::Sender.impl"
                        }
                      },
                      "features" : [
                        {
                          "type" : "FeatureEnd",
                          "identifier" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "alice", "send_port"]
                          },
                          "direction" : {
                            "type" : "Direction",
                            "value" : "InOut"
                          },
                          "category" : {
                            "type" : "FeatureCategory",
                            "value" : "DataPort"
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
                      ],
                      "flows" : [
                        {
                          "type" : "Flow",
                          "name" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "alice", "receive_ack"]
                          },
                          "kind" : {
                            "type" : "FlowKind",
                            "value" : "Sink"
                          },
                          "source" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "FeatureEnd",
                              "identifier" : {
                                "type" : "Name",
                                "name" : ["Simple_Comm_routing_table_Instance", "alice", "receive_ack", "send_port"]
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "InOut"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "DataPort"
                              },
                              "classifier" : {
                                "type" : "None"
                              },
                              "properties" : [
                              ]
                            }
                          },
                          "sink" : {
                            "type" : "None"
                          }
                        },
                        {
                          "type" : "Flow",
                          "name" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "alice", "send_msg"]
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
                                "name" : ["Simple_Comm_routing_table_Instance", "alice", "send_msg", "send_port"]
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "InOut"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "DataPort"
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
                            "libraries" : [],
                            "propagations" : [
                            ],
                            "flows" : [
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "type" : "Component",
                      "identifier" : {
                        "type" : "Name",
                        "name" : ["Simple_Comm_routing_table_Instance", "bob"]
                      },
                      "category" : {
                        "type" : "ComponentCategory",
                        "value" : "Device"
                      },
                      "classifier" : {
                        "type" : "Some",
                        "value" : {
                          "type" : "Classifier",
                          "name" : "Simple_Flow_Demo::Receiver.s1"
                        }
                      },
                      "features" : [
                        {
                          "type" : "FeatureEnd",
                          "identifier" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "bob", "receive_Port"]
                          },
                          "direction" : {
                            "type" : "Direction",
                            "value" : "InOut"
                          },
                          "category" : {
                            "type" : "FeatureCategory",
                            "value" : "DataPort"
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
                      ],
                      "flows" : [
                        {
                          "type" : "Flow",
                          "name" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "bob", "receive_msg"]
                          },
                          "kind" : {
                            "type" : "FlowKind",
                            "value" : "Sink"
                          },
                          "source" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "FeatureEnd",
                              "identifier" : {
                                "type" : "Name",
                                "name" : ["Simple_Comm_routing_table_Instance", "bob", "receive_msg", "receive_Port"]
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "InOut"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "DataPort"
                              },
                              "classifier" : {
                                "type" : "None"
                              },
                              "properties" : [
                              ]
                            }
                          },
                          "sink" : {
                            "type" : "None"
                          }
                        },
                        {
                          "type" : "Flow",
                          "name" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "bob", "send_ack"]
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
                                "name" : ["Simple_Comm_routing_table_Instance", "bob", "send_ack", "receive_Port"]
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "InOut"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "DataPort"
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
                            "libraries" : [],
                            "propagations" : [
                            ],
                            "flows" : [
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "type" : "Component",
                      "identifier" : {
                        "type" : "Name",
                        "name" : ["Simple_Comm_routing_table_Instance", "mallory"]
                      },
                      "category" : {
                        "type" : "ComponentCategory",
                        "value" : "Device"
                      },
                      "classifier" : {
                        "type" : "Some",
                        "value" : {
                          "type" : "Classifier",
                          "name" : "Simple_Flow_Demo::Receiver.s1"
                        }
                      },
                      "features" : [
                        {
                          "type" : "FeatureEnd",
                          "identifier" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "mallory", "receive_Port"]
                          },
                          "direction" : {
                            "type" : "Direction",
                            "value" : "InOut"
                          },
                          "category" : {
                            "type" : "FeatureCategory",
                            "value" : "DataPort"
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
                      ],
                      "flows" : [
                        {
                          "type" : "Flow",
                          "name" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "mallory", "receive_msg"]
                          },
                          "kind" : {
                            "type" : "FlowKind",
                            "value" : "Sink"
                          },
                          "source" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "FeatureEnd",
                              "identifier" : {
                                "type" : "Name",
                                "name" : ["Simple_Comm_routing_table_Instance", "mallory", "receive_msg", "receive_Port"]
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "InOut"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "DataPort"
                              },
                              "classifier" : {
                                "type" : "None"
                              },
                              "properties" : [
                              ]
                            }
                          },
                          "sink" : {
                            "type" : "None"
                          }
                        },
                        {
                          "type" : "Flow",
                          "name" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "mallory", "send_ack"]
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
                                "name" : ["Simple_Comm_routing_table_Instance", "mallory", "send_ack", "receive_Port"]
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "InOut"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "DataPort"
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
                            "libraries" : [],
                            "propagations" : [
                            ],
                            "flows" : [
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "type" : "Component",
                      "identifier" : {
                        "type" : "Name",
                        "name" : ["Simple_Comm_routing_table_Instance", "eve"]
                      },
                      "category" : {
                        "type" : "ComponentCategory",
                        "value" : "Device"
                      },
                      "classifier" : {
                        "type" : "Some",
                        "value" : {
                          "type" : "Classifier",
                          "name" : "Simple_Flow_Demo::transmit.impl"
                        }
                      },
                      "features" : [
                        {
                          "type" : "FeatureEnd",
                          "identifier" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "eve", "send"]
                          },
                          "direction" : {
                            "type" : "Direction",
                            "value" : "Out"
                          },
                          "category" : {
                            "type" : "FeatureCategory",
                            "value" : "DataPort"
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
                            "name" : ["Simple_Comm_routing_table_Instance", "eve", "receive"]
                          },
                          "direction" : {
                            "type" : "Direction",
                            "value" : "In"
                          },
                          "category" : {
                            "type" : "FeatureCategory",
                            "value" : "DataPort"
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
                      ],
                      "flows" : [
                        {
                          "type" : "Flow",
                          "name" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "eve", "propagate"]
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
                                "name" : ["Simple_Comm_routing_table_Instance", "eve", "propagate", "receive"]
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "In"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "DataPort"
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
                                "name" : ["Simple_Comm_routing_table_Instance", "eve", "propagate", "send"]
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "Out"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "DataPort"
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
                            "libraries" : [],
                            "propagations" : [
                            ],
                            "flows" : [
                            ]
                          }
                        }
                      ]
                    },
                    {
                      "type" : "Component",
                      "identifier" : {
                        "type" : "Name",
                        "name" : ["Simple_Comm_routing_table_Instance", "router"]
                      },
                      "category" : {
                        "type" : "ComponentCategory",
                        "value" : "Device"
                      },
                      "classifier" : {
                        "type" : "Some",
                        "value" : {
                          "type" : "Classifier",
                          "name" : "Simple_Flow_Demo::router.routing_table"
                        }
                      },
                      "features" : [
                        {
                          "type" : "FeatureEnd",
                          "identifier" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router", "socket1"]
                          },
                          "direction" : {
                            "type" : "Direction",
                            "value" : "InOut"
                          },
                          "category" : {
                            "type" : "FeatureCategory",
                            "value" : "DataPort"
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
                            "name" : ["Simple_Comm_routing_table_Instance", "router", "socket2"]
                          },
                          "direction" : {
                            "type" : "Direction",
                            "value" : "InOut"
                          },
                          "category" : {
                            "type" : "FeatureCategory",
                            "value" : "DataPort"
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
                            "name" : ["Simple_Comm_routing_table_Instance", "router", "socket3"]
                          },
                          "direction" : {
                            "type" : "Direction",
                            "value" : "InOut"
                          },
                          "category" : {
                            "type" : "FeatureCategory",
                            "value" : "DataPort"
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
                            "name" : ["Simple_Comm_routing_table_Instance", "router", "socket4"]
                          },
                          "direction" : {
                            "type" : "Direction",
                            "value" : "InOut"
                          },
                          "category" : {
                            "type" : "FeatureCategory",
                            "value" : "DataPort"
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
                      ],
                      "flows" : [
                        {
                          "type" : "Flow",
                          "name" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router", "alice_bob_pub"]
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
                                "name" : ["Simple_Comm_routing_table_Instance", "router", "alice_bob_pub", "socket1"]
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "InOut"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "DataPort"
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
                                "name" : ["Simple_Comm_routing_table_Instance", "router", "alice_bob_pub", "socket2"]
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "InOut"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "DataPort"
                              },
                              "classifier" : {
                                "type" : "None"
                              },
                              "properties" : [
                              ]
                            }
                          }
                        },
                        {
                          "type" : "Flow",
                          "name" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router", "bob_alice_ack"]
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
                                "name" : ["Simple_Comm_routing_table_Instance", "router", "bob_alice_ack", "socket2"]
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "InOut"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "DataPort"
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
                                "name" : ["Simple_Comm_routing_table_Instance", "router", "bob_alice_ack", "socket1"]
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "InOut"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "DataPort"
                              },
                              "classifier" : {
                                "type" : "None"
                              },
                              "properties" : [
                              ]
                            }
                          }
                        },
                        {
                          "type" : "Flow",
                          "name" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router", "alice_eve_pub"]
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
                                "name" : ["Simple_Comm_routing_table_Instance", "router", "alice_eve_pub", "socket1"]
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "InOut"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "DataPort"
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
                                "name" : ["Simple_Comm_routing_table_Instance", "router", "alice_eve_pub", "socket4"]
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "InOut"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "DataPort"
                              },
                              "classifier" : {
                                "type" : "None"
                              },
                              "properties" : [
                              ]
                            }
                          }
                        },
                        {
                          "type" : "Flow",
                          "name" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router", "eve_alice_ack"]
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
                                "name" : ["Simple_Comm_routing_table_Instance", "router", "eve_alice_ack", "socket4"]
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "InOut"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "DataPort"
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
                                "name" : ["Simple_Comm_routing_table_Instance", "router", "eve_alice_ack", "socket2"]
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "InOut"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "DataPort"
                              },
                              "classifier" : {
                                "type" : "None"
                              },
                              "properties" : [
                              ]
                            }
                          }
                        },
                        {
                          "type" : "Flow",
                          "name" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router", "bob_eve_pub"]
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
                                "name" : ["Simple_Comm_routing_table_Instance", "router", "bob_eve_pub", "socket2"]
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "InOut"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "DataPort"
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
                                "name" : ["Simple_Comm_routing_table_Instance", "router", "bob_eve_pub", "socket4"]
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "InOut"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "DataPort"
                              },
                              "classifier" : {
                                "type" : "None"
                              },
                              "properties" : [
                              ]
                            }
                          }
                        },
                        {
                          "type" : "Flow",
                          "name" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router", "eve_bob_ack"]
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
                                "name" : ["Simple_Comm_routing_table_Instance", "router", "eve_bob_ack", "socket4"]
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "InOut"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "DataPort"
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
                                "name" : ["Simple_Comm_routing_table_Instance", "router", "eve_bob_ack", "socket2"]
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "InOut"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "DataPort"
                              },
                              "classifier" : {
                                "type" : "None"
                              },
                              "properties" : [
                              ]
                            }
                          }
                        },
                        {
                          "type" : "Flow",
                          "name" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router", "mallory_blocked"]
                          },
                          "kind" : {
                            "type" : "FlowKind",
                            "value" : "Sink"
                          },
                          "source" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "FeatureEnd",
                              "identifier" : {
                                "type" : "Name",
                                "name" : ["Simple_Comm_routing_table_Instance", "router", "mallory_blocked", "socket3"]
                              },
                              "direction" : {
                                "type" : "Direction",
                                "value" : "InOut"
                              },
                              "category" : {
                                "type" : "FeatureCategory",
                                "value" : "DataPort"
                              },
                              "classifier" : {
                                "type" : "None"
                              },
                              "properties" : [
                              ]
                            }
                          },
                          "sink" : {
                            "type" : "None"
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
                            "libraries" : [],
                            "propagations" : [
                            ],
                            "flows" : [
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
                        "name" : ["Simple_Comm_routing_table_Instance", "alice_send"]
                      },
                      "src" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "alice"]
                          },
                          "feature" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "alice", "send_port"]
                          },
                          "direction" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Direction",
                              "value" : "InOut"
                            }
                          }
                        }
                      ],
                      "dst" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router"]
                          },
                          "feature" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router", "socket1"]
                          },
                          "direction" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Direction",
                              "value" : "InOut"
                            }
                          }
                        }
                      ],
                      "isBiDirectional" : false,
                      "connectionInstances" : [
                        {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "alice", "send_port -> router", "socket1"]
                        }
                      ],
                      "properties" : [
                      ]
                    },
                    {
                      "type" : "Connection",
                      "name" : {
                        "type" : "Name",
                        "name" : ["Simple_Comm_routing_table_Instance", "bob_send"]
                      },
                      "src" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "bob"]
                          },
                          "feature" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "bob", "receive_Port"]
                          },
                          "direction" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Direction",
                              "value" : "InOut"
                            }
                          }
                        }
                      ],
                      "dst" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router"]
                          },
                          "feature" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router", "socket2"]
                          },
                          "direction" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Direction",
                              "value" : "InOut"
                            }
                          }
                        }
                      ],
                      "isBiDirectional" : false,
                      "connectionInstances" : [
                        {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "bob", "receive_Port -> router", "socket2"]
                        }
                      ],
                      "properties" : [
                      ]
                    },
                    {
                      "type" : "Connection",
                      "name" : {
                        "type" : "Name",
                        "name" : ["Simple_Comm_routing_table_Instance", "mallory_send"]
                      },
                      "src" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "mallory"]
                          },
                          "feature" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "mallory", "receive_Port"]
                          },
                          "direction" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Direction",
                              "value" : "InOut"
                            }
                          }
                        }
                      ],
                      "dst" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router"]
                          },
                          "feature" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router", "socket3"]
                          },
                          "direction" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Direction",
                              "value" : "InOut"
                            }
                          }
                        }
                      ],
                      "isBiDirectional" : false,
                      "connectionInstances" : [
                        {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "mallory", "receive_Port -> router", "socket3"]
                        }
                      ],
                      "properties" : [
                      ]
                    },
                    {
                      "type" : "Connection",
                      "name" : {
                        "type" : "Name",
                        "name" : ["Simple_Comm_routing_table_Instance", "eve_send"]
                      },
                      "src" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "eve"]
                          },
                          "feature" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "eve", "send"]
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
                            "name" : ["Simple_Comm_routing_table_Instance", "router"]
                          },
                          "feature" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router", "socket4"]
                          },
                          "direction" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Direction",
                              "value" : "InOut"
                            }
                          }
                        }
                      ],
                      "isBiDirectional" : false,
                      "connectionInstances" : [
                        {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "eve", "send -> router", "socket4"]
                        }
                      ],
                      "properties" : [
                      ]
                    },
                    {
                      "type" : "Connection",
                      "name" : {
                        "type" : "Name",
                        "name" : ["Simple_Comm_routing_table_Instance", "alice_receive"]
                      },
                      "src" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router"]
                          },
                          "feature" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router", "socket1"]
                          },
                          "direction" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Direction",
                              "value" : "InOut"
                            }
                          }
                        }
                      ],
                      "dst" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "alice"]
                          },
                          "feature" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "alice", "send_port"]
                          },
                          "direction" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Direction",
                              "value" : "InOut"
                            }
                          }
                        }
                      ],
                      "isBiDirectional" : false,
                      "connectionInstances" : [
                        {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "router", "socket1 -> alice", "send_port"]
                        }
                      ],
                      "properties" : [
                      ]
                    },
                    {
                      "type" : "Connection",
                      "name" : {
                        "type" : "Name",
                        "name" : ["Simple_Comm_routing_table_Instance", "bob_receive"]
                      },
                      "src" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router"]
                          },
                          "feature" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router", "socket2"]
                          },
                          "direction" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Direction",
                              "value" : "InOut"
                            }
                          }
                        }
                      ],
                      "dst" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "bob"]
                          },
                          "feature" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "bob", "receive_Port"]
                          },
                          "direction" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Direction",
                              "value" : "InOut"
                            }
                          }
                        }
                      ],
                      "isBiDirectional" : false,
                      "connectionInstances" : [
                        {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "router", "socket2 -> bob", "receive_Port"]
                        }
                      ],
                      "properties" : [
                      ]
                    },
                    {
                      "type" : "Connection",
                      "name" : {
                        "type" : "Name",
                        "name" : ["Simple_Comm_routing_table_Instance", "mallory_receive"]
                      },
                      "src" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router"]
                          },
                          "feature" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router", "socket3"]
                          },
                          "direction" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Direction",
                              "value" : "InOut"
                            }
                          }
                        }
                      ],
                      "dst" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "mallory"]
                          },
                          "feature" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "mallory", "receive_Port"]
                          },
                          "direction" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Direction",
                              "value" : "InOut"
                            }
                          }
                        }
                      ],
                      "isBiDirectional" : false,
                      "connectionInstances" : [
                        {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "router", "socket3 -> mallory", "receive_Port"]
                        }
                      ],
                      "properties" : [
                      ]
                    },
                    {
                      "type" : "Connection",
                      "name" : {
                        "type" : "Name",
                        "name" : ["Simple_Comm_routing_table_Instance", "eve_receive"]
                      },
                      "src" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router"]
                          },
                          "feature" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "router", "socket4"]
                          },
                          "direction" : {
                            "type" : "Some",
                            "value" : {
                              "type" : "Direction",
                              "value" : "InOut"
                            }
                          }
                        }
                      ],
                      "dst" : [
                        {
                          "type" : "EndPoint",
                          "component" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "eve"]
                          },
                          "feature" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance", "eve", "receive"]
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
                      "isBiDirectional" : false,
                      "connectionInstances" : [
                        {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "router", "socket4 -> eve", "receive"]
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
                        "name" : ["Simple_Comm_routing_table_Instance", "alice.send_port -> router.socket1"]
                      },
                      "src" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "alice"]
                        },
                        "feature" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "alice", "send_port"]
                        },
                        "direction" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Direction",
                            "value" : "InOut"
                          }
                        }
                      },
                      "dst" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "router"]
                        },
                        "feature" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "router", "socket1"]
                        },
                        "direction" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Direction",
                            "value" : "InOut"
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
                            "name" : ["Simple_Comm_routing_table_Instance", "alice_send"]
                          },
                          "context" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance"]
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
                        "name" : ["Simple_Comm_routing_table_Instance", "bob.receive_Port -> router.socket2"]
                      },
                      "src" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "bob"]
                        },
                        "feature" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "bob", "receive_Port"]
                        },
                        "direction" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Direction",
                            "value" : "InOut"
                          }
                        }
                      },
                      "dst" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "router"]
                        },
                        "feature" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "router", "socket2"]
                        },
                        "direction" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Direction",
                            "value" : "InOut"
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
                            "name" : ["Simple_Comm_routing_table_Instance", "bob_send"]
                          },
                          "context" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance"]
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
                        "name" : ["Simple_Comm_routing_table_Instance", "mallory.receive_Port -> router.socket3"]
                      },
                      "src" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "mallory"]
                        },
                        "feature" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "mallory", "receive_Port"]
                        },
                        "direction" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Direction",
                            "value" : "InOut"
                          }
                        }
                      },
                      "dst" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "router"]
                        },
                        "feature" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "router", "socket3"]
                        },
                        "direction" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Direction",
                            "value" : "InOut"
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
                            "name" : ["Simple_Comm_routing_table_Instance", "mallory_send"]
                          },
                          "context" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance"]
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
                        "name" : ["Simple_Comm_routing_table_Instance", "eve.send -> router.socket4"]
                      },
                      "src" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "eve"]
                        },
                        "feature" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "eve", "send"]
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
                          "name" : ["Simple_Comm_routing_table_Instance", "router"]
                        },
                        "feature" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "router", "socket4"]
                        },
                        "direction" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Direction",
                            "value" : "InOut"
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
                            "name" : ["Simple_Comm_routing_table_Instance", "eve_send"]
                          },
                          "context" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance"]
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
                        "name" : ["Simple_Comm_routing_table_Instance", "router.socket1 -> alice.send_port"]
                      },
                      "src" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "router"]
                        },
                        "feature" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "router", "socket1"]
                        },
                        "direction" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Direction",
                            "value" : "InOut"
                          }
                        }
                      },
                      "dst" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "alice"]
                        },
                        "feature" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "alice", "send_port"]
                        },
                        "direction" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Direction",
                            "value" : "InOut"
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
                            "name" : ["Simple_Comm_routing_table_Instance", "alice_receive"]
                          },
                          "context" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance"]
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
                        "name" : ["Simple_Comm_routing_table_Instance", "router.socket2 -> bob.receive_Port"]
                      },
                      "src" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "router"]
                        },
                        "feature" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "router", "socket2"]
                        },
                        "direction" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Direction",
                            "value" : "InOut"
                          }
                        }
                      },
                      "dst" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "bob"]
                        },
                        "feature" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "bob", "receive_Port"]
                        },
                        "direction" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Direction",
                            "value" : "InOut"
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
                            "name" : ["Simple_Comm_routing_table_Instance", "bob_receive"]
                          },
                          "context" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance"]
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
                        "name" : ["Simple_Comm_routing_table_Instance", "router.socket3 -> mallory.receive_Port"]
                      },
                      "src" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "router"]
                        },
                        "feature" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "router", "socket3"]
                        },
                        "direction" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Direction",
                            "value" : "InOut"
                          }
                        }
                      },
                      "dst" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "mallory"]
                        },
                        "feature" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "mallory", "receive_Port"]
                        },
                        "direction" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Direction",
                            "value" : "InOut"
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
                            "name" : ["Simple_Comm_routing_table_Instance", "mallory_receive"]
                          },
                          "context" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance"]
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
                        "name" : ["Simple_Comm_routing_table_Instance", "router.socket4 -> eve.receive"]
                      },
                      "src" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "router"]
                        },
                        "feature" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "router", "socket4"]
                        },
                        "direction" : {
                          "type" : "Some",
                          "value" : {
                            "type" : "Direction",
                            "value" : "InOut"
                          }
                        }
                      },
                      "dst" : {
                        "type" : "EndPoint",
                        "component" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "eve"]
                        },
                        "feature" : {
                          "type" : "Name",
                          "name" : ["Simple_Comm_routing_table_Instance", "eve", "receive"]
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
                            "name" : ["Simple_Comm_routing_table_Instance", "eve_receive"]
                          },
                          "context" : {
                            "type" : "Name",
                            "name" : ["Simple_Comm_routing_table_Instance"]
                          },
                          "isParent" : true
                        }
                      ],
                      "properties" : [
                      ]
                    }
                  ],
                  "properties" : [
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
                        "libraries" : [],
                        "propagations" : [
                        ],
                        "flows" : [
                        ]
                      }
                    }
                  ]
                }
              ],
              "errorLib" : [
              ]
            }`