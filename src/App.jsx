import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
const {VITE_OPTLY_PROJECT_ID_TH, VITE_OPTLY_TOKEN} = import.meta.env;


import './App.css'
import networkManager from './scripts/networkManager';

const experiments_th = [
  {
    "allocation_policy": "manual",
    "audience_conditions": "everyone",
    "campaign_id": 14190210469,
    "changes": [],
    "created": "2019-03-21T09:18:53.313626Z",
    "description": "",
    "holdback": 0,
    "id": 14221830212,
    "is_classic": false,
    "last_modified": "2019-03-21T09:21:49.329152Z",
    "metrics": [],
    "name": "Test 1",
    "page_ids": [
      14208030178
    ],
    "project_id": 14193350179,
    "status": "archived",
    "traffic_allocation": 10000,
    "type": "a/b",
    "variations": [
      {
        "actions": [
          {
            "changes": [],
            "page_id": 14208030178,
            "share_link": "https://se.devtestp1.tommy.com/womens-hoodies-sweatshirts?optimizely_token=c91a5a15fd4b686e7cd20371cf3d642e638a6cb88b05c758f3742bada872366b&optimizely_x=14190260193&optimizely_x_audiences=&optimizely_preview_layer_ids=14190210469&optimizely_snippet=s3-14193350179"
          }
        ],
        "archived": false,
        "name": "Original",
        "status": "active",
        "variation_id": 14190260193,
        "weight": 5000
      },
      {
        "actions": [
          {
            "changes": [
              {
                "async": false,
                "dependencies": [],
                "id": "F41E23FD-74E6-4179-9EC8-138675BCEA65",
                "type": "custom_code",
                "value": "alert('Test URL change');"
              }
            ],
            "page_id": 14208030178,
            "share_link": "https://se.devtestp1.tommy.com/womens-hoodies-sweatshirts?optimizely_token=c91a5a15fd4b686e7cd20371cf3d642e638a6cb88b05c758f3742bada872366b&optimizely_x=14208140009&optimizely_x_audiences=&optimizely_preview_layer_ids=14190210469&optimizely_snippet=s3-14193350179"
          }
        ],
        "archived": false,
        "name": "Variation #1",
        "status": "active",
        "variation_id": 14208140009,
        "weight": 5000
      }
    ]
  },
  {
    "allocation_policy": "manual",
    "audience_conditions": "everyone",
    "campaign_id": 14268130320,
    "changes": [],
    "created": "2019-03-28T08:51:13.523971Z",
    "description": "",
    "holdback": 0,
    "id": 14277660358,
    "is_classic": false,
    "last_modified": "2019-03-28T08:51:13.524001Z",
    "metrics": [],
    "name": "Homepage example",
    "page_ids": [
      14285590348
    ],
    "project_id": 14193350179,
    "status": "archived",
    "traffic_allocation": 10000,
    "type": "a/b",
    "variations": [
      {
        "actions": [
          {
            "changes": [],
            "page_id": 14285590348,
            "share_link": "http://htttps://uk.tommy.com?optimizely_token=c91a5a15fd4b686e7cd20371cf3d642e638a6cb88b05c758f3742bada872366b&optimizely_x=14268080210&optimizely_x_audiences=&optimizely_preview_layer_ids=14268130320&optimizely_snippet=s3-14193350179"
          }
        ],
        "archived": false,
        "name": "Original",
        "status": "active",
        "variation_id": 14268080210,
        "weight": 5000
      },
      {
        "actions": [
          {
            "changes": [],
            "page_id": 14285590348,
            "share_link": "http://htttps://uk.tommy.com?optimizely_token=c91a5a15fd4b686e7cd20371cf3d642e638a6cb88b05c758f3742bada872366b&optimizely_x=14291520514&optimizely_x_audiences=&optimizely_preview_layer_ids=14268130320&optimizely_snippet=s3-14193350179"
          }
        ],
        "archived": false,
        "name": "Variation #1",
        "status": "active",
        "variation_id": 14291520514,
        "weight": 5000
      }
    ]
  },
  {
    "allocation_policy": "manual",
    "audience_conditions": "everyone",
    "campaign_id": 14549290297,
    "changes": [],
    "created": "2019-04-18T07:58:41.679740Z",
    "description": "",
    "holdback": 0,
    "id": 14528870833,
    "is_classic": false,
    "last_modified": "2024-11-14T14:00:06.492748Z",
    "metrics": [],
    "name": "Example 2",
    "page_ids": [
      6456458930290688
    ],
    "project_id": 14193350179,
    "status": "archived",
    "traffic_allocation": 10000,
    "type": "a/b",
    "variations": [
      {
        "actions": [],
        "archived": false,
        "name": "Original",
        "status": "active",
        "variation_id": 14523091046,
        "weight": 5000
      },
      {
        "actions": [],
        "archived": false,
        "name": "Variation #1",
        "status": "active",
        "variation_id": 14563230608,
        "weight": 5000
      }
    ]
  },
  {
    "allocation_policy": "manual",
    "audience_conditions": "everyone",
    "campaign_id": 5838890649518080,
    "changes": [
      {
        "async": false,
        "dependencies": [],
        "id": "4a64afa8-db0b-4279-9f3d-89c913575580",
        "type": "custom_code",
        "value": "console.log('test')"
      },
      {
        "dependencies": [],
        "id": "011e1402-333f-4cbb-a9cf-b083f974b225",
        "selector": "head",
        "type": "custom_css",
        "value": ".selector {background: 'red'}"
      }
    ],
    "created": "2024-11-21T12:37:06.352410Z",
    "description": "description placeholder",
    "holdback": 0,
    "id": 4508690657574912,
    "is_classic": false,
    "last_modified": "2024-11-21T12:37:06.352428Z",
    "metrics": [
      {
        "aggregator": "sum",
        "field": "revenue",
        "scope": "visitor",
        "winning_direction": "increasing"
      }
    ],
    "name": "CX123 - red background",
    "page_ids": [
      6677488684761088
    ],
    "project_id": 14193350179,
    "status": "archived",
    "traffic_allocation": 10000,
    "type": "a/b",
    "variations": [
      {
        "actions": [
          {
            "changes": [
              {
                "async": false,
                "dependencies": [],
                "id": "02e81c35-1238-48f5-bd17-e08d6b71803f",
                "type": "custom_code",
                "value": "console.log('test')"
              },
              {
                "dependencies": [],
                "id": "f2e02f93-cf8b-4314-b187-9f119e5d5735",
                "selector": "head",
                "type": "custom_css",
                "value": ".selector {background: 'red'}"
              }
            ],
            "page_id": 6677488684761088,
            "share_link": "https://uk.tommy.com/women?optimizely_token=c91a5a15fd4b686e7cd20371cf3d642e638a6cb88b05c758f3742bada872366b&optimizely_x=5354395387297792&optimizely_x_audiences=&optimizely_preview_layer_ids=5838890649518080&optimizely_snippet=s3-14193350179"
          }
        ],
        "archived": false,
        "description": "variant description",
        "name": "variant0",
        "status": "active",
        "variation_id": 5354395387297792,
        "weight": 5000
      },
      {
        "actions": [
          {
            "changes": [
              {
                "async": false,
                "dependencies": [],
                "id": "bc3ab871-4716-445c-895a-24356daa067e",
                "type": "custom_code",
                "value": "console.log('test')"
              },
              {
                "dependencies": [],
                "id": "ea5e3880-5f90-4000-ad0b-4a72dd775b6c",
                "selector": "head",
                "type": "custom_css",
                "value": ".selector {background: 'red'}"
              }
            ],
            "page_id": 6677488684761088,
            "share_link": "https://uk.tommy.com/women?optimizely_token=c91a5a15fd4b686e7cd20371cf3d642e638a6cb88b05c758f3742bada872366b&optimizely_x=5768090965770240&optimizely_x_audiences=&optimizely_preview_layer_ids=5838890649518080&optimizely_snippet=s3-14193350179"
          }
        ],
        "archived": false,
        "description": "variant description",
        "name": "variant1",
        "status": "active",
        "variation_id": 5768090965770240,
        "weight": 5000
      }
    ]
  },
  {
    "allocation_policy": "manual",
    "audience_conditions": "[\"and\", {\"audience_id\": 6161659085979648}]",
    "campaign_id": 6245000074231808,
    "changes": [],
    "created": "2024-11-29T13:27:26.177876Z",
    "description": "description placeholder",
    "holdback": 0,
    "id": 4593679906635776,
    "is_classic": false,
    "last_modified": "2024-11-29T13:27:26.177890Z",
    "metrics": [
      {
        "aggregator": "sum",
        "field": "revenue",
        "scope": "visitor",
        "winning_direction": "increasing"
      }
    ],
    "name": "[QA] - CX678 - button test",
    "page_ids": [
      5524941324419072
    ],
    "project_id": 14193350179,
    "status": "archived",
    "traffic_allocation": 10000,
    "type": "a/b",
    "variations": [
      {
        "actions": [
          {
            "changes": [],
            "page_id": 5524941324419072,
            "share_link": "https://uk.tommy.com/women?optimizely_token=c91a5a15fd4b686e7cd20371cf3d642e638a6cb88b05c758f3742bada872366b&optimizely_x=6127605598912512&optimizely_x_audiences=6161659085979648&optimizely_preview_layer_ids=6245000074231808&optimizely_snippet=s3-14193350179"
          }
        ],
        "archived": false,
        "description": "variant description",
        "name": "variant0",
        "status": "active",
        "variation_id": 6127605598912512,
        "weight": 5000
      },
      {
        "actions": [
          {
            "changes": [],
            "page_id": 5524941324419072,
            "share_link": "https://uk.tommy.com/women?optimizely_token=c91a5a15fd4b686e7cd20371cf3d642e638a6cb88b05c758f3742bada872366b&optimizely_x=6303115142496256&optimizely_x_audiences=6161659085979648&optimizely_preview_layer_ids=6245000074231808&optimizely_snippet=s3-14193350179"
          }
        ],
        "archived": false,
        "description": "variant description",
        "name": "variant1",
        "status": "active",
        "variation_id": 6303115142496256,
        "weight": 5000
      }
    ]
  }
];
const experiments_ck = [
  {
    "allocation_policy": "manual",
    "audience_conditions": "[\"and\", {\"audience_id\": 5226595548397568}]",
    "campaign_id": 6011017235267584,
    "changes": [],
    "created": "2024-11-29T09:26:11.861295Z",
    "description": "description placeholder",
    "holdback": 0,
    "id": 4635705758973952,
    "is_classic": false,
    "last_modified": "2024-11-29T09:26:11.861310Z",
    "metrics": [
      {
        "aggregator": "sum",
        "field": "revenue",
        "scope": "visitor",
        "winning_direction": "increasing"
      },
      {
        "aggregator": "unique",
        "event_id": 5035341594230784,
        "scope": "visitor",
        "winning_direction": "increasing"
      },
      {
        "aggregator": "unique",
        "event_id": 5959722507960320,
        "scope": "visitor",
        "winning_direction": "increasing"
      }
    ],
    "name": "[QA] - CX777 - test",
    "page_ids": [
      6254224774791168
    ],
    "project_id": 4639710178443264,
    "status": "archived",
    "traffic_allocation": 10000,
    "type": "a/b",
    "variations": [
      {
        "actions": [
          {
            "changes": [],
            "page_id": 6254224774791168,
            "share_link": "https://uk.tommy.com/women?optimizely_token=b21934f58662ac22ad9276b506b4e01f1c7f8b3b26b98e4ffe46cb9559d942b0&optimizely_x=5380648374894592&optimizely_x_audiences=5226595548397568&optimizely_preview_layer_ids=6011017235267584&optimizely_snippet=s3-4639710178443264"
          }
        ],
        "archived": false,
        "description": "variant description",
        "name": "variant0",
        "status": "active",
        "variation_id": 5380648374894592,
        "weight": 5000
      },
      {
        "actions": [
          {
            "changes": [],
            "page_id": 6254224774791168,
            "share_link": "https://uk.tommy.com/women?optimizely_token=b21934f58662ac22ad9276b506b4e01f1c7f8b3b26b98e4ffe46cb9559d942b0&optimizely_x=5574860487786496&optimizely_x_audiences=5226595548397568&optimizely_preview_layer_ids=6011017235267584&optimizely_snippet=s3-4639710178443264"
          }
        ],
        "archived": false,
        "description": "variant description",
        "name": "variant1",
        "status": "active",
        "variation_id": 5574860487786496,
        "weight": 5000
      }
    ]
  },
  {
    "allocation_policy": "manual",
    "audience_conditions": "[\"and\", {\"audience_id\": 5226595548397568}]",
    "campaign_id": 5352743351615488,
    "changes": [],
    "created": "2024-12-19T08:29:39.698607Z",
    "description": "description placeholder",
    "holdback": 0,
    "id": 4645996802605056,
    "is_classic": false,
    "last_modified": "2024-12-19T08:36:04.419773Z",
    "metrics": [
      {
        "aggregator": "sum",
        "field": "revenue",
        "scope": "visitor",
        "winning_direction": "increasing"
      },
      {
        "aggregator": "unique",
        "event_id": 5419827167232000,
        "scope": "visitor",
        "winning_direction": "increasing"
      }
    ],
    "name": "[QA] - CX1000 - button colour test",
    "page_ids": [
      5025891089121280
    ],
    "project_id": 4639710178443264,
    "status": "archived",
    "traffic_allocation": 10000,
    "type": "a/b",
    "variations": [
      {
        "actions": [
          {
            "changes": [],
            "page_id": 5025891089121280,
            "share_link": "https://uk.tommy.com/women?optimizely_token=b21934f58662ac22ad9276b506b4e01f1c7f8b3b26b98e4ffe46cb9559d942b0&optimizely_x=4508026581811200&optimizely_x_audiences=5226595548397568&optimizely_preview_layer_ids=5352743351615488&optimizely_snippet=s3-4639710178443264"
          }
        ],
        "archived": false,
        "description": "variant description",
        "name": "variant0",
        "status": "active",
        "variation_id": 4508026581811200,
        "weight": 3333
      },
      {
        "actions": [
          {
            "changes": [
              {
                "async": false,
                "dependencies": [],
                "id": "fa7419b6-b44c-41aa-a3a3-d6d071b74511",
                "type": "custom_code",
                "value": "console.log(\"v1 TH\");\nconsole.log(\"another change\");\n\nconsole.log(\"Don't publish this change yet\");"
              }
            ],
            "page_id": 5025891089121280,
            "share_link": "https://uk.tommy.com/women?optimizely_token=b21934f58662ac22ad9276b506b4e01f1c7f8b3b26b98e4ffe46cb9559d942b0&optimizely_x=4684240281927680&optimizely_x_audiences=5226595548397568&optimizely_preview_layer_ids=5352743351615488&optimizely_snippet=s3-4639710178443264"
          }
        ],
        "archived": false,
        "description": "variant description",
        "name": "variant1",
        "status": "active",
        "variation_id": 4684240281927680,
        "weight": 3333
      },
      {
        "actions": [
          {
            "changes": [
              {
                "async": false,
                "dependencies": [],
                "id": "ec7b3728-6fc9-48a3-a809-9faf15f1844f",
                "type": "custom_code",
                "value": "console.log(\"v2 CK\");\nconsole.log(\"another change\");"
              }
            ],
            "page_id": 5025891089121280,
            "share_link": "https://uk.tommy.com/women?optimizely_token=b21934f58662ac22ad9276b506b4e01f1c7f8b3b26b98e4ffe46cb9559d942b0&optimizely_x=5810140188770304&optimizely_x_audiences=5226595548397568&optimizely_preview_layer_ids=5352743351615488&optimizely_snippet=s3-4639710178443264"
          }
        ],
        "archived": false,
        "description": "variant description",
        "name": "variant2",
        "status": "active",
        "variation_id": 5810140188770304,
        "weight": 3334
      }
    ]
  },
  {
    "allocation_policy": "manual",
    "audience_conditions": "everyone",
    "campaign_id": 4797456643260416,
    "changes": [],
    "created": "2025-01-08T14:58:16.833354Z",
    "description": "",
    "holdback": 5000,
    "id": 4677345668235264,
    "is_classic": false,
    "last_modified": "2025-01-08T14:58:16.833363Z",
    "metrics": [],
    "name": "Experiment created via api",
    "page_ids": [],
    "project_id": 4639710178443264,
    "status": "not_started",
    "traffic_allocation": 10000,
    "type": "a/b",
    "url_targeting": {
      "activation_type": "",
      "conditions": "",
      "edit_url": "https://uk.tommy.com/men",
      "key": "4639710178443264_url_targeting_for_experiment_created_via_api",
      "page_id": 5698456560336896
    },
    "variations": [
      {
        "actions": [],
        "archived": false,
        "description": "Variation#1",
        "name": "Black Button",
        "status": "active",
        "variation_id": 4871655919452160,
        "weight": 5000
      },
      {
        "actions": [],
        "archived": false,
        "description": "Variation#2",
        "name": "Red Button",
        "status": "active",
        "variation_id": 5204099113680896,
        "weight": 5000
      }
    ]
  }
];

