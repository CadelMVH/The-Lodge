TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfov": 360,
  "class": "LivePanorama",
  "thumbnailUrl": "media/panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_1_t.jpg",
  "vfov": 180,
  "id": "panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9",
  "partial": false,
  "frameDisplayTime": 3000,
  "pitch": 0,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_0.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_0_t.jpg"
   },
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_1.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_1_t.jpg",
    "snapshots": [
     {
      "position": {
       "hfov": 120,
       "class": "PanoramaCameraPosition",
       "yaw": -96.72,
       "pitch": -6.42
      },
      "class": "PanoramaSnapshot",
      "id": "snapshot_4B206E3E_5AE2_96F3_41C7_691AA27BF4F3",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 1500,
         "class": "ImageResourceLevel",
         "width": 1500,
         "url": "media/snapshot_4B206E3E_5AE2_96F3_41C7_691AA27BF4F3.jpg"
        }
       ]
      }
     }
    ]
   }
  ],
  "frameTransitionTime": 500,
  "label": "Entry",
  "hfovMax": 120,
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 279.39,
    "x": 310.43,
    "angle": 412.4,
    "map": {
     "class": "Map",
     "fieldOfViewOverlayInsideColor": "#0066CC",
     "fieldOfViewOverlayOutsideColor": "#000000",
     "thumbnailUrl": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_t.jpg",
     "width": 2172,
     "maximumZoomFactor": 1.2,
     "height": 910,
     "overlays": [
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_5BCEA509_5430_AA77_41BF_7863BCC2868C",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 234.76,
        "height": 90,
        "x": 265.74,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_0_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 234.39,
        "x": 265.43,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_0.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_45F0CF92_5437_D59A_41BD_C44E86BA06E9",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 657.98,
        "height": 90,
        "x": 240.38,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_1_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 1)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 657.62,
        "x": 240.08,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_1.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_455DFCC2_5437_7BFA_41CB_28A45F9E3FF6",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 336.99,
        "height": 90,
        "x": 667.13,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_2_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 336.65,
        "x": 666.85,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_2.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_45147A79_5431_5E96_41D1_00B9F4A9CAD5",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 334.24,
        "height": 90,
        "x": 1223.97,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_3_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 4)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 334.07,
        "x": 1223.6,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_3.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_451FBD28_5431_DAB6_41B8_DFEE1BC22991",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 630.43,
        "height": 90,
        "x": 1249.75,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_4_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 630.22,
        "x": 1249.49,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_4.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_44A6ED0A_5430_DA8A_41CC_04341F169612",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 341.31,
        "height": 90,
        "x": 1626.34,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_5_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 341.05,
        "x": 1626.1,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_5.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_45EFB563_5433_AABA_41AF_CC47A57B5287",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 473.94,
        "height": 90,
        "x": 1939.02,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_6_map.gif"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 7)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 473.61,
        "x": 1938.79,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_6.png"
          }
         ]
        }
       },
       "useHandCursor": true
      }
     ],
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 670,
        "class": "ImageResourceLevel",
        "width": 1600,
        "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592.jpeg"
       },
       {
        "height": 335,
        "class": "ImageResourceLevel",
        "width": 800,
        "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_lq.jpeg",
        "grayscale": true
       }
      ]
     },
     "fieldOfViewOverlayRadiusScale": 0.13,
     "fieldOfViewOverlayOutsideOpacity": 0,
     "id": "map_5A214180_5471_EA76_41CA_8DC0B6E70592",
     "label": "The lodge lot model floorplan",
     "scaleMode": "fit_inside",
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.17,
     "minimumZoomFactor": 0.5
    }
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaPlayer",
  "buttonPause": "this.IconButton_3A4DBE9F_3400_1F8F_4164_0ED317E58322",
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_rotation",
  "gyroscopeEnabled": true
 },
 {
  "class": "MapPlayer",
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "viewerArea": {
   "class": "ViewerArea",
   "playbackBarBackgroundColorDirection": "vertical",
   "toolTipShadowBlurRadius": 3,
   "playbackBarHeadWidth": 6,
   "toolTipFontStyle": "normal",
   "toolTipDisplayTime": 600,
   "playbackBarHeadShadow": true,
   "playbackBarBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "playbackBarProgressOpacity": 1,
   "playbackBarHeight": 20,
   "toolTipPaddingBottom": 4,
   "toolTipTextShadowColor": "#000000",
   "progressLeft": 10,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "playbackBarProgressBorderColor": "#000000",
   "paddingBottom": 0,
   "shadow": false,
   "playbackBarBorderColor": "#AAAAAA",
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarBottom": 0,
   "playbackBarBorderRadius": 4,
   "progressBorderColor": "#AAAAAA",
   "progressBarBorderRadius": 4,
   "playbackBarHeadBorderSize": 0,
   "toolTipBorderRadius": 3,
   "progressBackgroundColorDirection": "vertical",
   "toolTipFontFamily": "Arial",
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBorderSize": 0,
   "toolTipPaddingRight": 6,
   "toolTipOpacity": 1,
   "paddingTop": 0,
   "minHeight": 1,
   "transitionDuration": 500,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipBorderSize": 1,
   "toolTipShadowColor": "#333333",
   "toolTipPaddingTop": 4,
   "playbackBarHeadBorderRadius": 0,
   "playbackBarProgressBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipShadowVerticalLength": 0,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipShadowOpacity": 1,
   "width": "100%",
   "progressBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarLeft": 0,
   "progressBorderRadius": 4,
   "playbackBarHeadHeight": 30,
   "transitionMode": "blending",
   "progressBorderSize": 2,
   "height": "100%",
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipTextShadowOpacity": 0,
   "toolTipShadowHorizontalLength": 0,
   "toolTipFontColor": "#606060",
   "progressBarBackgroundColorRatios": [
    0,
    1
   ],
   "progressBarBorderColor": "#000000",
   "toolTipFontSize": 12,
   "playbackBarOpacity": 1,
   "minWidth": 1,
   "progressBarOpacity": 1,
   "progressBackgroundOpacity": 1,
   "playbackBarProgressBorderRadius": 0,
   "top": "0%",
   "progressBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "playbackBarHeadOpacity": 1,
   "toolTipFontWeight": "normal",
   "paddingLeft": 0,
   "borderRadius": 0,
   "progressBarBackgroundColorDirection": "vertical",
   "progressBarBorderSize": 1,
   "id": "MapViewer",
   "progressHeight": 20,
   "progressBarBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "borderSize": 0,
   "progressOpacity": 1,
   "toolTipShadowSpread": 0,
   "progressRight": 10,
   "left": "0%",
   "paddingRight": 0,
   "toolTipPaddingLeft": 6,
   "playbackBarRight": 0,
   "progressBottom": 2,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeadShadowColor": "#000000",
   "playbackBarBorderSize": 2
  }
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 124.71,
     "path": "longest",
     "yawSpeed": 41.85,
     "easing": "cubic_in_out",
     "targetPitch": 1.03,
     "pitchSpeed": 21.33
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -96.72,
   "pitch": -6.42
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5F5865ED_5357_FCED_41C5_19D077869660_t.jpg",
  "vfov": 180,
  "id": "panorama_5F5865ED_5357_FCED_41C5_19D077869660",
  "partial": false,
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5F5865ED_5357_FCED_41C5_19D077869660_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5F5865ED_5357_FCED_41C5_19D077869660.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5F5865ED_5357_FCED_41C5_19D077869660_t.jpg",
    "snapshots": [
     {
      "position": {
       "hfov": 120,
       "class": "PanoramaCameraPosition",
       "yaw": -125.18,
       "pitch": -5.34
      },
      "class": "PanoramaSnapshot",
      "id": "snapshot_4B205E3E_5AE2_96F3_41D6_1AF96595DFE3",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 1500,
         "class": "ImageResourceLevel",
         "width": 1500,
         "url": "media/snapshot_4B205E3E_5AE2_96F3_41D6_1AF96595DFE3.jpg"
        }
       ]
      }
     }
    ]
   }
  ],
  "label": "Living Room",
  "hfovMax": 120,
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 702.62,
    "x": 285.08,
    "angle": 98.52,
    "map": "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 7.42,
     "path": "longest",
     "yawSpeed": 50.45,
     "easing": "cubic_in_out",
     "targetPitch": -2.14,
     "pitchSpeed": 25.61
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5F5865ED_5357_FCED_41C5_19D077869660_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -125.18,
   "pitch": -5.34
  },
  "automaticZoomSpeed": 10
 },
 {
  "class": "PhotoAlbum",
  "label": "Photo Album Drone The Lodge with branding",
  "thumbnailUrl": "media/album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3_t.png",
  "id": "album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.40",
       "y": "0.48",
       "zoomFactor": 1.1
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "duration": 5000,
      "easing": "linear"
     },
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3_0.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "label": "Drone Pic 1",
      "duration": 5000,
      "thumbnailUrl": "media/album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3_0_t.png",
      "width": 2655,
      "id": "album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3_0",
      "height": 1294
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "class": "MovementPhotoCamera",
      "scaleMode": "fit_outside",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.54",
       "y": "0.35",
       "zoomFactor": 1.1
      },
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "duration": 5000,
      "easing": "linear"
     },
     "media": {
      "class": "Photo",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3_1.png",
         "class": "ImageResourceLevel"
        }
       ]
      },
      "label": "Drone Pic 2",
      "duration": 5000,
      "thumbnailUrl": "media/album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3_1_t.png",
      "width": 2655,
      "id": "album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3_1",
      "height": 1294
     }
    }
   ]
  }
 },
 {
  "class": "PhotoAlbumPlayer",
  "buttonPause": "this.IconButton_3A4DBE9F_3400_1F8F_4164_0ED317E58322",
  "id": "MainViewerPhotoAlbumPlayer",
  "viewerArea": "this.MainViewer"
 },
 "this.album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3_0",
 "this.album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3_1",
 {
  "hfov": 360,
  "class": "LivePanorama",
  "thumbnailUrl": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_1_t.jpg",
  "vfov": 180,
  "id": "panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6",
  "partial": false,
  "frameDisplayTime": 2000,
  "pitch": 0,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_0.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_0_t.jpg"
   },
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_1.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_1_t.jpg",
    "snapshots": [
     {
      "position": {
       "hfov": 120,
       "class": "PanoramaCameraPosition",
       "yaw": -133.52,
       "pitch": -5.42
      },
      "class": "PanoramaSnapshot",
      "id": "snapshot_4B204E3E_5AE2_96F3_41D2_CFBA2FE41C45",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 1500,
         "class": "ImageResourceLevel",
         "width": 1500,
         "url": "media/snapshot_4B204E3E_5AE2_96F3_41D2_CFBA2FE41C45.jpg"
        }
       ]
      }
     }
    ]
   },
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_2_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_2.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_2_t.jpg"
   }
  ],
  "frameTransitionTime": 1500,
  "label": "Kitchen",
  "hfovMax": 120,
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 381.65,
    "x": 711.85,
    "angle": 399.94,
    "map": "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -1.96,
     "path": "shortest",
     "yawSpeed": 61.2,
     "easing": "linear",
     "targetPitch": 0.74,
     "pitchSpeed": 30.96
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 121.94,
     "path": "shortest",
     "yawSpeed": 71.95,
     "easing": "quart_in_out",
     "targetPitch": 2.13,
     "pitchSpeed": 36.31
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 35.34,
     "path": "shortest",
     "yawSpeed": 104.2,
     "easing": "linear",
     "targetPitch": 0.16,
     "pitchSpeed": 52.36
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -133.52,
   "pitch": -5.42
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_587E3C83_5430_BA7A_41C1_749A5805FE83_t.jpg",
  "vfov": 180,
  "id": "panorama_587E3C83_5430_BA7A_41C1_749A5805FE83",
  "partial": false,
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_587E3C83_5430_BA7A_41C1_749A5805FE83_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_587E3C83_5430_BA7A_41C1_749A5805FE83.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_587E3C83_5430_BA7A_41C1_749A5805FE83_t.jpg",
    "snapshots": [
     {
      "position": {
       "hfov": 120,
       "class": "PanoramaCameraPosition",
       "yaw": 30.36,
       "pitch": 0.23
      },
      "class": "PanoramaSnapshot",
      "id": "snapshot_4B203E3E_5AE2_96F3_419E_F42B57B9F001",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 1500,
         "class": "ImageResourceLevel",
         "width": 1500,
         "url": "media/snapshot_4B203E3E_5AE2_96F3_419E_F42B57B9F001.jpg"
        }
       ]
      }
     }
    ]
   }
  ],
  "label": "Hallway",
  "hfovMax": 120,
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 379.07,
    "x": 1268.6,
    "angle": 59.4,
    "map": "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -146.66,
     "path": "shortest",
     "yawSpeed": 65.5,
     "easing": "linear",
     "targetPitch": -3.43,
     "pitchSpeed": 33.1
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 117.07,
     "path": "shortest",
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.71,
     "pitchSpeed": 17.05
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_587E3C83_5430_BA7A_41C1_749A5805FE83_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 30.36,
   "pitch": 0.23
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "LivePanorama",
  "thumbnailUrl": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_2_t.jpg",
  "vfov": 180,
  "id": "panorama_58182933_5430_DA9A_41D1_DDDE92320C10",
  "partial": false,
  "frameDisplayTime": 1200,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_0.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_0_t.jpg"
   },
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_1.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_1_t.jpg"
   },
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_2_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_2.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_2_t.jpg",
    "snapshots": [
     {
      "position": {
       "hfov": 150,
       "class": "PanoramaCameraPosition",
       "yaw": 15.01,
       "pitch": -3.04
      },
      "class": "PanoramaSnapshot",
      "id": "snapshot_4B202E3E_5AE2_96F3_41D6_847EE2A3EB96",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 1500,
         "class": "ImageResourceLevel",
         "width": 1500,
         "url": "media/snapshot_4B202E3E_5AE2_96F3_41D6_847EE2A3EB96.jpg"
        }
       ]
      }
     }
    ]
   },
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_3_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_3.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_3_t.jpg"
   }
  ],
  "pitch": 0,
  "frameTransitionTime": 900,
  "label": "Bathroom",
  "hfovMax": 150,
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 675.22,
    "x": 1294.49,
    "angle": 43.01,
    "map": "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592"
   }
  ],
  "hfovMin": 37
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -123.86,
     "path": "longest",
     "yawSpeed": 41.85,
     "easing": "linear",
     "targetPitch": -7.4,
     "pitchSpeed": 21.33
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -17.91,
     "path": "longest",
     "yawSpeed": 26.8,
     "easing": "linear",
     "targetPitch": -58.81,
     "pitchSpeed": 13.84
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -47.6,
     "path": "shortest",
     "hfovSpeed": 80.55,
     "yawSpeed": 80.55,
     "targetHfov": 103,
     "easing": "linear",
     "targetPitch": -6.37,
     "pitchSpeed": 40.59
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_58182933_5430_DA9A_41D1_DDDE92320C10_camera",
  "initialPosition": {
   "hfov": 122,
   "class": "PanoramaCameraPosition",
   "yaw": 15.01,
   "pitch": -3.04
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "LivePanorama",
  "thumbnailUrl": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_1_t.jpg",
  "vfov": 180,
  "id": "panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE",
  "partial": false,
  "frameDisplayTime": 5000,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_0.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_0_t.jpg"
   },
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_1.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_1_t.jpg",
    "snapshots": [
     {
      "position": {
       "hfov": 145,
       "class": "PanoramaCameraPosition",
       "yaw": 116.23,
       "pitch": -0.98
      },
      "class": "PanoramaSnapshot",
      "id": "snapshot_4B201E3E_5AE2_96F3_41AD_BE8516CE4C29",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 1500,
         "class": "ImageResourceLevel",
         "width": 1500,
         "url": "media/snapshot_4B201E3E_5AE2_96F3_41AD_BE8516CE4C29.jpg"
        }
       ]
      }
     }
    ]
   },
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_2_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_2.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_2_t.jpg"
   }
  ],
  "pitch": 0,
  "frameTransitionTime": 5000,
  "label": "Master Bedroom",
  "hfovMax": 145,
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 386.05,
    "x": 1671.1,
    "angle": 61.88,
    "map": "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -39.87,
     "path": "shortest",
     "yawSpeed": 56.9,
     "easing": "linear",
     "targetPitch": -5.64,
     "pitchSpeed": 28.82
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "id": "panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_camera",
  "initialPosition": {
   "hfov": 120,
   "class": "PanoramaCameraPosition",
   "yaw": 116.23,
   "pitch": -0.98
  },
  "automaticZoomSpeed": 10
 },
 {
  "hfov": 360,
  "class": "Panorama",
  "thumbnailUrl": "media/panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A_t.jpg",
  "vfov": 180,
  "id": "panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A",
  "partial": false,
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A_t.jpg",
    "snapshots": [
     {
      "position": {
       "hfov": 120,
       "class": "PanoramaCameraPosition",
       "yaw": 165.15,
       "pitch": 1.93
      },
      "class": "PanoramaSnapshot",
      "id": "snapshot_4B200E3E_5AE2_96F3_4192_CB1442900C59",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 1500,
         "class": "ImageResourceLevel",
         "width": 1500,
         "url": "media/snapshot_4B200E3E_5AE2_96F3_4192_CB1442900C59.jpg"
        }
       ]
      }
     }
    ]
   }
  ],
  "label": "Laundry",
  "hfovMax": 120,
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 518.61,
    "x": 1983.79,
    "angle": 47.52,
    "map": "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592"
   }
  ],
  "hfovMin": 60
 },
 {
  "class": "PanoramaCamera",
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "id": "sequence_5B65FF61_5451_D6B6_41D5_0973A72DCB5D",
   "restartMovementOnUserInteraction": true,
   "restartMovementDelay": 2000,
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -41.29,
     "path": "shortest",
     "hfovSpeed": 65.5,
     "yawSpeed": 65.5,
     "targetHfov": 99,
     "easing": "linear",
     "targetPitch": -4.82,
     "pitchSpeed": 33.1
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -122.56,
     "path": "shortest",
     "hfovSpeed": 33.25,
     "yawSpeed": 33.25,
     "targetHfov": 150,
     "easing": "linear",
     "targetPitch": -5.28,
     "pitchSpeed": 17.05
    }
   ]
  },
  "id": "panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A_camera",
  "timeToIdle": 2000,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 165.15,
   "pitch": 1.93
  },
  "automaticZoomSpeed": 10,
  "initialSequence": "this.sequence_5B65FF61_5451_D6B6_41D5_0973A72DCB5D"
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_3B861384_3400_0671_41C7_B7A175AA4E34",
    "media": "this.panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_3B861384_3400_0671_41C7_B7A175AA4E34, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_3B878384_3400_0671_41C9_11BE8CA65A2E",
    "media": "this.panorama_5F5865ED_5357_FCED_41C5_19D077869660",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_3B878384_3400_0671_41C9_11BE8CA65A2E, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5F5865ED_5357_FCED_41C5_19D077869660_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_3B84B384_3400_0671_41A2_6E2D392512AD",
    "media": "this.panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_3B84B384_3400_0671_41A2_6E2D392512AD, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_3B84D384_3400_0671_41C9_598EDD3146A3",
    "media": "this.panorama_587E3C83_5430_BA7A_41C1_749A5805FE83",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_3B84D384_3400_0671_41C9_598EDD3146A3, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_587E3C83_5430_BA7A_41C1_749A5805FE83_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_3B847384_3400_0671_41B5_16FADEB65332",
    "media": "this.panorama_58182933_5430_DA9A_41D1_DDDE92320C10",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_3B847384_3400_0671_41B5_16FADEB65332, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_58182933_5430_DA9A_41D1_DDDE92320C10_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_3B85C384_3400_0671_41C9_961011EA8C4C",
    "media": "this.panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_3B85C384_3400_0671_41C9_961011EA8C4C, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_3B856384_3400_0671_4189_332C7B91CE8D",
    "media": "this.panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_3B856384_3400_0671_4189_332C7B91CE8D, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)"
   }
  ]
 },
 {
  "class": "Video",
  "scaleMode": "fit_inside",
  "label": "MTVGoldenwestvid4Lodge",
  "thumbnailUrl": "media/video_4B20BD6A_5AE3_FA92_41D3_70E714913D3E_t.jpg",
  "video": {
   "class": "VideoResource",
   "mp4Url": "media/video_4B20BD6A_5AE3_FA92_41D3_70E714913D3E.mp4",
   "width": 1920,
   "height": 1080
  },
  "width": 1920,
  "id": "video_4B20BD6A_5AE3_FA92_41D3_70E714913D3E",
  "loop": false,
  "height": 1080
 },
 {
  "class": "VideoPlayer",
  "buttonPause": "this.IconButton_3A4DBE9F_3400_1F8F_4164_0ED317E58322",
  "id": "MainViewerVideoPlayer",
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer"
 },
 {
  "class": "PlayList",
  "id": "thumbnaillist5245_playlist",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
    "camera": "this.panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5F5865ED_5357_FCED_41C5_19D077869660",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)",
    "camera": "this.panorama_5F5865ED_5357_FCED_41C5_19D077869660_camera"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)",
    "camera": "this.panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_587E3C83_5430_BA7A_41C1_749A5805FE83",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)",
    "camera": "this.panorama_587E3C83_5430_BA7A_41C1_749A5805FE83_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_58182933_5430_DA9A_41D1_DDDE92320C10",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)",
    "camera": "this.panorama_58182933_5430_DA9A_41D1_DDDE92320C10_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)",
    "camera": "this.panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)",
    "camera": "this.panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A_camera"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_4B20BD6A_5AE3_FA92_41D3_70E714913D3E",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 0)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.thumbnaillist5245_playlist, 8, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.thumbnaillist5245_playlist, 8, this.video_4B20BD6A_5AE3_FA92_41D3_70E714913D3E)"
   }
  ]
 },
 "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592",
 {
  "class": "PlayList",
  "id": "playList_3B794384_3400_0671_41C0_D8E6A2E796C2",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_3B795384_3400_0671_41C4_AE0808876229",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "class": "MediaAudio",
  "id": "audio_503CB7D6_5ACC_A6CF_41D5_2D4E0AA3326F",
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_503CB7D6_5ACC_A6CF_41D5_2D4E0AA3326F.mp3",
   "oggUrl": "media/audio_503CB7D6_5ACC_A6CF_41D5_2D4E0AA3326F.ogg"
  },
  "data": {
   "label": "The Lodge Tour w background music"
  }
 }
], "children": [
 {
  "class": "ViewerArea",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadWidth": 6,
  "toolTipFontStyle": "normal",
  "toolTipDisplayTime": 600,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarProgressOpacity": 1,
  "playbackBarHeight": 20,
  "toolTipPaddingBottom": 4,
  "toolTipTextShadowColor": "#000000",
  "progressLeft": 10,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadow": true,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarProgressBorderColor": "#000000",
  "paddingBottom": 0,
  "shadow": false,
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarBottom": 10,
  "playbackBarBorderRadius": 4,
  "progressBorderColor": "#AAAAAA",
  "progressBarBorderRadius": 4,
  "playbackBarHeadBorderSize": 0,
  "toolTipBorderRadius": 3,
  "toolTipBorderColor": "#767676",
  "toolTipFontFamily": "Arial",
  "toolTipShadowOpacity": 1,
  "playbackBarProgressBorderSize": 0,
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 1,
  "paddingTop": 0,
  "minHeight": 50,
  "transitionDuration": 500,
  "toolTipBorderSize": 1,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowColor": "#333333",
  "toolTipPaddingTop": 4,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarLeft": 0,
  "progressBorderRadius": 4,
  "playbackBarHeadHeight": 30,
  "transitionMode": "blending",
  "progressBorderSize": 2,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontColor": "#606060",
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBorderColor": "#000000",
  "toolTipFontSize": 12,
  "playbackBarOpacity": 1,
  "minWidth": 100,
  "progressBarOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "top": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "paddingLeft": 0,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "borderRadius": 0,
  "id": "MainViewer",
  "progressBarBorderSize": 1,
  "bottom": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "progressHeight": 20,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressOpacity": 1,
  "toolTipShadowSpread": 0,
  "progressRight": 10,
  "left": 0,
  "paddingRight": 0,
  "borderSize": 0,
  "playbackBarRight": 0,
  "progressBottom": 1,
  "right": 0,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarBorderSize": 2
 },
 {
  "class": "ThumbnailList",
  "horizontalAlign": "left",
  "backgroundColor": [
   "#000000"
  ],
  "selectedItemLabelFontWeight": "bold",
  "itemThumbnailShadowOpacity": 0.8,
  "layout": "vertical",
  "paddingBottom": 10,
  "shadow": false,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemLabelTextDecoration": "none",
  "itemThumbnailHeight": 70,
  "itemBackgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "itemLabelFontWeight": "normal",
  "itemThumbnailScaleMode": "fit_outside",
  "minHeight": 0,
  "itemLabelFontSize": 14,
  "paddingTop": 10,
  "itemPaddingBottom": 3,
  "maxHeight": 800,
  "itemThumbnailBorderRadius": 5,
  "scrollBarColor": "#FFFFFF",
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowVerticalLength": 3,
  "itemPaddingTop": 3,
  "itemPaddingRight": 3,
  "itemLabelFontFamily": "Arial",
  "width": 159,
  "itemLabelGap": 8,
  "scrollBarWidth": 10,
  "itemLabelFontColor": "#FFFFFF",
  "itemThumbnailShadowColor": "#000000",
  "scrollBarMargin": 2,
  "itemMode": "normal",
  "itemHorizontalAlign": "center",
  "itemVerticalAlign": "middle",
  "itemOpacity": 1,
  "minWidth": 0,
  "top": "16.82%",
  "maxWidth": 900,
  "itemThumbnailWidth": 100,
  "itemBackgroundColor": [],
  "itemThumbnailShadow": true,
  "borderRadius": 5,
  "id": "thumbnaillist5245",
  "paddingLeft": 20,
  "scrollBarOpacity": 0.5,
  "verticalAlign": "top",
  "itemThumbnailOpacity": 1,
  "backgroundColorDirection": "vertical",
  "playList": "this.thumbnaillist5245_playlist",
  "scrollBarVisible": "rollOver",
  "itemBorderRadius": 0,
  "data": {
   "name": "ThumbnailList28173"
  },
  "itemPaddingLeft": 3,
  "backgroundOpacity": 0.2,
  "itemThumbnailShadowSpread": 1,
  "borderSize": 0,
  "itemBackgroundColorRatios": [],
  "itemLabelFontStyle": "normal",
  "itemLabelPosition": "bottom",
  "itemThumbnailShadowBlurRadius": 4,
  "paddingRight": 20,
  "right": "0%",
  "backgroundColorRatios": [
   0
  ],
  "bottom": "20.28%",
  "gap": 0
 },
 {
  "class": "Image",
  "horizontalAlign": "center",
  "width": "9.662%",
  "height": "8.677%",
  "maxHeight": 817,
  "url": "skin/Image_306F4727_273A_95B3_41B2_3DF89EEDBF85.png",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "shadow": false,
  "click": "this.openLink(\"https://www.mtviewhomes.com/\", \"_blank\")",
  "minWidth": 1,
  "cursor": "hand",
  "maxWidth": 1467,
  "paddingLeft": 0,
  "borderRadius": 0,
  "id": "Image_306F4727_273A_95B3_41B2_3DF89EEDBF85",
  "data": {
   "name": "Wave Logo"
  },
  "verticalAlign": "middle",
  "minHeight": 1,
  "borderSize": 0,
  "bottom": "0.02%",
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "paddingRight": 0,
  "right": "0.04%"
 },
 {
  "class": "Image",
  "horizontalAlign": "center",
  "width": "38.165%",
  "height": "6.392%",
  "maxHeight": 186,
  "url": "skin/Image_3E29962B_272E_B7B3_4191_F996EF0F95BB.png",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "shadow": false,
  "click": "this.openLink(\"https://www.mtviewhomes.com/\", \"_blank\")",
  "minWidth": 1,
  "top": "0.07%",
  "cursor": "hand",
  "maxWidth": 1700,
  "paddingLeft": 0,
  "borderRadius": 0,
  "id": "Image_3E29962B_272E_B7B3_4191_F996EF0F95BB",
  "data": {
   "name": "MTViewhomes"
  },
  "verticalAlign": "middle",
  "borderSize": 0,
  "minHeight": 1,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "paddingRight": 0,
  "right": "28.11%"
 },
 {
  "class": "Container",
  "children": [
   "this.MapViewer"
  ],
  "backgroundColorRatios": [
   0,
   1
  ],
  "horizontalAlign": "left",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "width": "28.721%",
  "scrollBarWidth": 10,
  "height": "26.462%",
  "layout": "absolute",
  "scrollBarMargin": 2,
  "paddingBottom": 0,
  "shadow": false,
  "overflow": "scroll",
  "minWidth": 1,
  "top": "1.82%",
  "paddingLeft": 0,
  "borderRadius": 0,
  "id": "Container_581FBEE1_4338_67EB_41B1_0EF3FEBC0B73",
  "scrollBarOpacity": 0.5,
  "verticalAlign": "top",
  "backgroundColorDirection": "vertical",
  "scrollBarVisible": "rollOver",
  "minHeight": 1,
  "borderSize": 0,
  "data": {
   "name": "Container24488"
  },
  "paddingTop": 0,
  "backgroundOpacity": 0.3,
  "left": "0.63%",
  "paddingRight": 0,
  "contentOpaque": false,
  "scrollBarColor": "#000000",
  "creationPolicy": "inAdvance",
  "gap": 10
 },
 {
  "class": "IconButton",
  "toolTipShadowVerticalLength": 0,
  "toolTipShadowBlurRadius": 3,
  "horizontalAlign": "center",
  "mode": "toggle",
  "toolTipFontStyle": "normal",
  "width": 69,
  "toolTipDisplayTime": 600,
  "iconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75.png",
  "height": 74.75,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingBottom": 4,
  "toolTipBackgroundColor": "#F6F6F6",
  "pressedIconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75_pressed.png",
  "toolTipTextShadowOpacity": 0,
  "paddingBottom": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontColor": "#606060",
  "shadow": false,
  "toolTipFontSize": 12,
  "transparencyActive": true,
  "minWidth": 0,
  "toolTipFontWeight": "normal",
  "cursor": "hand",
  "bottom": "0%",
  "toolTipBorderRadius": 3,
  "paddingLeft": 0,
  "toolTipBorderColor": "#767676",
  "borderRadius": 0,
  "id": "IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
  "toolTipFontFamily": "Arial",
  "data": {
   "name": "Button49930"
  },
  "verticalAlign": "middle",
  "toolTipShadowOpacity": 1,
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 1,
  "borderSize": 0,
  "toolTipShadowSpread": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "minHeight": 0,
  "toolTipBorderSize": 1,
  "paddingRight": 0,
  "right": "24.17%",
  "toolTipShadowColor": "#333333",
  "toolTipPaddingTop": 4,
  "toolTipTextShadowColor": "#000000",
  "toolTipPaddingLeft": 6,
  "toolTip": "Mute"
 },
 {
  "class": "IconButton",
  "maxHeight": 128,
  "toolTipShadowBlurRadius": 3,
  "horizontalAlign": "center",
  "mode": "toggle",
  "toolTipFontStyle": "normal",
  "width": 69,
  "toolTipShadowVerticalLength": 0,
  "toolTipDisplayTime": 600,
  "iconURL": "skin/IconButton_39F20F30_3400_7E91_41C2_2B567E42F88C.png",
  "height": 69.15,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingBottom": 4,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipTextShadowOpacity": 0,
  "paddingBottom": 0,
  "toolTipShadowHorizontalLength": 0,
  "toolTipFontColor": "#606060",
  "shadow": false,
  "toolTipFontSize": 12,
  "transparencyActive": true,
  "minWidth": 1,
  "toolTipFontWeight": "normal",
  "cursor": "hand",
  "maxWidth": 128,
  "toolTipBorderRadius": 3,
  "paddingLeft": 0,
  "toolTipBorderColor": "#767676",
  "borderRadius": 0,
  "id": "IconButton_39F20F30_3400_7E91_41C2_2B567E42F88C",
  "toolTipFontFamily": "Arial",
  "data": {
   "name": "IconButton1493"
  },
  "verticalAlign": "middle",
  "minHeight": 1,
  "borderSize": 0,
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 1,
  "bottom": "0.03%",
  "toolTipShadowSpread": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "paddingRight": 0,
  "toolTipBorderSize": 1,
  "toolTip": "Fullscreen",
  "right": "15.45%",
  "toolTipShadowOpacity": 1,
  "toolTipShadowColor": "#333333",
  "toolTipPaddingTop": 4,
  "toolTipTextShadowColor": "#000000",
  "toolTipPaddingLeft": 6
 },
 {
  "class": "IconButton",
  "horizontalAlign": "center",
  "mode": "toggle",
  "width": 69.4,
  "iconURL": "skin/IconButton_3A4DBE9F_3400_1F8F_4164_0ED317E58322.png",
  "height": 71.45,
  "pressedIconURL": "skin/IconButton_3A4DBE9F_3400_1F8F_4164_0ED317E58322_pressed.png",
  "paddingBottom": 0,
  "shadow": false,
  "transparencyActive": true,
  "minWidth": 0,
  "cursor": "hand",
  "bottom": "0.05%",
  "paddingLeft": 0,
  "borderRadius": 0,
  "id": "IconButton_3A4DBE9F_3400_1F8F_4164_0ED317E58322",
  "data": {
   "name": "Button49926"
  },
  "verticalAlign": "middle",
  "borderSize": 0,
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "minHeight": 0,
  "paddingRight": 0,
  "right": "19.89%"
 }
], 
 "start": "this.playAudioList([this.audio_503CB7D6_5ACC_A6CF_41D5_2D4E0AA3326F]); this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_3B795384_3400_0671_41C4_AE0808876229.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_39F20F30_3400_7E91_41C2_2B567E42F88C].forEach(function(component) { component.set('visible', false); }) }",
 "class": "Player",
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "vrPolyfillScale": 0.88,
 "scrollBarWidth": 10,
 "width": "100%",
 "height": "100%",
 "layout": "absolute",
 "scrollBarMargin": 2,
 "paddingBottom": 0,
 "buttonToggleFullscreen": "this.IconButton_39F20F30_3400_7E91_41C2_2B567E42F88C",
 "shadow": false,
 "overflow": "visible",
 "minWidth": 20,
 "scripts": {
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getKey": function(key){  return window[key]; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); }
 },
 "paddingLeft": 0,
 "minHeight": 20,
 "borderRadius": 0,
 "id": "rootPlayer",
 "scrollBarOpacity": 0.5,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "data": {
  "name": "Player28156"
 },
 "mobileMipmappingEnabled": false,
 "borderSize": 0,
 "paddingTop": 0,
 "buttonToggleMute": "this.IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "creationPolicy": "inAdvance",
 "gap": 10
})