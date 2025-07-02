var APP_DATA = {
  "scenes": [
    {
      "id": "0-360tour",
      "name": "360tour",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": 2.277812411200003,
        "pitch": 0,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 0.4164590026715267,
          "pitch": 0.11022895677460554,
          "rotation": 0,
          "target": "2-panorama"
        },
        {
          "yaw": 0.7779728735804561,
          "pitch": 0.13167911693791012,
          "rotation": 0,
          "target": "1-360tour2"
        }
      ],
      "infoHotspots": [
        {
    "yaw": 1,
    "pitch": 1,
    "title": "Binoning oldi",
    "text": "Bu bino haqida...",
    "video": "videos/video1.mp4"
  },
      ]
    },
    {
      "id": "1-360tour2",
      "name": "360tour2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0823029383629255,
          "pitch": 0.2245539296644381,
          "rotation": 0,
          "target": "2-panorama"
        },
        {
          "yaw": 2.190712031631275,
          "pitch": 0.07501911684950535,
          "rotation": 0,
          "target": "0-360tour"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-panorama",
      "name": "panorama",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5828919671087576,
          "pitch": 0.18259217947105277,
          "rotation": 0,
          "target": "1-360tour2"
        },
        {
          "yaw": 2.142237044817172,
          "pitch": 0.09205880981712156,
          "rotation": 0,
          "target": "0-360tour"
        }
      ],
 "infoHotspots": [
  {
    "yaw": 1,
    "pitch": 1,
    "title": "Test 1",
    "text": "Video 1",
    "video": "videos/video1.mp4"
  },
  {
    "yaw": -1.6,
    "pitch": 1,
    "title": "Test 2",
    "text": "Video 2",
    "video": "videos/video2.mp4"
  }
]


    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
