TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    }
   },
   {
    "snapshots": [
     {
      "position": {
       "class": "PanoramaCameraPosition",
       "hfov": 120,
       "yaw": -96.72,
       "pitch": -6.42
      },
      "class": "PanoramaSnapshot",
      "id": "snapshot_4B206E3E_5AE2_96F3_41C7_691AA27BF4F3",
      "image": {
       "levels": [
        {
         "height": 1500,
         "class": "ImageResourceLevel",
         "width": 1500,
         "url": "media/snapshot_4B206E3E_5AE2_96F3_41C7_691AA27BF4F3.jpg"
        }
       ],
       "class": "ImageResource"
      }
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_1_t.jpg"
   }
  ],
  "hfov": 360,
  "frameTransitionTime": 500,
  "id": "panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9",
  "class": "LivePanorama",
  "mapLocations": [
   {
    "x": 310.43,
    "y": 279.39,
    "class": "PanoramaMapLocation",
    "angle": 412.4,
    "map": {
     "thumbnailUrl": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_t.jpg",
     "width": 2172,
     "id": "map_5A214180_5471_EA76_41CA_8DC0B6E70592",
     "height": 910,
     "overlays": [
      {
       "data": {
        "label": "Image"
       },
       "id": "overlay_5BCEA509_5430_AA77_41BF_7863BCC2868C",
       "map": {
        "offsetY": 0,
        "x": 265.74,
        "width": 90,
        "y": 234.76,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_0_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "image": {
        "x": 265.43,
        "y": 234.39,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "levels": [
          {
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_0.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "data": {
        "label": "Image"
       },
       "id": "overlay_45F0CF92_5437_D59A_41BD_C44E86BA06E9",
       "map": {
        "offsetY": 0,
        "x": 240.38,
        "width": 90,
        "y": 657.98,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_1_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 1)"
        }
       ],
       "image": {
        "x": 240.08,
        "y": 657.62,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "levels": [
          {
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_1.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "data": {
        "label": "Image"
       },
       "id": "overlay_455DFCC2_5437_7BFA_41CB_28A45F9E3FF6",
       "map": {
        "offsetY": 0,
        "x": 667.13,
        "width": 90,
        "y": 336.99,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_2_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ],
       "image": {
        "x": 666.85,
        "y": 336.65,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "levels": [
          {
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_2.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "data": {
        "label": "Image"
       },
       "id": "overlay_45147A79_5431_5E96_41D1_00B9F4A9CAD5",
       "map": {
        "offsetY": 0,
        "x": 1223.97,
        "width": 90,
        "y": 334.24,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_3_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 4)"
        }
       ],
       "image": {
        "x": 1223.6,
        "y": 334.07,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "levels": [
          {
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_3.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "data": {
        "label": "Image"
       },
       "id": "overlay_451FBD28_5431_DAB6_41B8_DFEE1BC22991",
       "map": {
        "offsetY": 0,
        "x": 1249.75,
        "width": 90,
        "y": 630.43,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_4_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "image": {
        "x": 1249.49,
        "y": 630.22,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "levels": [
          {
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_4.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "data": {
        "label": "Image"
       },
       "id": "overlay_44A6ED0A_5430_DA8A_41CC_04341F169612",
       "map": {
        "offsetY": 0,
        "x": 1626.34,
        "width": 90,
        "y": 341.31,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_5_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ],
       "image": {
        "x": 1626.1,
        "y": 341.05,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "levels": [
          {
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_5.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "data": {
        "label": "Image"
       },
       "id": "overlay_45EFB563_5433_AABA_41AF_CC47A57B5287",
       "map": {
        "offsetY": 0,
        "x": 1939.02,
        "width": 90,
        "y": 473.94,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_6_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 7)"
        }
       ],
       "image": {
        "x": 1938.79,
        "y": 473.61,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "levels": [
          {
           "height": 66,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/map_5A214180_5471_EA76_41CA_8DC0B6E70592_HS_6.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      }
     ],
     "image": {
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
      ],
      "class": "ImageResource"
     },
     "fieldOfViewOverlayInsideOpacity": 0.17,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideColor": "#0066CC",
     "minimumZoomFactor": 0.5,
     "class": "Map",
     "label": "The lodge lot model floorplan",
     "scaleMode": "fit_inside",
     "maximumZoomFactor": 1.2,
     "fieldOfViewOverlayRadiusScale": 0.13,
     "fieldOfViewOverlayOutsideOpacity": 0
    }
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "hfovMax": 120,
  "label": "Entry",
  "hfovMin": 60,
  "partial": false,
  "frameDisplayTime": 3000,
  "thumbnailUrl": "media/panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_1_t.jpg"
 },
 {
  "buttonRestart": {
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png",
   "mode": "push",
   "width": 38,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png",
   "height": 38,
   "backgroundOpacity": 0,
   "paddingTop": 0,
   "paddingLeft": 0,
   "shadow": false,
   "minWidth": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png",
   "verticalAlign": "middle",
   "borderRadius": 0,
   "cursor": "hand",
   "minHeight": 0,
   "borderSize": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
   "data": {
    "name": "Button1195"
   },
   "class": "IconButton",
   "transparencyActive": false,
   "horizontalAlign": "center",
   "paddingRight": 0
  },
  "buttonZoomOut": {
   "toolTipFontStyle": "normal",
   "paddingBottom": 0,
   "toolTipFontFamily": "Arial",
   "toolTipBorderSize": 1,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png",
   "toolTipDisplayTime": 600,
   "mode": "push",
   "toolTipPaddingTop": 4,
   "width": 30,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png",
   "toolTipFontColor": "#606060",
   "height": 30,
   "toolTipShadowSpread": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipOpacity": 1,
   "toolTipPaddingBottom": 4,
   "toolTipPaddingRight": 6,
   "toolTipBorderRadius": 3,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipBorderColor": "#767676",
   "backgroundOpacity": 0,
   "toolTip": "Zoom Out",
   "paddingTop": 0,
   "paddingLeft": 0,
   "shadow": false,
   "toolTipTextShadowColor": "#000000",
   "toolTipFontSize": 12,
   "minWidth": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png",
   "verticalAlign": "middle",
   "toolTipFontWeight": "normal",
   "borderRadius": 0,
   "toolTipShadowOpacity": 1,
   "cursor": "hand",
   "minHeight": 0,
   "borderSize": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
   "toolTipShadowHorizontalLength": 0,
   "class": "IconButton",
   "toolTipTextShadowOpacity": 0,
   "data": {
    "name": "Button1207"
   },
   "transparencyActive": false,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "horizontalAlign": "center",
   "toolTipShadowColor": "#333333",
   "paddingRight": 0
  },
  "buttonZoomIn": {
   "toolTipFontStyle": "normal",
   "paddingBottom": 0,
   "toolTipFontFamily": "Arial",
   "toolTipBorderSize": 1,
   "rollOverIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png",
   "toolTipDisplayTime": 600,
   "mode": "push",
   "toolTipPaddingTop": 4,
   "width": 30,
   "pressedIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png",
   "toolTipFontColor": "#606060",
   "height": 30,
   "toolTipShadowSpread": 0,
   "toolTipShadowVerticalLength": 0,
   "toolTipOpacity": 1,
   "toolTipPaddingBottom": 4,
   "toolTipPaddingRight": 6,
   "toolTipBorderRadius": 3,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipBorderColor": "#767676",
   "backgroundOpacity": 0,
   "toolTip": "Zoom In",
   "paddingTop": 0,
   "paddingLeft": 0,
   "shadow": false,
   "toolTipTextShadowColor": "#000000",
   "toolTipFontSize": 12,
   "minWidth": 0,
   "iconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png",
   "verticalAlign": "middle",
   "toolTipFontWeight": "normal",
   "borderRadius": 0,
   "toolTipShadowOpacity": 1,
   "cursor": "hand",
   "minHeight": 0,
   "borderSize": 0,
   "id": "IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
   "toolTipShadowHorizontalLength": 0,
   "class": "IconButton",
   "toolTipTextShadowOpacity": 0,
   "data": {
    "name": "Button1208"
   },
   "transparencyActive": false,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowBlurRadius": 3,
   "toolTipPaddingLeft": 6,
   "horizontalAlign": "center",
   "toolTipShadowColor": "#333333",
   "paddingRight": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonPlayRight": {
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png",
   "mode": "push",
   "width": 38,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png",
   "height": 38,
   "backgroundOpacity": 0,
   "paddingTop": 0,
   "paddingLeft": 0,
   "shadow": false,
   "minWidth": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png",
   "verticalAlign": "middle",
   "borderRadius": 0,
   "cursor": "hand",
   "minHeight": 0,
   "borderSize": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
   "data": {
    "name": "Button1198"
   },
   "class": "IconButton",
   "transparencyActive": false,
   "horizontalAlign": "center",
   "paddingRight": 0
  },
  "gyroscopeEnabled": true,
  "touchControlMode": "drag_rotation",
  "viewerArea": "this.MainViewer",
  "buttonPause": {
   "paddingBottom": 0,
   "mode": "toggle",
   "width": 40,
   "pressedIconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D_pressed.png",
   "height": 40,
   "backgroundOpacity": 0,
   "paddingTop": 0,
   "paddingLeft": 0,
   "shadow": false,
   "minWidth": 0,
   "iconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D.png",
   "verticalAlign": "middle",
   "borderRadius": 0,
   "cursor": "hand",
   "minHeight": 0,
   "borderSize": 0,
   "id": "IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
   "data": {
    "name": "Button1167"
   },
   "class": "IconButton",
   "transparencyActive": false,
   "horizontalAlign": "center",
   "paddingRight": 0
  },
  "buttonPlayLeft": {
   "paddingBottom": 0,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png",
   "mode": "push",
   "width": 38,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png",
   "height": 38,
   "backgroundOpacity": 0,
   "paddingTop": 0,
   "paddingLeft": 0,
   "shadow": false,
   "minWidth": 0,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png",
   "verticalAlign": "middle",
   "borderRadius": 0,
   "cursor": "hand",
   "minHeight": 0,
   "borderSize": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
   "data": {
    "name": "Button1196"
   },
   "class": "IconButton",
   "transparencyActive": false,
   "horizontalAlign": "center",
   "paddingRight": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_rotation",
  "displayPlaybackBar": true
 },
 {
  "movementMode": "constrained",
  "buttonZoomOut": "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
  "buttonZoomIn": "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "viewerArea": {
   "toolTipFontStyle": "normal",
   "toolTipFontFamily": "Arial",
   "transitionDuration": 500,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipShadowVerticalLength": 0,
   "toolTipFontColor": "#606060",
   "toolTipTextShadowBlurRadius": 3,
   "progressBorderRadius": 4,
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadBorderSize": 0,
   "toolTipOpacity": 1,
   "playbackBarHeadBorderColor": "#000000",
   "paddingTop": 0,
   "playbackBarHeadBorderRadius": 0,
   "progressBorderSize": 2,
   "toolTipShadowHorizontalLength": 0,
   "shadow": false,
   "progressBarOpacity": 1,
   "toolTipTextShadowOpacity": 0,
   "playbackBarOpacity": 1,
   "progressBarBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "minHeight": 1,
   "progressBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "playbackBarHeadOpacity": 1,
   "progressBackgroundOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadShadow": true,
   "progressBarBorderColor": "#000000",
   "toolTipBackgroundColor": "#F6F6F6",
   "progressBarBackgroundColorDirection": "vertical",
   "toolTipPaddingLeft": 6,
   "transitionMode": "blending",
   "playbackBarHeadHeight": 30,
   "progressOpacity": 1,
   "toolTipShadowColor": "#333333",
   "playbackBarLeft": 0,
   "progressRight": 10,
   "playbackBarProgressBorderRadius": 0,
   "progressBackgroundColorRatios": [
    0,
    1
   ],
   "paddingBottom": 0,
   "paddingRight": 0,
   "toolTipBorderSize": 1,
   "progressBarBorderSize": 1,
   "toolTipDisplayTime": 600,
   "toolTipPaddingTop": 4,
   "playbackBarHeadShadowColor": "#000000",
   "playbackBarRight": 0,
   "height": "100%",
   "toolTipShadowSpread": 0,
   "width": "100%",
   "playbackBarBackgroundColorDirection": "vertical",
   "toolTipPaddingBottom": 4,
   "toolTipPaddingRight": 6,
   "playbackBarHeight": 20,
   "toolTipBorderRadius": 3,
   "playbackBarHeadWidth": 6,
   "playbackBarBackgroundOpacity": 1,
   "toolTipTextShadowColor": "#000000",
   "toolTipFontSize": 12,
   "playbackBarBorderSize": 2,
   "playbackBarProgressOpacity": 1,
   "playbackBarBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "paddingLeft": 0,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarBorderColor": "#AAAAAA",
   "progressLeft": 10,
   "minWidth": 1,
   "top": "0%",
   "toolTipFontWeight": "normal",
   "borderRadius": 0,
   "toolTipShadowOpacity": 1,
   "borderSize": 0,
   "id": "MapViewer",
   "progressBorderColor": "#AAAAAA",
   "playbackBarBottom": 0,
   "playbackBarProgressBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "progressBackgroundColorDirection": "vertical",
   "playbackBarBorderRadius": 4,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "class": "ViewerArea",
   "toolTipShadowBlurRadius": 3,
   "progressBarBorderRadius": 4,
   "playbackBarHeadShadowVerticalLength": 0,
   "progressHeight": 20,
   "left": "0%",
   "progressBottom": 2,
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarProgressBorderSize": 0
  }
 },
 {
  "id": "panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_camera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 124.71,
     "targetPitch": 1.03,
     "path": "longest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "pitchSpeed": 21.33,
     "yawSpeed": 41.85
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -96.72,
   "pitch": -6.42
  }
 },
 {
  "frames": [
   {
    "snapshots": [
     {
      "position": {
       "class": "PanoramaCameraPosition",
       "hfov": 120,
       "yaw": -125.18,
       "pitch": -5.34
      },
      "class": "PanoramaSnapshot",
      "id": "snapshot_4B205E3E_5AE2_96F3_41D6_1AF96595DFE3",
      "image": {
       "levels": [
        {
         "height": 1500,
         "class": "ImageResourceLevel",
         "width": 1500,
         "url": "media/snapshot_4B205E3E_5AE2_96F3_41D6_1AF96595DFE3.jpg"
        }
       ],
       "class": "ImageResource"
      }
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5F5865ED_5357_FCED_41C5_19D077869660_t.jpg"
   }
  ],
  "hfov": 360,
  "id": "panorama_5F5865ED_5357_FCED_41C5_19D077869660",
  "class": "Panorama",
  "mapLocations": [
   {
    "x": 285.08,
    "y": 702.62,
    "class": "PanoramaMapLocation",
    "angle": 98.52,
    "map": "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592"
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "hfovMax": 120,
  "label": "Living Room",
  "hfovMin": 60,
  "partial": false,
  "thumbnailUrl": "media/panorama_5F5865ED_5357_FCED_41C5_19D077869660_t.jpg"
 },
 {
  "id": "panorama_5F5865ED_5357_FCED_41C5_19D077869660_camera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 7.42,
     "targetPitch": -2.14,
     "path": "longest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "pitchSpeed": 25.61,
     "yawSpeed": 50.45
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -125.18,
   "pitch": -5.34
  }
 },
 {
  "label": "Photo Album Drone The Lodge with branding",
  "id": "album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.40",
       "zoomFactor": 1.1,
       "y": "0.48"
      }
     },
     "media": {
      "label": "Drone Pic 1",
      "width": 2655,
      "id": "album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3_0",
      "height": 1294,
      "class": "Photo",
      "duration": 5000,
      "image": {
       "levels": [
        {
         "url": "media/album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "thumbnailUrl": "media/album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3_0_t.png"
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "zoomFactor": 1,
       "y": "0.50"
      },
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.54",
       "zoomFactor": 1.1,
       "y": "0.35"
      }
     },
     "media": {
      "label": "Drone Pic 2",
      "width": 2655,
      "id": "album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3_1",
      "height": 1294,
      "class": "Photo",
      "duration": 5000,
      "image": {
       "levels": [
        {
         "url": "media/album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3_1.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "thumbnailUrl": "media/album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3_1_t.png"
     }
    }
   ]
  },
  "class": "PhotoAlbum",
  "thumbnailUrl": "media/album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3_t.png"
 },
 {
  "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
  "class": "PhotoAlbumPlayer",
  "id": "MainViewerPhotoAlbumPlayer",
  "viewerArea": "this.MainViewer",
  "buttonPause": "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D"
 },
 "this.album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3_0",
 "this.album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3_1",
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    }
   },
   {
    "snapshots": [
     {
      "position": {
       "class": "PanoramaCameraPosition",
       "hfov": 120,
       "yaw": -133.52,
       "pitch": -5.42
      },
      "class": "PanoramaSnapshot",
      "id": "snapshot_4B204E3E_5AE2_96F3_41D2_CFBA2FE41C45",
      "image": {
       "levels": [
        {
         "height": 1500,
         "class": "ImageResourceLevel",
         "width": 1500,
         "url": "media/snapshot_4B204E3E_5AE2_96F3_41D2_CFBA2FE41C45.jpg"
        }
       ],
       "class": "ImageResource"
      }
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_1_t.jpg"
   },
   {
    "thumbnailUrl": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_2_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "frameTransitionTime": 1500,
  "id": "panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6",
  "class": "LivePanorama",
  "mapLocations": [
   {
    "x": 711.85,
    "y": 381.65,
    "class": "PanoramaMapLocation",
    "angle": 399.94,
    "map": "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592"
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "hfovMax": 120,
  "label": "Kitchen",
  "hfovMin": 60,
  "partial": false,
  "frameDisplayTime": 2000,
  "thumbnailUrl": "media/panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_1_t.jpg"
 },
 {
  "id": "panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_camera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -1.96,
     "targetPitch": 0.74,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "pitchSpeed": 30.96,
     "yawSpeed": 61.2
    },
    {
     "targetYaw": 121.94,
     "targetPitch": 2.13,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "quart_in_out",
     "pitchSpeed": 36.31,
     "yawSpeed": 71.95
    },
    {
     "targetYaw": 35.34,
     "targetPitch": 0.16,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "pitchSpeed": 52.36,
     "yawSpeed": 104.2
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -133.52,
   "pitch": -5.42
  }
 },
 {
  "frames": [
   {
    "snapshots": [
     {
      "position": {
       "class": "PanoramaCameraPosition",
       "hfov": 120,
       "yaw": 30.36,
       "pitch": 0.23
      },
      "class": "PanoramaSnapshot",
      "id": "snapshot_4B203E3E_5AE2_96F3_419E_F42B57B9F001",
      "image": {
       "levels": [
        {
         "height": 1500,
         "class": "ImageResourceLevel",
         "width": 1500,
         "url": "media/snapshot_4B203E3E_5AE2_96F3_419E_F42B57B9F001.jpg"
        }
       ],
       "class": "ImageResource"
      }
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_587E3C83_5430_BA7A_41C1_749A5805FE83_t.jpg"
   }
  ],
  "hfov": 360,
  "id": "panorama_587E3C83_5430_BA7A_41C1_749A5805FE83",
  "class": "Panorama",
  "mapLocations": [
   {
    "x": 1268.6,
    "y": 379.07,
    "class": "PanoramaMapLocation",
    "angle": 59.4,
    "map": "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592"
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "hfovMax": 120,
  "label": "Hallway",
  "hfovMin": 60,
  "partial": false,
  "thumbnailUrl": "media/panorama_587E3C83_5430_BA7A_41C1_749A5805FE83_t.jpg"
 },
 {
  "id": "panorama_587E3C83_5430_BA7A_41C1_749A5805FE83_camera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -146.66,
     "targetPitch": -3.43,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "pitchSpeed": 33.1,
     "yawSpeed": 65.5
    },
    {
     "targetYaw": 117.07,
     "targetPitch": -4.71,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 30.36,
   "pitch": 0.23
  }
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    }
   },
   {
    "thumbnailUrl": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_1_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    }
   },
   {
    "snapshots": [
     {
      "position": {
       "class": "PanoramaCameraPosition",
       "hfov": 150,
       "yaw": 15.01,
       "pitch": -3.04
      },
      "class": "PanoramaSnapshot",
      "id": "snapshot_4B202E3E_5AE2_96F3_41D6_847EE2A3EB96",
      "image": {
       "levels": [
        {
         "height": 1500,
         "class": "ImageResourceLevel",
         "width": 1500,
         "url": "media/snapshot_4B202E3E_5AE2_96F3_41D6_847EE2A3EB96.jpg"
        }
       ],
       "class": "ImageResource"
      }
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_2_t.jpg"
   },
   {
    "thumbnailUrl": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_3_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "frameTransitionTime": 900,
  "id": "panorama_58182933_5430_DA9A_41D1_DDDE92320C10",
  "class": "LivePanorama",
  "mapLocations": [
   {
    "x": 1294.49,
    "y": 675.22,
    "class": "PanoramaMapLocation",
    "angle": 43.01,
    "map": "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592"
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "hfovMax": 150,
  "label": "Bathroom",
  "hfovMin": 37,
  "partial": false,
  "frameDisplayTime": 1200,
  "thumbnailUrl": "media/panorama_58182933_5430_DA9A_41D1_DDDE92320C10_2_t.jpg"
 },
 {
  "id": "panorama_58182933_5430_DA9A_41D1_DDDE92320C10_camera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -123.86,
     "targetPitch": -7.4,
     "path": "longest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "pitchSpeed": 21.33,
     "yawSpeed": 41.85
    },
    {
     "targetYaw": -17.91,
     "targetPitch": -58.81,
     "path": "longest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "pitchSpeed": 13.84,
     "yawSpeed": 26.8
    },
    {
     "targetYaw": -47.6,
     "targetPitch": -6.37,
     "path": "shortest",
     "hfovSpeed": 80.55,
     "class": "TargetPanoramaCameraMovement",
     "targetHfov": 103,
     "easing": "linear",
     "pitchSpeed": 40.59,
     "yawSpeed": 80.55
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 122,
   "yaw": 15.01,
   "pitch": -3.04
  }
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    }
   },
   {
    "snapshots": [
     {
      "position": {
       "class": "PanoramaCameraPosition",
       "hfov": 145,
       "yaw": 116.23,
       "pitch": -0.98
      },
      "class": "PanoramaSnapshot",
      "id": "snapshot_4B201E3E_5AE2_96F3_41AD_BE8516CE4C29",
      "image": {
       "levels": [
        {
         "height": 1500,
         "class": "ImageResourceLevel",
         "width": 1500,
         "url": "media/snapshot_4B201E3E_5AE2_96F3_41AD_BE8516CE4C29.jpg"
        }
       ],
       "class": "ImageResource"
      }
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_1_t.jpg"
   },
   {
    "thumbnailUrl": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_2_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    }
   }
  ],
  "hfov": 360,
  "frameTransitionTime": 5000,
  "id": "panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE",
  "class": "LivePanorama",
  "mapLocations": [
   {
    "x": 1671.1,
    "y": 386.05,
    "class": "PanoramaMapLocation",
    "angle": 61.88,
    "map": "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592"
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "hfovMax": 145,
  "label": "Master Bedroom",
  "hfovMin": 60,
  "partial": false,
  "frameDisplayTime": 5000,
  "thumbnailUrl": "media/panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_1_t.jpg"
 },
 {
  "id": "panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_camera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -39.87,
     "targetPitch": -5.64,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "pitchSpeed": 28.82,
     "yawSpeed": 56.9
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 120,
   "yaw": 116.23,
   "pitch": -0.98
  }
 },
 {
  "frames": [
   {
    "snapshots": [
     {
      "position": {
       "class": "PanoramaCameraPosition",
       "hfov": 120,
       "yaw": 165.15,
       "pitch": 1.93
      },
      "class": "PanoramaSnapshot",
      "id": "snapshot_4B200E3E_5AE2_96F3_4192_CB1442900C59",
      "image": {
       "levels": [
        {
         "height": 1500,
         "class": "ImageResourceLevel",
         "width": 1500,
         "url": "media/snapshot_4B200E3E_5AE2_96F3_4192_CB1442900C59.jpg"
        }
       ],
       "class": "ImageResource"
      }
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    },
    "thumbnailUrl": "media/panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A_t.jpg"
   }
  ],
  "hfov": 360,
  "id": "panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A",
  "class": "Panorama",
  "mapLocations": [
   {
    "x": 1983.79,
    "y": 518.61,
    "class": "PanoramaMapLocation",
    "angle": 47.52,
    "map": "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592"
   }
  ],
  "pitch": 0,
  "vfov": 180,
  "hfovMax": 120,
  "label": "Laundry",
  "hfovMin": 60,
  "partial": false,
  "thumbnailUrl": "media/panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A_t.jpg"
 },
 {
  "timeToIdle": 2000,
  "id": "panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A_camera",
  "initialSequence": {
   "restartMovementDelay": 2000,
   "movements": [
    {
     "targetYaw": -41.29,
     "targetPitch": -4.82,
     "path": "shortest",
     "hfovSpeed": 65.5,
     "class": "TargetPanoramaCameraMovement",
     "targetHfov": 99,
     "easing": "linear",
     "pitchSpeed": 33.1,
     "yawSpeed": 65.5
    },
    {
     "targetYaw": -122.56,
     "targetPitch": -5.28,
     "path": "shortest",
     "hfovSpeed": 33.25,
     "class": "TargetPanoramaCameraMovement",
     "targetHfov": 150,
     "easing": "linear",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25
    }
   ],
   "id": "sequence_5B65FF61_5451_D6B6_41D5_0973A72DCB5D",
   "restartMovementOnUserInteraction": true,
   "class": "PanoramaCameraSequence"
  },
  "idleSequence": "this.sequence_5B65FF61_5451_D6B6_41D5_0973A72DCB5D",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 165.15,
   "pitch": 1.93
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "id": "PanoramaPlayListItem_5367B530_5D75_5B43_41D3_1A62309C27A4",
    "media": "this.panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_5367B530_5D75_5B43_41D3_1A62309C27A4, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "id": "PanoramaPlayListItem_51EF653F_5D75_5BBD_41B8_447FBB4F2839",
    "media": "this.panorama_5F5865ED_5357_FCED_41C5_19D077869660",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_51EF653F_5D75_5BBD_41B8_447FBB4F2839, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
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
    "id": "PanoramaPlayListItem_51EEA53F_5D75_5BBD_41D4_F1FED418E145",
    "media": "this.panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_51EEA53F_5D75_5BBD_41D4_F1FED418E145, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "id": "PanoramaPlayListItem_51EEF540_5D75_5BC3_41D2_58E74218DE9B",
    "media": "this.panorama_587E3C83_5430_BA7A_41C1_749A5805FE83",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_51EEF540_5D75_5BC3_41D2_58E74218DE9B, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_587E3C83_5430_BA7A_41C1_749A5805FE83_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "id": "PanoramaPlayListItem_51E94540_5D75_5BC3_41CD_49F22C1EB64B",
    "media": "this.panorama_58182933_5430_DA9A_41D1_DDDE92320C10",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_51E94540_5D75_5BC3_41CD_49F22C1EB64B, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_58182933_5430_DA9A_41D1_DDDE92320C10_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "id": "PanoramaPlayListItem_51E99540_5D75_5BC3_41B2_203EB419326E",
    "media": "this.panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_51E99540_5D75_5BC3_41B2_203EB419326E, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "id": "PanoramaPlayListItem_51E9E540_5D75_5BC3_41C9_BC96D82403CA",
    "media": "this.panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_51E9E540_5D75_5BC3_41C9_BC96D82403CA, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)"
   }
  ]
 },
 {
  "label": "MTVGoldenwestvid4Lodge",
  "video": {
   "width": 1920,
   "mp4Url": "media/video_4B20BD6A_5AE3_FA92_41D3_70E714913D3E.mp4",
   "height": 1080,
   "class": "VideoResource"
  },
  "width": 1920,
  "id": "video_4B20BD6A_5AE3_FA92_41D3_70E714913D3E",
  "loop": false,
  "height": 1080,
  "class": "Video",
  "scaleMode": "fit_inside",
  "thumbnailUrl": "media/video_4B20BD6A_5AE3_FA92_41D3_70E714913D3E_t.jpg"
 },
 {
  "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
  "id": "MainViewerVideoPlayer",
  "class": "VideoPlayer",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true,
  "buttonPause": "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D"
 },
 {
  "class": "PlayList",
  "id": "thumbnaillist5245_playlist",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
    "camera": "this.panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5F5865ED_5357_FCED_41C5_19D077869660",
    "class": "PanoramaPlayListItem",
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
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)",
    "camera": "this.panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_587E3C83_5430_BA7A_41C1_749A5805FE83",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)",
    "camera": "this.panorama_587E3C83_5430_BA7A_41C1_749A5805FE83_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_58182933_5430_DA9A_41D1_DDDE92320C10",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)",
    "camera": "this.panorama_58182933_5430_DA9A_41D1_DDDE92320C10_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)",
    "camera": "this.panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)",
    "camera": "this.panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A_camera"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_4B20BD6A_5AE3_FA92_41D3_70E714913D3E",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 0)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.thumbnaillist5245_playlist, 8, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.thumbnaillist5245_playlist, 8, this.video_4B20BD6A_5AE3_FA92_41D3_70E714913D3E)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 0, 1)",
    "camera": "this.panorama_5C5BDBBC_535F_5572_4188_B7E83902FEF9_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5F5865ED_5357_FCED_41C5_19D077869660",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 1, 2)",
    "camera": "this.panorama_5F5865ED_5357_FCED_41C5_19D077869660_camera"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_50A65656_5ABC_D9CF_41D6_3EF3F3049DA3",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 2, 3)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 3, 4)",
    "camera": "this.panorama_5F9622E0_5431_6FB6_41BB_8B445E0F32E6_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_587E3C83_5430_BA7A_41C1_749A5805FE83",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 4, 5)",
    "camera": "this.panorama_587E3C83_5430_BA7A_41C1_749A5805FE83_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_58182933_5430_DA9A_41D1_DDDE92320C10",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 5, 6)",
    "camera": "this.panorama_58182933_5430_DA9A_41D1_DDDE92320C10_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 6, 7)",
    "camera": "this.panorama_593AF2D1_5450_AF96_41D4_60B229EDA5AE_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 7, 8)",
    "camera": "this.panorama_5A1E6463_5457_AABA_41A1_1794233C1C3A_camera"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_4B20BD6A_5AE3_FA92_41D3_70E714913D3E",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 8, 0)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 8, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 8, this.video_4B20BD6A_5AE3_FA92_41D3_70E714913D3E)"
   }
  ]
 },
 "this.map_5A214180_5471_EA76_41CA_8DC0B6E70592",
 {
  "class": "PlayList",
  "id": "playList_5364B52F_5D75_5B5D_419B_0E8E163C1049",
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
  "id": "playList_5364D52F_5D75_5B5D_41B8_9093C3AFEBF3",
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
  "data": {
   "label": "The Lodge Tour w background music"
  },
  "id": "audio_503CB7D6_5ACC_A6CF_41D5_2D4E0AA3326F",
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_503CB7D6_5ACC_A6CF_41D5_2D4E0AA3326F.mp3",
   "oggUrl": "media/audio_503CB7D6_5ACC_A6CF_41D5_2D4E0AA3326F.ogg"
  },
  "class": "MediaAudio",
  "autoplay": true
 }
], "children": [
 {
  "toolTipFontStyle": "normal",
  "toolTipFontFamily": "Arial",
  "transitionDuration": 500,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipShadowVerticalLength": 0,
  "toolTipFontColor": "#606060",
  "toolTipTextShadowBlurRadius": 3,
  "progressBorderRadius": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBorderSize": 0,
  "toolTipOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "paddingTop": 0,
  "playbackBarHeadBorderRadius": 0,
  "progressBorderSize": 2,
  "toolTipShadowHorizontalLength": 0,
  "shadow": false,
  "progressBarOpacity": 1,
  "toolTipTextShadowOpacity": 0,
  "playbackBarOpacity": 1,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "minHeight": 50,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadOpacity": 1,
  "progressBackgroundOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadShadow": true,
  "progressBarBorderColor": "#000000",
  "toolTipShadowColor": "#333333",
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipBackgroundColor": "#F6F6F6",
  "transitionMode": "blending",
  "playbackBarProgressBorderRadius": 0,
  "progressOpacity": 1,
  "toolTipPaddingLeft": 6,
  "playbackBarLeft": 0,
  "progressRight": 10,
  "playbackBarHeadHeight": 30,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "paddingRight": 0,
  "toolTipBorderSize": 1,
  "progressBarBorderSize": 1,
  "toolTipDisplayTime": 600,
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarRight": 0,
  "toolTipShadowSpread": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipPaddingBottom": 4,
  "toolTipPaddingRight": 6,
  "toolTipBorderRadius": 3,
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "toolTipFontSize": 12,
  "playbackBarHeight": 20,
  "playbackBarBorderSize": 2,
  "playbackBarProgressOpacity": 1,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarBorderColor": "#AAAAAA",
  "progressLeft": 10,
  "minWidth": 100,
  "top": 77,
  "toolTipFontWeight": "normal",
  "borderRadius": 0,
  "toolTipShadowOpacity": 1,
  "bottom": 92,
  "borderSize": 0,
  "id": "MainViewer",
  "progressBorderColor": "#AAAAAA",
  "playbackBarBottom": 10,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBorderRadius": 4,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "class": "ViewerArea",
  "toolTipShadowBlurRadius": 3,
  "progressBarBorderRadius": 4,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressHeight": 20,
  "left": 0,
  "right": 0,
  "progressBottom": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarProgressBorderSize": 0
 },
 {
  "itemLabelHorizontalAlign": "center",
  "backgroundColor": [
   "#000000"
  ],
  "itemPaddingBottom": 3,
  "itemOpacity": 1,
  "itemVerticalAlign": "middle",
  "backgroundColorRatios": [
   0
  ],
  "itemBackgroundColor": [],
  "itemLabelPosition": "bottom",
  "itemLabelFontStyle": "normal",
  "scrollBarOpacity": 0.5,
  "itemThumbnailShadowSpread": 1,
  "layout": "vertical",
  "itemLabelFontFamily": "Arial",
  "scrollBarColor": "#FFFFFF",
  "paddingTop": 10,
  "shadow": false,
  "itemLabelGap": 8,
  "itemPaddingTop": 3,
  "itemThumbnailShadowColor": "#000000",
  "backgroundColorDirection": "vertical",
  "itemPaddingRight": 3,
  "itemThumbnailShadowVerticalLength": 3,
  "verticalAlign": "top",
  "minHeight": 0,
  "itemMode": "normal",
  "scrollBarMargin": 2,
  "itemThumbnailBorderRadius": 5,
  "scrollBarWidth": 10,
  "itemThumbnailWidth": 100,
  "itemLabelTextDecoration": "none",
  "maxHeight": 800,
  "horizontalAlign": "left",
  "itemThumbnailOpacity": 1,
  "itemBorderRadius": 0,
  "itemThumbnailShadow": true,
  "paddingBottom": 10,
  "paddingRight": 20,
  "width": 158.5,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemThumbnailShadowBlurRadius": 4,
  "itemThumbnailScaleMode": "fit_outside",
  "itemPaddingLeft": 3,
  "gap": 0,
  "itemLabelFontColor": "#FFFFFF",
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0.2,
  "selectedItemLabelFontWeight": "bold",
  "itemBackgroundColorRatios": [],
  "paddingLeft": 20,
  "itemHorizontalAlign": "center",
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowOpacity": 0.8,
  "top": "8.02%",
  "minWidth": 0,
  "maxWidth": 800,
  "bottom": "10.1%",
  "borderSize": 0,
  "id": "thumbnaillist5245",
  "data": {
   "name": "ThumbnailList28173"
  },
  "borderRadius": 5,
  "itemThumbnailHeight": 70,
  "class": "ThumbnailList",
  "itemBackgroundOpacity": 0,
  "playList": "this.thumbnaillist5245_playlist",
  "itemLabelFontWeight": "normal",
  "itemLabelFontSize": 14,
  "right": "0%"
 },
 {
  "paddingBottom": 0,
  "overflow": "scroll",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "width": "100%",
  "backgroundColorRatios": [
   0,
   1
  ],
  "height": 92,
  "gap": 6,
  "layout": "horizontal",
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "paddingLeft": 0,
  "shadow": false,
  "contentOpaque": false,
  "minWidth": 1,
  "backgroundColorDirection": "vertical",
  "borderRadius": 0,
  "scrollBarOpacity": 0.5,
  "verticalAlign": "middle",
  "minHeight": 1,
  "borderSize": 0,
  "data": {
   "name": "Container29432"
  },
  "bottom": "0%",
  "class": "Container",
  "scrollBarWidth": 10,
  "scrollBarMargin": 2,
  "left": "0%",
  "children": [
   {
    "paddingBottom": 0,
    "width": 374,
    "fontSize": 40,
    "fontFamily": "Arial",
    "text": "The Lodge",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "fontStyle": "normal",
    "paddingLeft": 0,
    "shadow": false,
    "fontWeight": "bold",
    "minWidth": 30,
    "verticalAlign": "middle",
    "borderRadius": 0,
    "textDecoration": "none",
    "minHeight": 16,
    "borderSize": 0,
    "id": "label4056",
    "data": {
     "name": "Label28174"
    },
    "fontColor": "#666666",
    "class": "Label",
    "height": "100%",
    "horizontalAlign": "center",
    "paddingRight": 0
   },
   {
    "paddingBottom": 0,
    "overflow": "hidden",
    "backgroundColor": [
     "#FFFFFF"
    ],
    "width": 805.5,
    "backgroundColorRatios": [
     0
    ],
    "height": "93.478%",
    "gap": 10,
    "layout": "horizontal",
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 1,
    "paddingTop": 0,
    "scrollBarOpacity": 0.5,
    "paddingLeft": 0,
    "shadow": false,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "minWidth": 468,
    "backgroundColorDirection": "vertical",
    "borderRadius": 0,
    "verticalAlign": "middle",
    "minHeight": 20,
    "borderSize": 0,
    "id": "Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718",
    "data": {
     "name": "Container1194"
    },
    "scrollBarWidth": 10,
    "scrollBarMargin": 2,
    "class": "Container",
    "horizontalAlign": "center",
    "children": [
     {
      "toolTipFontStyle": "normal",
      "paddingBottom": 0,
      "toolTipFontFamily": "Arial",
      "toolTipBorderSize": 1,
      "toolTipDisplayTime": 600,
      "mode": "toggle",
      "toolTipPaddingTop": 4,
      "width": 40,
      "pressedIconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75_pressed.png",
      "toolTipFontColor": "#606060",
      "height": 40,
      "toolTipShadowSpread": 0,
      "toolTipShadowVerticalLength": 0,
      "toolTipOpacity": 1,
      "toolTipPaddingBottom": 4,
      "toolTipPaddingRight": 6,
      "toolTipBorderRadius": 3,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBorderColor": "#767676",
      "backgroundOpacity": 0,
      "toolTip": "Mute",
      "paddingTop": 0,
      "paddingLeft": 0,
      "shadow": false,
      "toolTipTextShadowColor": "#000000",
      "toolTipFontSize": 12,
      "minWidth": 0,
      "iconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75.png",
      "verticalAlign": "middle",
      "toolTipFontWeight": "normal",
      "borderRadius": 0,
      "toolTipShadowOpacity": 1,
      "cursor": "hand",
      "minHeight": 0,
      "borderSize": 0,
      "id": "IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
      "toolTipShadowHorizontalLength": 0,
      "class": "IconButton",
      "toolTipTextShadowOpacity": 0,
      "data": {
       "name": "Button49930"
      },
      "transparencyActive": true,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowBlurRadius": 3,
      "toolTipPaddingLeft": 6,
      "horizontalAlign": "center",
      "toolTipShadowColor": "#333333",
      "paddingRight": 0
     },
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
     {
      "paddingBottom": 0,
      "overflow": "hidden",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "width": 133,
      "backgroundColorRatios": [
       0
      ],
      "height": "100%",
      "gap": 5,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "backgroundOpacity": 1,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "paddingLeft": 0,
      "shadow": false,
      "scrollBarColor": "#000000",
      "contentOpaque": false,
      "minWidth": 20,
      "backgroundColorDirection": "vertical",
      "borderRadius": 0,
      "verticalAlign": "middle",
      "minHeight": 20,
      "borderSize": 0,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137",
      "data": {
       "name": "Container1200"
      },
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "center",
      "children": [
       {
        "paddingBottom": 0,
        "overflow": "hidden",
        "backgroundColor": [
         "#FFFFFF"
        ],
        "width": 47,
        "backgroundColorRatios": [
         0
        ],
        "height": "100%",
        "gap": 10,
        "layout": "vertical",
        "scrollBarVisible": "rollOver",
        "backgroundOpacity": 1,
        "paddingTop": 0,
        "scrollBarOpacity": 0.5,
        "paddingLeft": 0,
        "shadow": false,
        "scrollBarColor": "#000000",
        "contentOpaque": false,
        "minWidth": 20,
        "backgroundColorDirection": "vertical",
        "borderRadius": 0,
        "verticalAlign": "middle",
        "minHeight": 20,
        "borderSize": 0,
        "id": "Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A",
        "data": {
         "name": "Container1202"
        },
        "scrollBarWidth": 10,
        "scrollBarMargin": 2,
        "class": "Container",
        "horizontalAlign": "center",
        "children": [
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247"
        ],
        "creationPolicy": "inAdvance",
        "paddingRight": 0
       },
       "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40"
      ],
      "creationPolicy": "inAdvance",
      "paddingRight": 0
     },
     {
      "paddingBottom": 0,
      "overflow": "hidden",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "width": 85,
      "backgroundColorRatios": [
       0
      ],
      "height": "100%",
      "gap": 10,
      "layout": "horizontal",
      "scrollBarVisible": "rollOver",
      "backgroundOpacity": 1,
      "paddingTop": 0,
      "scrollBarOpacity": 0.5,
      "paddingLeft": 0,
      "shadow": false,
      "scrollBarColor": "#000000",
      "contentOpaque": false,
      "minWidth": 20,
      "backgroundColorDirection": "vertical",
      "borderRadius": 0,
      "verticalAlign": "middle",
      "minHeight": 20,
      "borderSize": 0,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3",
      "data": {
       "name": "Container1206"
      },
      "scrollBarWidth": 10,
      "scrollBarMargin": 2,
      "class": "Container",
      "horizontalAlign": "center",
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
       "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
      ],
      "creationPolicy": "inAdvance",
      "paddingRight": 0
     }
    ],
    "creationPolicy": "inAdvance",
    "paddingRight": 0
   },
   {
    "itemLabelHorizontalAlign": "center",
    "itemThumbnailShadow": true,
    "paddingBottom": 10,
    "paddingRight": 20,
    "itemOpacity": 1,
    "itemPaddingBottom": 3,
    "itemLabelFontColor": "#FFFFFF",
    "itemPaddingLeft": 3,
    "itemVerticalAlign": "middle",
    "itemLabelPosition": "bottom",
    "itemThumbnailShadowHorizontalLength": 3,
    "itemThumbnailShadowBlurRadius": 8,
    "height": 82.5,
    "scrollBarOpacity": 0.5,
    "itemBackgroundColor": [],
    "gap": 13,
    "itemThumbnailScaleMode": "fit_outside",
    "scrollBarVisible": "rollOver",
    "layout": "horizontal",
    "itemLabelFontStyle": "normal",
    "selectedItemLabelFontWeight": "bold",
    "itemThumbnailShadowSpread": 1,
    "width": "27.563%",
    "itemLabelFontFamily": "Arial",
    "backgroundOpacity": 0,
    "scrollBarColor": "#FFFFFF",
    "paddingTop": 10,
    "itemBackgroundColorRatios": [],
    "paddingLeft": 20,
    "shadow": false,
    "itemHorizontalAlign": "center",
    "itemLabelGap": 8,
    "itemPaddingTop": 3,
    "itemBackgroundColorDirection": "vertical",
    "itemThumbnailShadowColor": "#000000",
    "itemThumbnailShadowOpacity": 0.57,
    "verticalAlign": "top",
    "minWidth": 1,
    "borderRadius": 5,
    "itemThumbnailShadowVerticalLength": 3,
    "itemPaddingRight": 3,
    "minHeight": 1,
    "borderSize": 0,
    "id": "ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B",
    "itemMode": "normal",
    "data": {
     "name": "ThumbnailList35762"
    },
    "class": "ThumbnailList",
    "scrollBarWidth": 10,
    "itemThumbnailBorderRadius": 5,
    "scrollBarMargin": 2,
    "itemThumbnailHeight": 75,
    "itemThumbnailWidth": 100,
    "itemLabelTextDecoration": "none",
    "selectedItemLabelFontColor": "#FFCC00",
    "rollOverItemLabelFontWeight": "bold",
    "horizontalAlign": "left",
    "playList": "this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist",
    "itemLabelFontWeight": "normal",
    "itemThumbnailOpacity": 1,
    "itemLabelFontSize": 14,
    "itemBackgroundOpacity": 0,
    "itemBorderRadius": 0
   }
  ],
  "horizontalAlign": "center",
  "creationPolicy": "inAdvance",
  "paddingRight": 0
 },
 {
  "paddingBottom": 0,
  "width": "9.182%",
  "height": "5.352%",
  "url": "skin/Image_306F4727_273A_95B3_41B2_3DF89EEDBF85.png",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "paddingLeft": 0,
  "shadow": false,
  "scaleMode": "fit_inside",
  "minWidth": 1,
  "top": "0.05%",
  "verticalAlign": "middle",
  "maxWidth": 1467,
  "minHeight": 1,
  "borderSize": 0,
  "id": "Image_306F4727_273A_95B3_41B2_3DF89EEDBF85",
  "data": {
   "name": "Wave Logo"
  },
  "class": "Image",
  "borderRadius": 0,
  "maxHeight": 817,
  "horizontalAlign": "center",
  "right": "0.17%",
  "paddingRight": 0
 },
 {
  "paddingBottom": 0,
  "width": "38.165%",
  "height": "5.33%",
  "url": "skin/Image_3E29962B_272E_B7B3_4191_F996EF0F95BB.png",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "paddingLeft": 0,
  "shadow": false,
  "scaleMode": "fit_inside",
  "minWidth": 1,
  "top": "0.31%",
  "verticalAlign": "middle",
  "maxWidth": 1700,
  "minHeight": 1,
  "borderSize": 0,
  "id": "Image_3E29962B_272E_B7B3_4191_F996EF0F95BB",
  "data": {
   "name": "MTViewhomes"
  },
  "class": "Image",
  "borderRadius": 0,
  "maxHeight": 186,
  "horizontalAlign": "center",
  "right": "8.53%",
  "paddingRight": 0
 },
 {
  "paddingBottom": 0,
  "overflow": "scroll",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "width": "28.721%",
  "backgroundColorRatios": [
   0,
   1
  ],
  "height": "26.462%",
  "gap": 10,
  "layout": "absolute",
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0.3,
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "paddingLeft": 0,
  "shadow": false,
  "contentOpaque": false,
  "minWidth": 1,
  "top": "1.82%",
  "backgroundColorDirection": "vertical",
  "borderRadius": 0,
  "scrollBarOpacity": 0.5,
  "verticalAlign": "top",
  "minHeight": 1,
  "borderSize": 0,
  "id": "Container_581FBEE1_4338_67EB_41B1_0EF3FEBC0B73",
  "data": {
   "name": "Container24488"
  },
  "scrollBarWidth": 10,
  "class": "Container",
  "scrollBarMargin": 2,
  "left": "0.63%",
  "children": [
   "this.MapViewer"
  ],
  "horizontalAlign": "left",
  "creationPolicy": "inAdvance",
  "paddingRight": 0
 }
], 
 "paddingBottom": 0,
 "overflow": "visible",
 "width": "100%",
 "height": "100%",
 "gap": 10,
 "backgroundPreloadEnabled": true,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.88,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "shadow": false,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "minWidth": 20,
 "borderRadius": 0,
 "verticalAlign": "top",
 "minHeight": 20,
 "borderSize": 0,
 "id": "rootPlayer",
 "layout": "absolute",
 "data": {
  "name": "Player28156"
 },
 "class": "Player",
 "scrollBarWidth": 10,
 "scrollBarMargin": 2,
 "start": "this.syncPlaylists([this.thumbnaillist5245_playlist,this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_5364D52F_5D75_5B5D_41B8_9093C3AFEBF3.set('selectedIndex', 0); this.playAudioList([this.audio_503CB7D6_5ACC_A6CF_41D5_2D4E0AA3326F])",
 "horizontalAlign": "left",
 "buttonToggleMute": "this.IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
 "scripts": {
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "unregisterKey": function(key){  delete window[key]; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "registerKey": function(key, value){  window[key] = value; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; }
 },
 "mouseWheelEnabled": true,
 "creationPolicy": "inAdvance",
 "paddingRight": 0
})