function App() {
  const [experiments, setExperiments] = useState();
  const [selectedProject, setSelectedProject] = useState("th");
  const [isLoading, setIsLoading] = useState(true);

  function handleSelectProject(project) {
    console.log("project selected = ", project);
    setSelectedProject(project);
    setIsLoading(true);
  };

  function handleExperimentStateChange(experiment, state) {
    console.log(experiment, state);

    // call api + update optimizely //
    networkManager.updateExperimentStatus(selectedProject, experiment, state)


    // update UI
    const copy = experiments.map(exp => {
      const copyExp = {...exp};
      if (exp.id === experiment.id) {
        copyExp.status = state;
      }
      return copyExp
    });
    setExperiments(copy);
    
  }

  useEffect(() => {
    const fetchedExperiments = networkManager.fetchExperiments(selectedProject);
    setTimeout(() => {
      setExperiments(fetchedExperiments);
      setIsLoading(false);
    }, 5000);
  }, [selectedProject]);

  return (
    <>
      <nav>
        <h1>Workflows</h1>
      </nav>
      
      <div className='table-container'>

      <div style={{display: "flex"}}>
        <div className='table-tab' style={{background: selectedProject === 'th' ? "red" : "none", padding: "10px", border: "1px solid red"}} onClick={() => {handleSelectProject('th')}}>Tommy - Web Tests</div>
        <div className='table-tab' style={{background: selectedProject === 'ck' ? "red" : "none", padding: "10px", border: "1px solid red"}} onClick={() => {handleSelectProject('ck')}}>Calvin - Web Tests</div>
      </div>

      <div className='table-list' style={{padding: "10px", border: "1px solid red"}}>
        {isLoading && <h1>Loading...</h1>}
        
        {(experiments && !isLoading) && experiments.map(exp => {
            return <div key={Math.random() * 200} className='table-row' style={{display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid red"}}>
                      <div className='table-data'>
                        <h3>{exp.name}</h3>
                      </div>
                      <div className='table-data'>
                        <h3>Type</h3>
                      </div>
                      <div className='table-data'>
                        <h3>{exp.status}</h3>
                      </div>
                      <div className='table-data'>
                        <select onChange={(e) => {handleExperimentStateChange(exp, e.target.value)}}>
                          <option>Run</option>
                          <option>Pause</option>
                          <option>Archive</option>
                          <option>Conclude</option>
                        </select>
                      </div>
                      
                    </div>
          })}
      </div>
   

      </div>
    </>
  )
}

export default App
